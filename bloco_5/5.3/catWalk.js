const image = document.querySelector('#cat');
image.style.marginLeft = "0px";
let windowSize = window.innerWidth;

setInterval(walk, 50);
function walk(){
    image.style.marginLeft = parseInt(image.style.marginLeft) + 10 + "px";
    if(parseInt(image.style.marginLeft) >= windowSize){
       image.style.marginLeft = '0px';
       /*
       while(image.style.marginLeft !== "0px"){
        image.style.marginLeft = parseInt(image.style.marginLeft) - 10 + "px";
       }*/
       //Andar para trás
    }
    console.log(image.style.marginLeft);

    
}