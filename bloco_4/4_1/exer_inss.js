let salario = 3500.00;

if(salario <=1556.94){
    let aliquota = 8.0;
    let result = salario*(aliquota/100);
    let desconto = salario - (salario-result) ;
    let ir = "isento";
    console.log(`Seu desconto total é de ${desconto.toFixed(2)} e seu IR é ${ir}`)
   
}else if(salario >= 1556.95 && salario <= 2594.92){
    let aliquota = 9.0;
    let result = salario*(aliquota/100);
    let desconto =  salario - (salario-result);
    if(salario <=1903.98){
        console.log(`Seu desconto total é de ${desconto.toFixed(2)} e seu IR é ${ir}`)
    }else if(salario <=2826.65){
        let ir = 142.80
        console.log(`Seu desconto total é de ${desconto.toFixed(2)} e seu IR é de 7.5% e a receber é ${ir}`)
    }
    

}else if(salario >= 2494.93 && salario <= 5189.82){
    let aliquota = 11.0;
    let result = salario*(aliquota/100);
    let desconto = salario-(salario-result);
    if(salario <=3751.05){
        let ir = 354.80;
        console.log(`Seu desconto total é de ${desconto.toFixed(2)} e seu IR é de 15% e a deduzir é ${ir}`);
    }

}else if(salario >= 5189,82){
    let aliquota = 570.88;
    let desconto =   salario -(salario-result);
    if(salario <=4.664,68){
        let ir = 636.13;
        console.log(`Seu desconto total é de ${desconto.toFixed(2)} e seu IR é de 22% e a deduzir é ${ir}`)
    }else{
        let ir = 636.13;
        console.log(`Seu desconto total é de ${desconto.toFixed(2)} e seu IR é de 22% e a deduzir é ${ir}`)
    }
}