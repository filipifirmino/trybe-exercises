const assert = require('assert');
// escreva a função addOne aqui

// Step 1
function addOne(array) {
    for (let index = 0; index < array.length; index += 1) {
        array[index] += 1;
    }
    return array;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepEqual(output, expected);
assert.deepEqual(myArray, unchanged);