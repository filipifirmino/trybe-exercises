
let numbers = [2, 3, 2, 5, 8, 2, 3, 5];


function numberRepeat(array){
    let cont = 0;
    let number = 0;
    let repeatnumber = 0;
    let indexRepeat = 0; 
    
    for(let key in array){
        let numberCheck = array[key];
        for(let key2 in array){
            if(numberCheck === array[key2] ){
                cont+=1
            }
        }
        if(number > repeatnumber){
            repeatnumber = number;
            indexRepeat = key;
        }
        number = 0;

    }
    return cont[indexRepeat];
}

function numberMaxRepeat(array){
    let number = {};

    for (let i = 0 ; i < array.length; i+=1 ){
        let value = array[i];
        if(number[valor] === undefined){
            number[valor] = 1
        }else{
            number[valor]= number[valor]+1
        }
    }
    let contRepeat = 0
    let contNumber = 0
    
    for (let key3 in number) {
        if (contRepeat < number[key3]) {
          contRepeat = number[key3];
          contNumber = key3;
        }
      }
    
      return contNumber;
}

console.log(numberRepeat(numbers))

//Bug a corrigir.