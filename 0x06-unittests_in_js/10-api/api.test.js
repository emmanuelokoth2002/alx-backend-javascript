// 10-api/api.test.js
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

describe('Cart page', () => {
  it('should return a status code of 200 when :id is a number', (done) => {
    request('http://localhost:7865/cart/12', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return a status code of 404 when :id is NOT a number', (done) => {
    request('http://localhost:7865/cart/hello', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('/login endpoint', () => {
  it('should return a status code of 200', (done) => {
    chai
      .request(app)
      .post('/login')
      .set('Content-Type', 'application/json')
      .send({ userName: 'John' })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should return the correct welcome message', (done) => {
    chai
      .request(app)
      .post('/login')
      .set('Content-Type', 'application/json')
      .send({ userName: 'Jane' })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.text).to.equal('Welcome Jane');
        done();
      });
  });
});

describe('/available_payments endpoint', () => {
  it('should return a status code of 200', (done) => {
    chai.request(app).get('/available_payments').end((err, res) => {
      expect(err).to.be.null;
      expect(res).to.have.status(200);
      done();
    });
  });
