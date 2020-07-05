const maximumSubarray = require('../index');
const assert = require('assert');


describe('#maxLength', () => {
  var tests = [
    { a: [1, 2, 3, 4], k: 4, result: 2 },
    { a: [1, 2, 3, 4], k: 11, result: 4 },
    { a: [2, 3, 4, 5], k: 1, result: 0 },
    { a: [4, 3, 2, 1], k: 4, result: 2 },
    { a: [6, 6, 6, 6, 6, 6, 6, 6], k: 6, result: 1 },
    { a: [-1, 2, 5, 4, 2, 6, 3, 21, 1, 1, 1, 1, 0], k: 6, result: 5 },
    { a: [0], k: 1, result: 1 },
    { a: [], k: 1, result: 0 },
    { a: [-10, -8, -3, 2, -4, -9, -2], k: 2, result: 7 },
    { a: [10, 8, 3, 2, 4, 9, 5], k: 2, result: 1 }
  ];
  tests.forEach(test => {
    it(`returns ${test.result} as the result when target value is ${test.k} and array is [${test.a.slice(0,20)}]`, () => {
      assert.equal(maximumSubarray.maxLength(test.a, test.k), test.result);
    });
  });
});
