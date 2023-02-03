'use strict';

/**
 * bump-order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::bump-order.bump-order');
