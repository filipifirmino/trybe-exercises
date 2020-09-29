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
  Object.assign(allLessons, args);
  Object.keys(allLessons).forEach((key) => {
    for (let index = 1; index <= args.length; index += 1) {
      let newKey = `lesson${[index]}`;
      allLessons[newKey] = allLessons[key];
      if (Object.keys(allLessons)[index - 1].length == 1) {
        delete allLessons[key];
      }
    }
  });

  return allLessons;
}

console.log(collectionObject(lesson1, lesson2, lesson3));

//Step 6

function countStudent(obj) {
  for (let index = 0; index < Object.keys(obj).length; index += 1) {
    let result = obj["lesson" + (index + 1)].numeroEstudantes;
    result = result += result;
    return result;
  }
}

console.log(countStudent(collectionObject(lesson1, lesson2, lesson3)));
