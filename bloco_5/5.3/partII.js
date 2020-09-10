//Create element button
let button = document.createElement('button');
button.innerHTML = "Click";
button.className="btn";
//Location button on DOM
let local = document.querySelector('.tarefa1').appendChild(button);
// function on envent
button.addEventListener('click', function (){
    alert('Você clicou no botão');
})

//Part III

let image = document.createElement('img');
image.src = 'Sharingan_3.png';

function change(){
 image.src = 'Rinnegan.png';    
}
function changeLeave(){
    image.src = 'Sharingan_3.png';
}


document.querySelector('.image').appendChild(image);

document.querySelector('.image').addEventListener('mouseover', change);
document.querySelector('.image').addEventListener('mouseleave', changeLeave);