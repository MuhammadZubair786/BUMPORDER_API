'use strict';

/**
 * bump-order router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::bump-order.bump-order');
