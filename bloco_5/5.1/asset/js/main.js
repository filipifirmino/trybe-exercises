  /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
        1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
        2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
        3. Crie uma função que mude a cor do quadrado vermelho para branco.
        4. Crie uma função que corrija o texto da tag <h1>.
        5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
        6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

     
function alterText() {
document.getElementsByTagName("p")[1].innerHTML= "Lorem ipsun latu senso correlato sensu";
}
function bgc(){
    document.querySelector('.main-content').style.backgroundColor = "#4ca46d";
}

function bgcFFF(){
    document.querySelector('.center-content').style.backgroundColor = "#FFFFFF";
}

function h1C(){
    document.querySelector('.title').innerText="Exercício 5.1 - JavaScript";
}

function bigText(){
let text = document.querySelectorAll('p');
   for (let i in text ){
       if(text[i].innerText == 'Texto padrão do nosso site'){
           text[0] = text[i];
       }
   } ;
}


function allP(){
   let allText =  document.querySelectorAll('p');
   for(let i in allText){
       console.log(allText[i].innerText);
   }
}
