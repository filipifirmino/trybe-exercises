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
// Adcionando ul a elemento pai
document.querySelector('.right-content').appendChild(list);
//Criando array com os valores da lista
let numbers = ["um", "dois", "três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove", "Dez"];
//Populando lista
for (let i = 0; i < 10 ; i+=1) {
   let listItem = document.createElement('li');
   listItem.innerHTML=numbers[i];
   list.appendChild(listItem)
}

//9
for (let i = 0; i < 3 ; i+=1){
    document.querySelector(".main-content").appendChild(document.createElement('h3'))
}

// Parte 2
//1
title.className = "title";
//2
let subTitle = document.querySelectorAll('h3');
for (let index in subTitle) {
  subTitle[index].className="description";
}
//3
let childRemove = document.querySelector('.left-content');
content.removeChild(childRemove);
//4
let contRight = document.querySelector('.right-content');
contRight.style.marginRight = "auto";
//5
center.parentNode.style.backgroundColor ="green";
//6
list.lastChild.remove();
list.lastChild.remove();