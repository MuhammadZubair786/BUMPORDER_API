'use strict';

/**
 * up-sell service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::up-sell.up-sell');
