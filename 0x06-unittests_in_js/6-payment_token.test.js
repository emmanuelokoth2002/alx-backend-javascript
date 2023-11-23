// 6-payment_token.test.js
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
    it('should resolve with the correct data when success is true', function (done) {
        // Call the function with success = true
        getPaymentTokenFromAPI(true)
            .then((result) => {
                // Verify that the result is correct
                expect(result).to.deep.equal({ data: 'Successful response from the API' });
                done(); // Call done to signal the completion of the async test
            })
            .catch(done); // Call done with an error to indicate test failure if there's an error
    });

    it('should resolve with undefined when success is false', function (done) {
        // Call the function with success = false
        getPaymentTokenFromAPI(false)
            .then((result) => {
                // Verify that the result is undefined
                expect(result).to.be.undefined;
                done(); // Call done to signal the completion of the async test
            })
            .catch(done); // Call done with an error to indicate test failure if there's an error
    });
});
