const assert = require('assert');

const returnNegative = require('../source/returnNegative_55685cd7ad70877c23000102')

describe('#returnNegative()', function () {
    it('should work with positive integer', function () {
        assert.deepStrictEqual(returnNegative(1), -1);
    });
    it('should work with negative integer', function () {
        assert.deepStrictEqual(returnNegative(-1), -1);
    });
    it('should work with zero', function () {
        assert.deepStrictEqual(returnNegative(0), 0);
    });
    it('should work with positive floating point numbers', function () {
        assert.deepStrictEqual(returnNegative(0.12), -0.12);
    });
    it('should work with negative floating point numbers', function () {
        assert.deepStrictEqual(returnNegative(-0.15), -0.15);
    })
})