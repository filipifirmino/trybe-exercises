const assert = require('assert')

const people = [
    {
        name: "Nicole",
        bornIn: 1992,
        nationality: "Australian"
    },
    {
        name: "Harry",
        bornIn: 2008,
        nationality: "Australian"
    },
    {
        name: "Toby",
        bornIn: 1901,
        nationality: "Australian"
    },
    {
        name: "Frida",
        bornIn: 1960,
        nationality: "Dannish"
    },
    {
        name: "Fernando",
        bornIn: 2001,
        nationality: "Brazilian"
    }
]

// escreva filterPeople abaixo

const filterPeople = (array) => {
  let selectedPeople = array.filter((item) => {
    if(item.nationality =='Australian') {
       if(item.bornIn < 2000){
         return item;
       }  
    }
  });
  selectedPeople.map((item)=> {
    const{name,bornIn,nationality} = item;
    return {name:name , bornIn : bornIn, nationality : nationality}
  });
  return selectedPeople;
}

const filteredPeople = filterPeople(people) 

assert.deepEqual(filteredPeople[0], { name: "Nicole", bornIn: 1992, nationality: "Australian" })
assert.deepEqual(filteredPeople[1], { name: "Toby", bornIn: 1901, nationality: "Australian" })