//Fontes
let fonts = ['Verdana', 'Arial', 'Arial Black'];

let button = document.querySelector('#button-switch');
button.addEventListener('change', tema)

function tema() {
    if(this.checked){
        let container = document.querySelector('.container-fluid');
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

selectFont.addEventListener('select', option);
selectSize.addEventListener('select', option);
selectSpace.addEventListener('select', option);

function option(){
    let font = document.querySelector('#painel');
    let sizeFont = document.querySelector('#fontOption');
    let space = document.querySelector('#spaceOption');

    font.style.fontFamily = selectFont.value;
    sizeFont.style.fontSize = selectSize.value;
   // space.style.fontFamily = selectFont.value;
    //Aplicar no texto
}
//web Storage 
