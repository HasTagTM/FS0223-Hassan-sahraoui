/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let n = 10
let m = 13
if(n < m){
  console.log(true)
  }else{}

  let x = 4;
  let y = 20;
  let max;
  if (x > y){
    max = x;
  }else{
    max = y;
  }
console.log(max)


 
   


 

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

{
  let numero = prompt('inserisci il numero da 1 a 20');
  if(numero == 5){
    document.write('è uguale')
  }else{
    document.write('è diverso')
  }
  console.log(numero)
  }

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let numb = prompt('Inserisci un numero')
  if (numb % 5 == 0){
    document.write("è divisibile per 5");
  } else {
    document.write("non è divisibile per 5")
  }


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
let a = prompt('inserisci il numero da 1 a 20')
let b = prompt('inserisci il numero da 1 a 20')

if(x + y == 8){
  console.log(18)
}else if(x - y == 8){
  console.log(8)}
  else{
    console.log('non è uguale a 8')
  }


int1 = 4;
int2 = 4;
let result = int1 + int2;
  function somma(){
    let result = int1 + int2;
    }
    console.log(result)


    


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let spedizione = 10
let carrello = prompt()
let totale = spedizione + carrello
if(carrello > totale){
  document.write('spedizione gratuita')
}if(carrello < totale ){
  document.write('costo spedizione 10 €')
}

let totalShoppingCart= prompt('Quanto è il totale in euro del tuo carrello?');
let spedizioneGratuita = 50;

function carrello(){
    if (totalShoppingCart >= 50){
    document.write('La tua spedizione è gratuita')
    }else{

      document.write(Aggiungi ${spedizioneGratuita - totalShoppingCart} {per ottenere la spedizione gratuita})
    }
  
  carrello();


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/



/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let numeri = [1, 4, 1, 2, 7, 5, 2];
let conteggio = [];
let output = [];
let i = 0;
let vax = Math.max(...numeri);

// inizializza counter
for (i = 0; i <= max; i++) {
  conteggio[i] = 0;
}

// inizializza l'array output
for (i = 0; i < numeri.length; i++) {
  output[i] = 0;
}

for (i = 0; i < numeri.length; i++) {
  conteggio[numeri[i]]++;
}

for (i = 1; i < conteggio.length; i++) {
  conteggio[i] += conteggio[i - 1];
}

for (i = numeri.length - 1; i >= 0; i--) {
  output[--conteggio[numeri[i]]] = numeri[i];
}

// array output ordinato
for (i = 0; i < output.length; i++) {
  console.log(output[i]);
}

/* ho semplicemente copiato da google e cercato di capirtne la logica ma ho riscontrato molte difficoltà */


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

var numero = prompt('scrivi un numero!');
  var risultato = (numero%2);

  if(result = 0){
    console.log('il numero è pari')
  }else{
    console.log('il numero è dispari')
  }

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
