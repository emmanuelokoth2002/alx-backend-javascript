const chai = require('chai');
const chaiHttp = require('chai-http');
const request = require('request');

chai.use(chaiHttp);

const expect = chai.expect;

describe('Index page', () => {
  it('should return a status code of 200', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the message "Welcome to the payment system"', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
