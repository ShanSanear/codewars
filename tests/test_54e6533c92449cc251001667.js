const assert = require('assert');

const uniqueInOrder = require('../source/uniqueInOrder_54e6533c92449cc251001667.js')

describe('#uniqueInOrder()', function () {
    it('should return empty array when input is empty', function() {
       assert.deepStrictEqual(uniqueInOrder([]), []);
    });
    it('should work with one element', function() {
        assert.deepStrictEqual(uniqueInOrder(['A']), ['A']);
    });

    it(`should return ordered unique characters in string`, function () {
        const stringToTest = 'AAAABBBCCDAABBB';
        let result = uniqueInOrder(stringToTest);
        assert.deepStrictEqual(result, ['A', 'B', 'C', 'D', 'A', 'B'])
    });

    it('should work with strings of characters', function () {
        const stringToTest = ['A', 'A', 'A', 'A', 'B', 'B', 'B', 'C', 'C', 'D', 'A', 'A', 'B', 'B', 'B'];
        let result = uniqueInOrder(stringToTest);
        assert.deepStrictEqual(result, ['A', 'B', 'C', 'D', 'A', 'B'])
    });

    it('should work with numbers', function() {
        const numbersToTest = [1,2,2,3,3];
        let result = uniqueInOrder(numbersToTest);
        assert.deepStrictEqual(result, [1,2,3])
    });

    it('should work with different casing', function() {
        const stringToTest = 'ABBCcAD';
        let result = uniqueInOrder(stringToTest);
        assert.deepStrictEqual(result, ['A', 'B', 'C', 'c', 'A', 'D'])
    })

})