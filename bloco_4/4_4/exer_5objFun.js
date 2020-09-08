

function checkText (string){
    let palindromo = string.split('').reverse().join('')
    
    if(string == palindromo){
        return true;
    }else{
        return false;
    }
}

console.log(checkText("arara"))

//Verificação de palindromo



