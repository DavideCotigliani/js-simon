// definisco le variabili e recupero gli elementi per iniziare il countdown
const countdown = document.getElementById('countdown');
let seconds = 5;

countdown.innerText= seconds--

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