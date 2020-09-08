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