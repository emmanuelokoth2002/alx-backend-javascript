// 9-api/api.test.js
const { expect } = require('chai');
const request = require('request');
const app = require('./api');

describe('Index page', function () {
  // Existing tests for the index page

  it('Other?', function (done) {
    // Your additional tests for the index page go here
    done();
  });
});

describe('Cart page', function () {
  it('Correct status code when :id is a number?', function (done) {
    request.get('http://localhost:7865/cart/123', (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct status code when :id is NOT a number (=> 404)?', function (done) {
    request.get('http://localhost:7865/cart/hello', (error, response) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  // Additional tests for the cart page go here
});
