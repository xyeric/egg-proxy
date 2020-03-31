'use strict';

const request = require('supertest');
const mm = require('egg-mock');

describe('test/egg-proxy.test.js', () => {
  let app;
  afterEach(mm.restore);

  [ 'egg-proxy-test', 'egg-proxy-object' ].forEach(name => {
    describe(name, () => {
      before(() => {
        app = mm.app({
          baseDir: `apps/${name}`,
        });
        return app.ready();
      });

      after(() => app.close());

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
    });
  });
});
