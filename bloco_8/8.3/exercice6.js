    
const assert = require('assert');

const alunos = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const notas = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];


function studentAverage() {
  // escreva seu código aqui
    let result = [];
    let alunoNota = [] ;
    notas.forEach((nota) => {
       alunoNota.push(nota.reduce((previus, current) => previus + current ) / nota.length);
       
    });
    alunos.forEach((name, key) => {
        result.push({name:name, average:alunoNota[key]});
    });
    
    return result;
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepEqual(studentAverage(), expected);