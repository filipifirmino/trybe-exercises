    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  // escreva seu código aqui
  let count = 0;
 const allString = names.reduce((previus, current) => previus + current)
 const stringSplit = allString.split('');
 stringSplit.forEach((char) =>{
    if(char === 'A' ||char === 'a') {
      count+=1;
    }
 });  
 return count;  
}

assert.deepEqual(containsA(), 20);