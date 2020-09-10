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
        painel.style.color="#fff";
        title.style.color = "#fff";
        text.style.color = "#fff";
    }else{
        let container = document.querySelector('.container-fluid');
        container.style.backgroundColor = "#fff";
    
        let title = document.querySelector('.title');
        let text = document.querySelector('.text');
        let painel = document.querySelector('.painel');
        painel.style.color="#000";
        title.style.color = "#000";
        text.style.color = "#000";
        
    }
   
}