let a = 10;
let b = 5;
let c = 20;
let result = null;

if(a > b && a > c){
     result = a;
}else if (a > b && a < c){
     result = c;
}else {
     result = b;
}

console.log(result);