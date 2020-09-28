const skill = (obj) => {
    const skills = Object.keys(obj);
    for (let index = 0; index < skills.length; index += 1) {
        console.log(`${skills[index]} : ${obj[skills[index]]}`);
    }
}

const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };

  skill(student1);