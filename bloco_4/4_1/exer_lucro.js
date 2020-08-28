
let custo =  100.00;
let venda = 150.00;

//Atibuiçõe dos calculos
let custTotal = custo + (custo * (20.0/100))

let lucro =   venda - custTotal;

let range = lucro*1000.00;

//Constante
if((custo == 0) && (venda == 0)){
    console.log("Error: algum valor está zerado");
    
}else{
    console.log(`Seu lucro será de ${lucro} e seu range a cada 1000 unidade será de ${range}`);
}
