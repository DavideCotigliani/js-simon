// definisco le variabili e recupero gli elementi per iniziare il countdown
const countdown = document.getElementById('countdown');
let seconds = 5;
countdown.innerText= seconds--
const instructions = document.getElementById ('instructions')
const form = document.getElementById('answers-form')
const button = document.querySelector('button');
const numberInputs = document.querySelector('.form-control')
const message = document.getElementById ('message')

// variabili per i numeri casuali e recupero degli elementi
const numberslist = document.getElementById('numbers-list')

let randomNumbersList =[];

function randomNumbers (){
    let numbers = [];
    for (i = 0; i<5; i++){
        const randoNum = Math.floor(Math.random() * 49) + 1;
        numbers.push(randoNum)
    }
    randomNumbersList = numbers;
    numberslist.innerHTML=numbers.join(' ')
}
randomNumbers();

//strutturo il corpo del programma del countdown
const interval = setInterval(function(){
if(seconds != 0){
countdown.innerText= seconds
}
else{
    clearInterval(interval)
    countdown.innerText= 'Inserisci i numeri che hai visto precedentemente'
    instructions.remove()
    numberslist.remove()
}
//per decrementare i secondi
seconds--
},1000)

// far apparire dopo 30 secondi i campi
const appear = setTimeout(function(){
form.classList.remove("d-none")

},5000)

// Evento click sul bottone
button.addEventListener('click', function(event) {
    event.preventDefault();  // Evita il comportamento predefinito del form

    let correctNumbers = [];
    let incorrectNumbers = [];
    let correctCount = 0;

    for (let i = 0; i < numberInputs.length; i++) {
    const userInput = parseInt(numberInputs[i].value, 10);
    if (randomNumbersList.includes(userInput)) {
        correctNumbers.push(userInput);
        correctCount++;
    }
    
}

if (correctCount > 0) {
    message.innerHTML = `Hai indovinato ${correctCount} numeri: ${correctNumbers.join(', ')}`;
    message.style.color = 'green'; 
} 
else {
    message.innerHTML = 'Non hai indovinato nessun numero.';
    message.style.color = 'red'; 
}
});
