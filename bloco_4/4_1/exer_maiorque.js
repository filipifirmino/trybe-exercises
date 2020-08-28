let a = 10;
let b = 5;
let result = null;

if(a > b && a != b){//Para caso de implementação com interação com o usuario é necessario a atribuição do direfente
   result = a;
}else{
    result = b;
}
if(result == null){
    console.log("Os valores são iguais")
}

console.log(result);