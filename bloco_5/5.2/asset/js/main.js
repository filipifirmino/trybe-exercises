//Criando tag h1
let title = document.createElement("h1");
//Adcionando texto a tag h1
title.innerText = "Exercício 5.2 - JavaScript DOM";
//Inserido tag ao dom
document.body.appendChild(title);

//Criando elemento div
let content = document.createElement('div');
//Atribuindo uma classe a div
content.className = "main-content";
//Inserindo a tag como filha do body
document.body.appendChild(content);

//Criando div 
let center = document.createElement('div')
//Setando class
center.className = "center-content";
// Atribuindo ao elemento pai
document.querySelector(".main-content").appendChild(center)

//Criando elemento p
let text  = document.createElement('p');
//Adcionando texto ao elemento 
text.innerText = "Mais importante que a velocidade é a direção";
//Inserindo na arvore dom 
document.querySelector(".center-content").appendChild(text);

//Criando elemento div
let side = document.createElement('div');
//Inserindo a class
side.className = "left-content";
//Inserindo na arvore dom
document.querySelector(".main-content").appendChild(side);

//Criando elemento div
let sideRight = document.createElement('div');
//Inserindo class
sideRight.className ="right-content";
//Inserindo ao dom
document.querySelector(".main-content").appendChild(sideRight);

//Criando elemento image
let image = document.createElement('img');
//Setando class
image.className = 'small-image';
// Inserindo src
image.src = "https://picsum.photos/200";
//Inserindo no dom
document.querySelector(".left-content").appendChild(image)

//Criando ul
let list = document.createElement('ul');
let listItems = document.createElement('li');
let numbers = ["um", "dois", "três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove", "Dez"];

for (let i = 0; i < 10 ; i+=1) {
   console.log()
   document.querySelector('.right-content').appendChild(listItems)
}
//Refatorar

//9
for (let i = 0; i < 3 ; i+=1){
    document.querySelector(".main-content").appendChild(document.createElement('h3'))
}
