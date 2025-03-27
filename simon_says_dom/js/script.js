// definisco le variabili e recupero gli elementi per iniziare il countdown
const countdown = document.getElementById('countdown');
let seconds = 30;
countdown.innerText= seconds--

// variabili per i numeri casuali e recupero degli elementi
const numberslist = document.getElementById('numbers-list')

function randomNumbers (){
    numberslist.innerText= Math.floor(Math.random() * 5) +1 ;
}
randomNumbers()


//strutturo il corpo del programma del countdown
const interval = setInterval(function(){
if(seconds != -1){
countdown.innerText= seconds
}
else{
    clearInterval(interval)
}
//per decrementare i secondi
seconds--
},1000)