// l'utente inserisce una parola 
var parolaUtente = prompt('Dimmi una parola');
console.log(parolaUtente);

//funzione che controlla se la parola inserita dall'utente
//è palindroma o no
function confrontoPalindroma (parolaUno, parolaDue) {
//creare due for uno da sinistra e uno da destra
//
//legge da sinistra a destra
for( var i = 0; i < parolaUtente.length; i++ )
var parolaUno = parolaUtente[i];
console.log(parolaUno);

//legge da destra a sinistra
for( var j = parolaUtente.length - 1; j >= 0; j-- )
var parolaDue = parolaUtente[j];
console.log(parolaDue);
var conclusione;

//confrontare i due for
if( parolaUno == parolaDue ){
    conclusione = ('la parola è palindroma')
} else {
    conclusione = ('la parola non è polindroma')
}

// stampa il risultato del confronto tra le due parole
alert(conclusione);
}

var messaggioFinale = confrontoPalindroma(parolaUtente, parolaUtente)

//stampare il messaggio