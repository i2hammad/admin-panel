'use strict';

/**
 * favorite-recipe service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::favorite-recipe.favorite-recipe');
