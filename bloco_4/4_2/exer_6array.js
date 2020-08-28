let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let cont = 0; 

for (let i = 0; i<numbers.length;i++){
    
    if(numbers[i] %2 !== 0){
        cont +=1
    }

}
if(cont > 0){
    console.log(`Temos ${cont} impares no array`)
}else{
    console.log("nenhum valor ímpar encontrado")
}

