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
//Adcionando texto ao elemto 
text.innerText = "Mais importante que a velocidade é a direção";
//Inserindo na arvore dom 
document.querySelector(".center-content").appendChild(text);

//Criando elemento div
let side = document.createElement('div');
//Inserindo a class
side.className = "left-content";
//Inserindo na arvore dom
document.querySelector(".main-content").appendChild(side);
