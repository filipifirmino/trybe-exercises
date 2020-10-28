const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  
  fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => insertJocker(data))
};
const insertJocker = (response) => {
  const root = document.querySelector('#jokeContainer');
  root.innerHTML = response.joke;
}
window.onload = () => fetchJoke();

const joker = new Promise((resolve, reject) => {
    let numbers = [];
    for (let index = 0; index < 10; index += 1) {
       numbers.push(Math.pow(Math.floor(Math.random() * 50),2))
    }
    const total = numbers.reduce((acc, current) => acc + current);

    total > 8000 ? resolve(total) : reject(total);
});

joker
.then(() => console.log())
.catch(() => console.log())

