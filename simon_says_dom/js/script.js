// definisco le variabili e recupero gli elementi per iniziare il countdown
const countdown = document.getElementById('countdown');
const instructions = document.getElementById ('instructions')
const form = document.getElementById('answers-form')
const button = document.querySelector('button');
const inputFields = document.querySelectorAll('input')
const message = document.getElementById ('message')
const numberslist = document.getElementById('numbers-list')
//

// variabili
let seconds = 30;
const min= 1;
const max = 50;
const totalNumbers=5;
let li = '';

// funzione per numeri random
function randomNumbers (min,max,tot){
    // definisco l'array vuoto che contiene i numeri casuali
    let numbers = [];
    // genero i 5 numeri casuali
    for (i = 0; i<tot; i++){
        const randoNum = Math.floor(Math.random() * (max - min + 1) ) + min;
        // inserisco il numero generato nell'array
        numbers.push(randoNum) // vado a mettere DENTRO numbers, un randoNum
    }
    // restituisco l'array
    return numbers;
}
// invoco la funzione e genero i numeri casuali
const numbers = randomNumbers(min,max,totalNumbers);

// genero i list item da appendere all'elemento del dom
for (let i = 0; i<numbers.length; i++){
    li+= `<li>${numbers[i]}</li>`
}

//vado a inserire i list item generati nel dom
numbersList.innerHTML= li;

//strutturo il corpo del programma del countdown

//mostro nel dom il timer
countdown.innerText= seconds

const interval = setInterval(function(){
    countdown.innerText= --seconds
    if(seconds === 0){
clearInterval(interval)
countdown.innerText= 'Inserisci i numeri che hai visto precedentemente'
    instructions.remove()
    numberslist.remove()
}
},1000)

// far apparire dopo 30 secondi i campi
const appear = setTimeout(function(){
form.classList.remove("d-none")

},30000)

// Evento click sul bottone
button.addEventListener('click', function(event) {
    event.preventDefault();  

    //definisco l'array vuoto dei numeri inseriti dall'utente
    const userNumbers = [];

    //ciclo i campi imput
    for (let i=0; i<inputFields.length; i++){
        const input = inputFields[i];
        
        const value = parseInt(input.value);
        
        //vado ad inserire il numero nell'array
        userNumbers.push(value);
    }
    // definisco un array che contiene i numeri indovinati
    const guessed = [];

    //ciclo l'array dei numeri casuali
    for(let i= 0; i<userNumbers.length; i++){
        const num = userNumbers[i];

        // verifico che il numer dell'utente che sto ciclando, sia presente nell'array dei numeri generati casualmente
        if(numbers.includes(num)){
            guessed.push(num);
        }
    }
    

// visualizza risultato
message.classList.remove('text-danger')

// se lunghezza di array è uguale al numero totali di elementi allora ho vinto
if(guessed.length === totalNumbers){
    message.classList.add('text-success');
}
message.innerText = `Hai indovinato ${guessed.lenght} elementi (${guessed})`; 
});
