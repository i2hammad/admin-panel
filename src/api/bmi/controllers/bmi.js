'use strict';

/**
 * bmi controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::bmi.bmi');
