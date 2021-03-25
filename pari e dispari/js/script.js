// chiedo all'utente pari o dispari e un numero tra 1 e 5
var sceltaUtente = prompt('Scegli tra pari e dispari');
console.log(sceltaUtente);

var numeroUtente = parseInt(prompt('Scegli un numero tra 1 e 5'));
console.log(numeroUtente);

//numero random computer
var numeroPc = getNumeroRandom(1, 5);
console.log(numeroPc);

// somma e dice se pari o dispari
var sommaPcUtente = pariDispari(numeroUtente, numeroPc);
console.log(sommaPcUtente);

//assegna vincitore
var vincitoreFinale = vincitoreGioco(sceltaUtente, sommaPcUtente);
console.log(vincitoreFinale);
alert (vincitoreFinale);
//-------------------------------------------
//                  FUNZIONI

//Questa funzione JavaScript restituisce sempre un numero casuale 
//compreso tra min e max (entrambi inclusi):
function getNumeroRandom(min, max) {
    var numeroRandom = Math.floor(Math.random() * (max - min + 1) ) + min;
    return numeroRandom;
}

//questa funzione somma due valori e dice se la 
//loro somma è pari o dispari 
function pariDispari(nUno, nDue) {
    var risultato;
    var sommaUnoDue = nUno + nDue;
    console.log(sommaUnoDue);

    if( sommaUnoDue % 2 == 0 ) {
        risultato = ('pari');
    } else {
        risultato = ('dispari');
    }

    return risultato;
}

//questa funzione assegna chi dei due ha indovinato
//il giocatore uno deve essere la scelta della persona 
//il giocatore 2 il risultato della funzione pariDispari
function vincitoreGioco (giocatoreUno, giocatoreDue) {
    var vincitore;

    if( giocatoreUno == giocatoreDue ) {
        vincitore = ('Sei stato fortunatissimo hai vinto')
    } else {
        vincitore = ('Sei stato sfortunato, ritenta')
    }

    return vincitore;
}