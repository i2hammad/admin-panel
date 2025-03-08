'use strict';

/**
 * bmi service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bmi.bmi');
