'use strict';

const http = require('http');
const mm = require('egg-mock');
const request = require('supertest');

describe('test/egg-proxy.test.js', () => {
  let server;
  before(() => {
    server = http.createServer((req, res) => {
      if (req.url === '/proxy_html') {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('hi, this is proxy target');
      } else if (req.url === '/proxy_json') {
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.end(JSON.stringify({
          name: 'test',
          age: 1,
        }));
      } else if (req.url === '/proxy_404') {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.statusCode = 404;
        res.end();
      } else if (req.url === '/proxy_403') {
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.statusCode = 403;
        res.end(JSON.stringify({
          success: false,
          message: 'no permission',
        }));
      }
    });
    server.listen(1234);
  });

  after(function() {
    server.close();
  });

  let app;
  afterEach(mm.restore);

  [ 'egg-proxy-single', 'egg-proxy-multiple' ].forEach(name => {
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

      it('GET /proxy_html, should request html from proxy server success', () => {
        return request(app.callback())
          .get('/proxy_html')
          .expect(200, 'hi, this is proxy target');
      });

      it('GET /proxy_json, should request json from proxy server success', () => {
        return request(app.callback())
          .get('/proxy_json')
          .expect(200, {
            name: 'test',
            age: 1,
          });
      });

      it('GET /proxy_403, should request proxy server failed with 403 error', () => {
        return request(app.callback())
          .get('/proxy_403')
          .expect(403, {
            success: false,
            message: 'no permission',
          });
      });

      it('GET /proxy_404, should request proxy server failed with 404 error', () => {
        return request(app.callback())
          .get('/proxy_404')
          .expect(404);
      });
    });
  });
});
