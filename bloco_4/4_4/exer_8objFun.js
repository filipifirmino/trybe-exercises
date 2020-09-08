let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];


function bigName(array){
    let reduce = array[0];
    for(let key in array){
        if(reduce.length < array[key].length ){
            reduce =array[key]
        }
    }
    return reduce;
}

console.log(bigName(names))