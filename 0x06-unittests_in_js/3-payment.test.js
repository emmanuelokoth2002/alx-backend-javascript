// 3-payment.test.js
const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
    it('should use Utils.calculateNumber with type SUM', function () {
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

        sendPaymentRequestToApi(100, 20);

        // Assert that Utils.calculateNumber was called with the correct arguments
        expect(calculateNumberSpy.calledWithExactly('SUM', 100, 20)).to.be.true;

        // Restore the spy after the test
        calculateNumberSpy.restore();
    });
});
