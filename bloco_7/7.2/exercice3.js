const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};
/*
//Step 1
function update(obj, key, value) {
  obj[key] = value;
  console.log(obj);
}

update(lesson2, "turno", "manhã");

//step 2
function listKeys(obj) {
  return Object.keys(obj);
}

console.log(listKeys(lesson2));

//Step 3
function sizeObject(obj) {
  return Object.keys(obj).length;
}

console.log(sizeObject(lesson3));

//Step 4
function listvalues(obj) {
  return Object.values(obj);
}

console.log(listvalues(lesson3));
*/
//Step 5
function collectionObject(...args) {
  const allLessons = {};
  let index = 0;
  Object.assign(allLessons, args);
    //Isto pode ser simplificado pegando os valores dos objeto e somando direto
    Object.keys(allLessons).forEach((key) => {
      let newKey = `lesson${[index]}`;
      allLessons[newKey] = allLessons[key];
      index+=1;
    });

    Object.keys(allLessons).forEach((key) => {
      
      let objKey = Object.keys(allLessons)
      if(key.length === 1){
        if(objKey[0].length === 1 ){
          delete allLessons[key];
        }
      } else{
        out = allLessons;
      }
    });
    return out;
}

//console.log(collectionObject(lesson1, lesson2, lesson3));

//Step 6

function countStudent(obj) {
  let out = 0;
  const keys = Object.keys(obj);
  for (let index = 0; index < keys.length; index += 1) {
    let result = obj["lesson" + (index)].numeroEstudantes;
    out = out + result;
  }
  return out;
}

//console.log(countStudent(collectionObject(lesson1, lesson2, lesson3)));

// Step 7 
const position = (array, key) => {
  const index = Object.keys(array);
  return array[index[key]];
}

const materias = {matematica : 'numero', portugues : 'lingua', }

console.log(position(materias, 0));

// Step 8