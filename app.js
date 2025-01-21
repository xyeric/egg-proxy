'use strict';

const proxyMiddleware = require('koa-proxy');

module.exports = app => {
  let proxyConfs = app.config.eggProxy || [];
  if (!Array.isArray(proxyConfs)) {
    proxyConfs = [].concat(proxyConfs);
  }

  proxyConfs.forEach(config => {
    app.use(proxyMiddleware(config));
  });
};
