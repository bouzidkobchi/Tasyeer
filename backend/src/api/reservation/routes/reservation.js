module.exports = {
    routes: [
        {
            method: 'POST',
            path: '/reservations/reserve',
            handler: 'reservation.reserve',
            config: {
                policies: [],
            },
        },
    ],
};