const assert = require('assert');
const proxyquire = require('proxyquire');

const { productsMock, ProductsServiceMock } = require('../src/utils/mocks');
const testServer = require('../src/utils/testServer');

describe('routes - products', function () {
  const route = proxyquire('../src/routes/', {
    '../services': ProductsServiceMock
  });

  const request = testServer(route);
  describe('GET /products', function () {
    it('should respond with status 200', function (done) {
      request.get('/api/products').expect(200, done);
    });
  });
});