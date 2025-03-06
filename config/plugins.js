module.exports = ({ env }) => ({
    'documentation': {
      enabled: true,
      config: {
        openapi: {
          info: {
            title: 'Strapi API Documentation',
            description: 'Auto-generated API documentation for Meal Planner',
            version: '1.0.0',
          },
        },
      },
    },
  });