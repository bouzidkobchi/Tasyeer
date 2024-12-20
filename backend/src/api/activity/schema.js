module.exports = {
    collectionName: 'reservations',
    info: {
        name: 'Reservation',
        description: 'Reservation model for managing auberge reservations',
        singularName: 'reservation',
        pluralName: 'reservations',
        displayName: 'Reservation',
    },
    options: {
        draftAndPublish: false, // Change to true if you want draft/publish functionality
    },
    attributes: {
        date: {
            type: 'date',
            required: true,
            unique: true, // Ensures no duplicate reservations for the same date and auberge
        },
        auberge: {
            type: 'relation',
            relation: 'manyToOne',
            target: 'api::auberge.auberge',
            required: true,
        },
        capacity: {
            type: 'integer',
            required: true,
        },
        users: {
            type: 'relation',
            relation: 'manyToMany',
            target: 'plugin::users-permissions.user',
        },
        createdAt: {
            type: 'timestamp',
            configurable: false, // Auto-handled by Strapi
        },
        updatedAt: {
            type: 'timestamp',
            configurable: false, // Auto-handled by Strapi
        },
    },
};
