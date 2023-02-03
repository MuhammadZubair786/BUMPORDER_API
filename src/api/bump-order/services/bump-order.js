'use strict';

/**
 * bump-order service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bump-order.bump-order');
