'use strict';

exports.keys = '123456';

exports.proxy = [
  {
    host: 'http://127.0.0.1:11111',
    match: /^\/test1/,
  },
  // {
  //   host: 'https://github.com',
  //   match: /^\/explore/,
  // },
];
