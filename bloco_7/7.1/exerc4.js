const longWord = (phrase) => {
   let words = phrase.split(' ');
   for(let index = 0 ; index < words.length; index += 1) {
       for(let indice = 0; indice < words.length; indice += 1) {
           if(words[index].length > words[indice].length){
               let result =  words[index]; 
           }
           console.log(result);
       }
   }
}

longWord('Meu nome não é jonyy');