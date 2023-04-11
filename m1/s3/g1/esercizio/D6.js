/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

function area(l1 , l2) {
    return l1 * l2
}

console.log(area(5, 6)); 


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function craziSum(num1 , num2){
    return (num1 === num2) ? (num1 + num2) * 3 : (num1 + num2) //se num1 e num2 sono uguali fai la loro somma altrimenti fai la loro somma e moltiplica *3
}

craziSum()
console.log(craziSum(3 , 3)); //in questo caso il risultato sarà 18 perchè num1 e num2 sono uguali quindi moltiplicherà per 3 alla fine.
console.log(craziSum(3, 4)); //in questo caso il risultato sarà 7 dato che num1 e num2 non si equivalgono.

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(num) {
    let diff = Math.abs(num - 19)
    return (num > 19) ? diff * 3 : diff
}

console.log(crazyDiff(20)); //il num e maggiore di 19 quindi fara la differenza assoluta( quindi eliminerà eventuali segni)
console.log(craziSum(4)); NaN

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n){
    return (n >= 20 && n <= 100) || (n === 400)
}

console.log(boundary(25)); //true
console.log(boundary(150)); //false
console.log(boundary(400)); //true

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(str){
    return str.startsWith("EPICODE") ? str : "EPICODE" + str;
}

console.log(epify(" THE BEST SCHOOL")); 
console.log(epify("EPICODE SCHOOL"));


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(numeroP){
    return (numeroP % 3 === 0) || (numeroP % 7 === 0)
}

console.log(check3and7(11));
console.log(check3and7(49));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(str2){
    return str2.split("").reverse().join("");  //trasformo la stringa in un Array con 'split' e poi inverto il loro ordine con 'reverse' in fine 'join' per unire gli elementi dell'Array
}

console.log(reverseString('EPICODE'));



/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

// function upperFirst(str3){
//     return str3.split("").uppercaseFirst(1).join("");
// }

// console.log(upperFirst("io mi chiamo hassan"));



/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
function cutString(str4){
    return str4.length <= 2 ? "" : str4.substring(1, str4.length - 1);
}

console.log(cutString("EPICODE"));
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n1){
    
}
