
//Event listner
document.querySelector("#square-button").addEventListener('click', sq);
document.querySelector("#half-button").addEventListener('click', hf);
document.querySelector("#percent-button").addEventListener('click', pc);
document.querySelector("#area-button").addEventListener('click', ar);

// Square function
function sq(){
    let square = document.querySelector('#square-input').value;
    let resultSq = square * square;
    document.querySelector('#solution').innerText= `Your square number is: ${resultSq}`;
}

//Half function
function hf(){
    let half= document.querySelector('#half-input').value;
    let resultHf = half/ 2
    document.querySelector('#solution').innerText= `Your half number is: ${resultHf}`;
}

//Percent Function
function pc(){
    let percent= document.querySelector('#percent1-input').value;
    let whole= document.querySelector('#percent2-input').value;
    let resultPc = (percent/100) * whole
    document.querySelector('#solution').innerText= `Your percent is: ${resultPc}`;
}

//Area Function
function ar(){
    let radius = document.querySelector('#area-input').value;
    let pi = 3.14;
    let pow = Math.pow(radius,2);
    let area = pi * pow;
    let resultAr = parseFloat(area.toFixed(2));
    
    document.querySelector('#solution').innerText= `Your area is: ${resultAr}`; 
}
