'use strict';

const PROXY = Symbol('Application#PROXY');
const ProxyContext = require('../../lib/context');

module.exports = {
  get proxy() {
    if (!this[PROXY]) {
      this[PROXY] = new ProxyContext(this);
    }
    return this[PROXY];
  },
};

