// const { customError, sanitizeEntity } = require('@strapi/utils');

module.exports = {
  async reserve(ctx) {
    try {
      const { fromTime, toTime, aubergeId, userId } = ctx.request.body;

      if (!fromTime || !toTime || !aubergeId || !userId) {
        return ctx.badRequest('Missing required fields');
      }

      const startDate = new Date(fromTime);
      const endDate = new Date(toTime);
      // @ts-ignore
      const dateDiff = (endDate - startDate) / (1000 * 60 * 60 * 24);

      for (let i = 0; i <= dateDiff; i++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + i);

        const dateString = currentDate.toISOString().split('T')[0];

        // Check if the reservation exists
        let reservation = await strapi.db.query('api::reservation.reservation').findOne({
          where: { date: dateString, auberge: aubergeId },
          populate: ['users', 'auberge'],
        });

        if (!reservation) {
          // Fetch auberge details
          const auberge = await strapi.db.query('api::auberge.auberge').findOne({
            where: { id: aubergeId },
          });

          if (!auberge) return ctx.notFound('Auberge not found');

          // Create reservation if it doesn't exist
          reservation = await strapi.db.query('api::reservation.reservation').create({
            data: {
              date: dateString,
              auberge: aubergeId,
              capacity: auberge.capacity,
              users: [], // Initialize with an empty array
            },
          });
        } else {
          reservation.users = reservation.users || []; // Ensure 'users' is an array
        }

        // Check capacity
        if (reservation.users.length >= reservation.capacity) {
          return ctx.conflict(`Reservation full for date: ${dateString}`);
        }

        // Add user to the reservation
        const userExists = reservation.users.some((user) => user.id === userId);
        if (!userExists) {
          await strapi.db.query('api::reservation.reservation').update({
            where: { id: reservation.id },
            data: {
              users: [...reservation.users.map((u) => u.id), userId], // Safely update the users list
            },
          });
        }
      }

      ctx.send({ message: 'Reservation successful' });
    } catch (error) {
      console.error(error);
      ctx.internalServerError('An error occurred while processing the reservation');
    }
  },
};