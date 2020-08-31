let box = "*"
let line = '';
//Definido quebra e simbolo

function square (n){//Criando escopo da função
    for (let i = 0; i <= n; i+=1){
         console.log(line)
        line= line + box ;         
    }
    
}

square(5);