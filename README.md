# egg-proxy

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-proxy.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-proxy
[travis-image]: https://img.shields.io/travis/xyeric/egg-proxy.svg?style=flat-square
[travis-url]: https://travis-ci.org/xyeric/egg-proxy
[codecov-image]: https://img.shields.io/codecov/c/github/xyeric/egg-proxy.svg?style=flat-square
[codecov-url]: https://codecov.io/github/xyeric/egg-proxy?branch=master
[david-image]: https://img.shields.io/david/xyeric/egg-proxy.svg?style=flat-square
[david-url]: https://david-dm.org/xyeric/egg-proxy
[snyk-image]: https://snyk.io/test/npm/egg-proxy/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-proxy
[download-image]: https://img.shields.io/npm/dm/egg-proxy.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-proxy

<!--
Description here.
-->

request proxy plugin for egg framework. based on [koa-proxy](https://github.com/popomore/koa-proxy)

## Install

```bash
$ npm i egg-proxy --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.proxy = {
  enable: true,
  package: 'egg-proxy',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.proxy = {
  host: 'http://localhost:9000', // target host that matched path will be proxy to
  match: /\/assets/ // path pattern.
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/xyeric/egg-proxy/issues).

## License

[MIT](LICENSE)
