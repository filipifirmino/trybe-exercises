const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
// Step 1
assert.strictEqual(sum(4,5) , 9, "E verifique se seus valores estaão corretos");
// Stepe 2
assert.strictEqual(sum(0,0), 0 , "Seus valores são diferentes de 0");
// Step 3
assert.throws(() => {
    sum(4, '5');
})
// Step 4
assert.throws(() => {
    sum(4,'5');
}, /^Error: parameters must be numbers$/);