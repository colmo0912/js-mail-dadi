var randomUtente = Math.floor(Math.random()*7);
console.log(randomUtente);

var randomPC = Math.floor(Math.random()*7);
console.log(randomPC);

if (randomUtente>randomPC){

document.getElementById("punteggio").innerHTML="Vince Utente"
}else if(randomUtente===randomPC){

    document.getElementById("punteggio").innerHTML="Pareggio"
}
else {
    document.getElementById("punteggio").innerHTML="Vince PC"
}




