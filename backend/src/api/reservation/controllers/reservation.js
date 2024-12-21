module.exports = {
  async reserve(ctx) {
    try {
      const { fromTime, toTime, aubergeId, userId } = ctx.request.body;

      if (!fromTime || !toTime || !aubergeId || !userId) {
        return ctx.badRequest('Missing required fields');
      }

      const startDate = new Date(fromTime);
      const endDate = new Date(toTime);
      const dateDiff = (endDate - startDate) / (1000 * 60 * 60 * 24);

      for (let i = 0; i <= dateDiff; i++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + i);
        const dateString = currentDate.toISOString().split('T')[0];

        // Fetch reservation for the current date
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
              users: [], // Initialize as an empty array
            },
          });
        }

        // Ensure `users` is properly initialized
        reservation.users = reservation.users || [];

        // Check capacity
        if (reservation.users.length >= reservation.capacity) {
          return ctx.conflict(`Reservation full for date: ${dateString}`);
        }

        // Add user to the reservation if not already present
        const userExists = reservation.users.some((user) => user.id === userId);
        if (!userExists) {
          const updatedUsers = [...reservation.users.map((u) => u.id), userId];
          await strapi.db.query('api::reservation.reservation').update({
            where: { id: reservation.id },
            data: {
              users: updatedUsers,
            },
          });
        }
      }

      ctx.send({ message: 'Reservation successful' });
    } catch (error) {
      console.error('Error during reservation:', error);
      ctx.internalServerError('An error occurred while processing the reservation');
    }
  },
};