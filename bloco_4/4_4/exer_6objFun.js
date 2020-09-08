let value = [2, 3, 6, 7, 10, 1];
let reduce = 0;


function bigValue(array){
     
    for (let indice in array){
        if(array[reduce] < array[indice]){
            reduce = indice;
        }
        
    }
    return reduce;
}
console.log(bigValue(value));