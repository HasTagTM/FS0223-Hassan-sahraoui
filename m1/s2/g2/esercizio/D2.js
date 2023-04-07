/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* Number: indica un numero che può essere anche decimale
  String: una sezione di caratteri delimitata da doppi o singoli apici
  boolean: richiama 2 possibili valori che possono essere "true" o "false"
  null: è una keyword e indica l'intenzionale assenza di un oggetto. questo non significa che il valore 
  sia 0 in quanto e un valore
  undefinied: segnala che una variabile non ha valore asseganto di partenza definita

  particolarità:
  array:  caratteristiche degli oggetti particolare rappresentati da parentesi [] l'operatore di assegnazione del valore delle caratteristiche sonoo i ":" 
  object: oggetti rappresentati da parentesi graffe {} l'operatore di assegnazione e sempre il ":" 
*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

var name = 'hassan';

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
console.log(12 + 20);

function somma(p1, p2) {
  return p1 + p2;
}
document.getElementById("somma").innerHTML = somma(12, 20);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

var x = 12;



/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

var name = 'Sahraoui';

name = "Sahraoui"
console.log (name)

const NAME = 'Sahraoui'
console.log(NAME);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

var x = 12
console.log(4 - 12);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

var name1 = "john"
var name2 = "John"

console.log(name1 == name2);

let name2 = "John";
let result = name2.toLocaleLowerCase();

console.log(result);





