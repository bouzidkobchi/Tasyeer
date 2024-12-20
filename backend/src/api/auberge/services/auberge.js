'use strict';

/**
 * auberge service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::auberge.auberge');
