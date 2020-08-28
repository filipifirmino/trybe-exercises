let peca = "dama";
let set = peca.toLowerCase();

switch (set){
    case "rainha":
        console.log('Move-se em todas as direções');
        break;
    case "bispo":
        console.log('Move-se em diagonais')
        break;
    case "cavalo":
        console.log('Move-se em L')
        break;
    case "torre":
        console.log('Move-se em linha')
        break;
    case "peao":
        console.log('Move-se para frente e para o lado 1 ou 2 casas')
        break;
    case "rei":
        console.log('Move-se em todas direções apenas 1 casa ')
        break;
    default:
        console.log('Peça Invalida');
}   