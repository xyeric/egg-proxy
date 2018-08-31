'use strict';

/**
 * egg-proxy default config
 * @member Config#proxy
 * @property {String} SOME_KEY - some description
 */

exports.proxy = {
  host: 'http://localhost:7001',
  match: /^\/assets/,
};
