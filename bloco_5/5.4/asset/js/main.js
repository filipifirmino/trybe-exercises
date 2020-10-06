//Fontes
let fonts = ['Verdana', 'Arial', 'Arial Black'];

let button = document.querySelector('#button-switch');
button.addEventListener('change', tema)

let container = document.querySelector('.container-fluid');

function tema() {
    if(this.checked){
        container.style.backgroundColor = "#000";
    
        let title = document.querySelector('.title');
        let text = document.querySelector('.text');
        let painel = document.querySelector('.painel');
        let image = document.querySelector('.imgLogo');
        image.src = "/asset/image/logo_with.png";
        painel.style.color="#fff";
        title.style.color = "#fff";
        text.style.color = "#fff";
    }else{
        let container = document.querySelector('.container-fluid');
        container.style.backgroundColor = "#fff";
    
        let title = document.querySelector('.title');
        let text = document.querySelector('.text');
        let painel = document.querySelector('.painel');
        let image = document.querySelector('.imgLogo');
        image.src = "/asset/image/logo_black.png";
        painel.style.color="#000";
        title.style.color = "#000";
        text.style.color = "#000";
        
    }

   
}

let selectFont = document.querySelector('#option');
let selectSize = document.querySelector('#fontOption');
let selectSpace = document.querySelector('#spaceOption');
let textParg = document.querySelector('.text');

selectFont.addEventListener('change', function (){
    textParg.style.fontFamily = selectFont.value;
    
});
selectSize.addEventListener('change', function (){
    textParg.style.fontSize = selectSize.value;
   
});
selectSpace.addEventListener('change', function (){
    textParg.style.lineHeight = selectSpace.value;
    
});


//web Storage 

let currentStyle = {
    font : selectFont.value,
    fontSize : selectSize.value,
    lineSpace : selectSpace.value
}
function webStorage() {
    localStorage.setItem('style',JSON.stringify(currentStyle));
}
selectFont.addEventListener('change', webStorage);

