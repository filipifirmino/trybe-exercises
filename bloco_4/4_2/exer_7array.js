let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numberSet = numbers[0];//Sempre definir como primeiro valor do array



for (let i = 0; i<numbers.length;i+=1){
        if(numbers[i] < numberSet){
            numberSet = numbers[i]
        }
    
}

console.log(`O menor numero do array é ${numberSet}`)