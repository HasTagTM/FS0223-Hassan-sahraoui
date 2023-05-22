"use strict";
let vincitore = document.querySelector('#vincitore');
const VICTORY = function (num1, num2) {
    let numeroCasuale = Math.floor(Math.random() * 99 + 1);
    let diff1 = Math.abs(numeroCasuale - num1);
    let diff2 = Math.abs(numeroCasuale - num2);
    if (diff1 === diff2) {
        return `il giocatore 1 ha scelto il numero ${diff1} come il giocatore 2`;
    }
    else if (diff1 < diff2) {
        return `il giocatore 1 ha scelto il numero ${num1} mentre il giocatore 2 ha scelto il numero ${num2}. 
        dato che il numero casuale generato è il ${numeroCasuale} assegnamo la vittoria al giocatore 1 che si è avvicinato di più`;
    }
    else {
        return `il giocatore 1 ha scelto il numero ${num1} mentre il giocatore 2 ha scelto il numero ${num2}. 
        dato che il numero casuale generato è il ${numeroCasuale} assegnamo la vittoria al giocatore 2 che si è avvicinato di più`;
    }
};
console.log(VICTORY(26, 19));
