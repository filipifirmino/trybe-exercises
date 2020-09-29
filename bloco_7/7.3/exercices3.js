const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui

// Step1
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);

// Step2

assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);

// Step3
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5,) , [1, 2, 3, 4], 'Sofreu alteração');

// Step4
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5,) , [1, 2, 3, 4])