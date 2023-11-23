// 8-api/api.test.js
const { expect } = require('chai');
const request = require('request');
const app = require('./api');

describe('Index page', function () {
  it('Correct status code?', function (done) {
    request.get('http://localhost:7865', (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', function (done) {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('Other?', function (done) {
    // Your additional tests go here
    done();
  });
});
