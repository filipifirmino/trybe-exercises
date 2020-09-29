const assert = require('assert');
// escreva a função addAllnumbers aqui

// Step 1
function addAllnumbers(array) {
    let total = array[0];
    for (let index = 0; index < array.length - 1; index += 1) {
        total = array[index+1] += total;  
    }
    return total;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

console.log(output);
assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);