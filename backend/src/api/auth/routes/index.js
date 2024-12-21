module.exports = {
    routes: [
        {
            method: 'POST',
            path: '/auth/local',
            handler: 'auth.login', // This will map to your custom controller's login function
            config: {
                auth: false, // Allow unauthenticated access to login
            },
        },
    ],
};