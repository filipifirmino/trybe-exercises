let button = document.querySelector("#lib-button");
// Add function event
button.addEventListener('click', makeMadLib);

function makeMadLib(){
   let msg1 = document.querySelector('#noun'); 
   let msg2 = document.querySelector('#adjective'); 
   let msg3 = document.querySelector('#person'); 
    if(msg1.value == '' || msg2.value == '' || msg3.value == ''){
        alert('Favor preencher todos os campos');
    }else{
        alert(`${msg3.value} gosta muito de ${msg1.value} e tem que ser ${msg2.value}`);
    }
   
}

