const image = document.querySelector('#cat');
image.style.marginLeft = "0px";
let windowSize = window.innerWidth;
let walkGoing = true;

function walk(){
    
if(parseInt(image.style.marginLeft) >= windowSize){
// image.style.marginLeft = '0px';
walkGoing = false;
}else if(parseInt(image.style.marginLeft) == 0){
    walkGoing = true;
}
if(walkGoing){
image.style.marginLeft = parseInt(image.style.marginLeft) + 10 + "px";
}else{
image.style.marginLeft = parseInt(image.style.marginLeft) - 10 + "px";
//Andar para trás
}
   
}
setInterval(walk, 50);