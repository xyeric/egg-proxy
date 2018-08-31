'use strict';

const proxy = require('koa-proxy');

module.exports = app => {
  let proxyConfs = app.config.proxy || [];
  if (!Array.isArray(proxyConfs)) {
    proxyConfs = [].concat(proxyConfs);
  }

  proxyConfs.forEach(config => {
    app.use(proxy(config));
  });
};
