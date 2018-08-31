'use strict';

const request = require('supertest');
const mm = require('egg-mock');

describe('test/egg-proxy.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/egg-proxy-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('GET /, should return 200', () => {
    return request(app.callback())
      .get('/')
      .expect('hi, proxy')
      .expect(200);
  });

  it('GET /test1, should return 500', () => {
    return request(app.callback())
      .get('/test1')
      .expect(500);
  });

  // it('GET /explore, should return 200', () => {
  //   return request(app.callback())
  //     .get('/explore')
  //     .expect(200);
  // });
});
