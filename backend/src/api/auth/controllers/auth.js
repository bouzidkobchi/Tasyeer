'use strict';

module.exports = {
  async login(ctx) {
    const { identifier, password } = ctx.request.body;

    // Validate input
    if (!identifier || !password) {
      return ctx.badRequest('Please provide both identifier and password');
    }

    try {
      // Find the user with the identifier (email or username)
      const user = await strapi.query('plugin::users-permissions.user').findOne({
        where: {
          email: identifier, // or username depending on how you're authenticating
        },
        populate: {
          role: true,  // Populate the role
        },
      });

      // If the user doesn't exist or the password is incorrect
      if (!user || !await strapi.plugins['users-permissions'].services.user.validatePassword(password, user.password)) {
        return ctx.badRequest('Invalid credentials');
      }

      // Generate the JWT token
      const jwt = strapi.plugins['users-permissions'].services.jwt.issue({
        id: user.id,
      });

      // Send response with the JWT and user data (including custom properties and role)
      ctx.send({
        jwt,
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          role: user.role ? user.role.name : null,  // Include the role
          documentId: user.documentId,             // Include documentId
          confirmed: user.confirmed,               // Include confirmed
          blocked: user.blocked,                   // Include blocked status
          createdAt: user.createdAt,               // Include createdAt timestamp
          updatedAt: user.updatedAt,               // Include updatedAt timestamp
          publishedAt: user.publishedAt,           // Include publishedAt timestamp
          BirthDay: user.BirthDay,                 // Include BirthDay
          BirthPlace: user.BirthPlace,             // Include BirthPlace
          sex: user.sex,                           // Include sex
          IdentityCardNumber: user.IdentityCardNumber // Include IdentityCardNumber
        },
      });
    } catch (err) {
      console.error('Error during login:', err);
      ctx.throw(500, 'Internal server error');
    }
  },
};