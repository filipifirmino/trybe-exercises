let productPrice = 59.99;
let discount = 0.30;

let btn = document.createElement('button');
btn.innerHTML = "Click";
btn.className="btn";
//Location button on DOM
let loc = document.querySelector('.tarefa2').appendChild(btn);


//event
btn.addEventListener('click',function (){
    let total = productPrice * discount;
    alert(`Desconto de R$ ${total}`)
})