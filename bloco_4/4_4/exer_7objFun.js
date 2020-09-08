let value = [2, 4, 6, 7, 10, 0, -3];
let reduce = 0;


function bigValue(array){
     
    for (let indice in array){
        if(array[reduce] > array[indice]){
            reduce = indice;
        }
        
    }
    return reduce;
}
console.log(bigValue(value));