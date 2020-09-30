const assert = require('assert');
const removeVowels = (word) => {
    const characters = word.split('');
    const results = [];
    let contador = 0;
    for (let i = 0; i < characters.length; i += 1) {
      if (
        characters[i] === 'a' ||
        characters[i] === 'o' ||
        characters[i] === 'i' ||
        characters[i] === 'e' ||
        characters[i] === 'u'
      ) {
        results.push(characters[i]= contador + 1);
        contador+=1;
      } else {
        results.push(characters[i]);
      }
    }
    let saida = results.join('');
    return saida;
  };
  
  
  const parameter = 'Dayane';
  const result = 'D1y2n3';
  const output = removeVowels(parameter);
  assert.strictEqual(output, result);
