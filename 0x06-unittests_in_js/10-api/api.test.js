// 10-api/api.test.js
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
  // Existing tests for the cart page

  // Additional tests for the cart page go here
});

describe('Login endpoint', function () {
  it('Correct status code and response for /login endpoint', function (done) {
    request.post(
      {
        url: 'http://localhost:7865/login',
        json: { userName: 'Alice' },
      },
      (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Alice');
        done();
      }
    );
  });

  // Additional tests for the /login endpoint go here
});

describe('/available_payments endpoint', function () {
  it('Correct status code and response for /available_payments endpoint', function (done) {
    request.get('http://localhost:7865/available_payments', (error, response, body) => {
      const expectedResponse = {
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      };

      expect(response.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal(expectedResponse);
      done();
    });
  });

  // Additional tests for the /available_payments endpoint go here
});
