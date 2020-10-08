const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
const testInput = [1, 2, 3, 4];
// Step1
assert.deepStrictEqual(myRemove(testInput, 3), [1, 2, 4]);

// Step2 
assert.notDeepStrictEqual(myRemove(testInput, 3), [1, 2, 3, 4]);

// Step 3
assert.deepStrictEqual(myRemove(testInput, 3), [1, 2, 3, 4], 'Sofreu alteração');

// Step 4
assert.deepStrictEqual(myRemove(testInput, 5), [1, 2, 3, 4]);
