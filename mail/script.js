// scrivo elenco di mail e la mail dell'utente

// var elencoMail = ["index@gmail.com", "script@gmail.com" , "andrea@gmail.com" , "boolean@gmail.com" ];
// var mailUtenteCorretta = "andrea@gmail.com";
// var mailInput =prompt("Inserisci la tua mail e verifica se puoi accedere")

// if (mailInput===mailUtenteCorretta){
//     document.write("Mail corretta")
// }else {

//     alert("Mail errata, riprova")
// }

var elencoMail = ["index@gmail.com", "script@gmail.com" , "andrea@gmail.com" , "boolean@gmail.com" ];
var mailInput =prompt("Inserisci la tua mail e verifica se puoi accedere")
var haTrovato = false


for (var i=0; i<elencoMail.length; i++){
    
    if(mailInput===elencoMail[i]){
        haTrovato = true
    }  

} 
if(haTrovato){

    document.getElementById("email").innerHTML="Mail corretta"

}else {
    alert("Mail errata, riprova")
}

