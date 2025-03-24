module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1444),
  url: 'https://eatmeatapp.com', // Use your domain
  admin: {
    url: 'https://eatmeatapp.com/admin',
    serveAdminPanel: true,  // Ensure admin panel is served
  },
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
