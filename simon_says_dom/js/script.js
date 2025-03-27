// definisco le variabili e recupero gli elementi per iniziare il countdown
const countdown = document.getElementById('countdown');
let seconds = 5;
countdown.innerText= seconds--
const instructions = document.getElementById ('instructions')
const form = document.getElementById('answers-form')
const button = document.querySelector('.btn btn-primary mt-2 d-block mx-auto')
const number = document.querySelector('.form-control')

// variabili per i numeri casuali e recupero degli elementi
const numberslist = document.getElementById('numbers-list')

function randomNumbers (){
    let numbers = [];
    for (i = 0; i<5; i++){
        const randoNum = Math.floor(Math.random() * 49) + 1;
        numbers.push(randoNum)
    }
    numberslist.innerHTML=numbers.join(' ')
}
randomNumbers()

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

button.addEventListener ('click',function(){
let correctNumbers = [];
let correctCount = 0;

})