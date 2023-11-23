// 4-payment.test.js
const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function () {
    it('should stub Utils.calculateNumber and log the correct message', function () {
        // Stub Utils.calculateNumber to always return 10
        const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

        // Spy on console.log
        const consoleLogSpy = sinon.spy(console, 'log');

        // Call the function
        sendPaymentRequestToApi(100, 20);

        // Verify that the stub is called with the correct arguments
        expect(calculateNumberStub.calledWithExactly('SUM', 100, 20)).to.be.true;

        // Verify that console.log is called with the correct message
        expect(consoleLogSpy.calledWithExactly('The total is: 10')).to.be.true;

        // Restore the stub and the spy after the test
        calculateNumberStub.restore();
        consoleLogSpy.restore();
    });
});
