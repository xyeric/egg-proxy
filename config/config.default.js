'use strict';

/**
 * egg-proxy default config
 * @member Config#pluginProxy
 * @property {String} SOME_KEY - some description
 */

exports.pluginProxy = {
  host: 'http://localhost:7001',
  match: /^\/assets/,
};
