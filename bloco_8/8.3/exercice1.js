    
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
  // escreva seu código aqui
  const resultArray = arrays.reduce((previus, current) => {
    current.map((element)=> {
        previus.push(element);
    })
    return previus;
  });
  return resultArray;
}

assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);