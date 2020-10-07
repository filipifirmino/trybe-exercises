const assert = require('assert');
// escreva a função wordLengths aqui

// step 1
function wordLengths(array) {
  for(let index = 0; index < array.length; index += 1) {
      array[index] = array[index].length;
  }
  return array;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);