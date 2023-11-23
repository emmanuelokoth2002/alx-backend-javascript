// 2-calcul_chai.test.js
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', function () {
    it('should return the sum of rounded numbers when type is SUM', function () {
        expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return the subtraction of rounded numbers when type is SUBTRACT', function () {
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return the division of rounded numbers when type is DIVIDE', function () {
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" when trying to divide by 0', function () {
        expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should throw an error for invalid operation type', function () {
        expect(() => calculateNumber('INVALID_TYPE', 1.4, 4.5)).to.throw('Invalid operation type');
    });
});
