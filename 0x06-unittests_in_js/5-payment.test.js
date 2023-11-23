// 5-payment.test.js
const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function () {
    let consoleLogSpy;

    beforeEach(function () {
        // Create a spy on console.log before each test
        consoleLogSpy = sinon.spy(console, 'log');
    });

    afterEach(function () {
        // Restore the spy after each test
        consoleLogSpy.restore();
    });

    it('should log the correct message and be called once with totalAmount = 100, totalShipping = 20', function () {
        // Call the function
        sendPaymentRequestToApi(100, 20);

        // Verify that console.log is called with the correct message
        expect(consoleLogSpy.calledWithExactly('The total is: 120')).to.be.true;

        // Verify that console.log is called once
        expect(consoleLogSpy.calledOnce).to.be.true;
    });

    it('should log the correct message and be called once with totalAmount = 10, totalShipping = 10', function () {
        // Call the function
        sendPaymentRequestToApi(10, 10);

        // Verify that console.log is called with the correct message
        expect(consoleLogSpy.calledWithExactly('The total is: 20')).to.be.true;

        // Verify that console.log is called once
        expect(consoleLogSpy.calledOnce).to.be.true;
    });
});
