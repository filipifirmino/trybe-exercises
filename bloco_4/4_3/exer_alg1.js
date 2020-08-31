let box = "*"
let line = '';

function square (n){
    for (let i = 0; i<n; i+=1){
         line= line + box ;
               
    };
    for(let j = 0;j<n; j+=1){
        console.log(line)
    };
    
}

square(5);