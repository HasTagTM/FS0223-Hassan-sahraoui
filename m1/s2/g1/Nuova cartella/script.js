
// document.getElementById("saluto").innerHTML = 'Hello Word';

// document.getElementById("saluto").innerHTML = 'mi chiamo hassan' + ' ' + 'hello word'

// document.getElementById("saluto").innerHTML = 'mi chiamo hassan' + ' ' + 'hello word' +  ' ' + 'ce la dobbiamo fare'

// document.getElementById("saluto").innerHTML = 'ciao'


// alert('attenzione non salvare')


// function salam(){
//     console.log('ciao');
//     console.log('ciao');
//     console.log('ciao');
//     console.log('ciao');
// }

// salam()
// salam()

// function fatima(){
//     console.log('la madre delle madri')
//     console.log('la madre delle madri')
// }

// fatima()
// fatima()
// fatima()


// document.write('io mi chiamo hassan' + ' ')
// document.write('vengo dal marocco')

// var hassan = 'sahraoui'
// var x = 15
// var y = true
// var j = [1, 2, 3, 4]
// var w = {}

// console.log(typeof hassan)
// console.log(typeof x)
// console.log(typeof y)
// console.log(typeof j)
// console.log(typeof w)

// console.log(x);


// var u = 856
// var z = 7896

// console.log(u + z);

// var risultato = u + z;
// console.log(risultato);  

// var nome = 'hassan'
// var cognome = 'sahraoui'
// console.log(nome + ' ' + cognome);

// var animale = 'gatta'
// var genere = 'europea'
// var nome = 'mimi'

// console.log(animale + ' ' + genere + ' ' + nome);

// var anni = 30
// console.log(u  +  z  + animale + nome + anni + ' ' + 'europea');

// console.log('4a' * 3);

// console.log('4' * '2');

// console.log('4' + 2);

// console.log('4' - '2');
// console.log('4' + 2);

// {
// var numeroPilastri = 5
// if (numeroPilastri > 5) {
//     console.log(false);
// }else if (numeroPilastri < 5){
//     console.log(false);
// }else(numeroPilastri == 5)
//     console.log('corretto');

// }

// var html = "<h1 class=\"prova\">Hello World</h1>";
// document.write(html);

// var q = 'hassan'
// var h = 'sahraoui'
// var età = 30

// document.write(`io mi chiamo ${q} ${h} e vengo dal mafocco e ho ${età} anni`);

// const OGGETTO = {
//     nome : ['Hassan', 'Monica', 'Maria'],
//     cognome : 'sahraoui',
//     età : 30,
//     professione : 'programmatore',
// }
// Object.freeze(OGGETTO.età);
// console.log(typeof OGGETTO);

// OGGETTO.cognome = 'Haffiane'
// console.log(OGGETTO);

// var io = 10
// function prova(io) {
//     io++;
// }

// prova()
// prova()
// prova()
// console.log(io);

// var anni = prompt('Inserisci il numero di anni');
// document.write(typeof anni);

// let div = document.getElementById('div1');
// console.log(div);

// let a = 1

// a += 1
// console.log(a);

// a += 10
// document.write(a)

// a -= 6
// console.log(a);

// a /= 2
// console.log(a);


// let apici = 'Fatima'
// apici += ' la migliore delle madri'
// document.write(apici);


// let b = 2;

// b = b + 2
// console.log(b)

// b++
// console.log(b)

// b += 5154
// console.log(b)

// b = b - 100
// console.log(b)

// b -= 59
// console.log(b)


// let sana = 35
// console.log(sana < 35);
// console.log(sana > 35);
// console.log(sana == 35);
// console.log(sana >= 35);
// console.log(sana <= 35);


// let age= 30

// console.log(age <= 120 && age >= 18);
// console.log(age == 31);
// console.log(age <= 120 || age <= 18);
// console.log( !(age === 30) );
// console.log(typeof age);

// let zoro = []
// console.log(Array.isArray(zoro));

// let anni = prompt('quanti anni hai')
// let accesso = anni >= 18 ? 'puoi entrare' : 'non puoi entrare';
// document.write(accesso)

// let cellulare = {
//     marca : 'samsung',
//     modello : 'm31',
//     anno : 2021,
//     prezzo : 450,
//     commenti : function() {
//         console.log(`il cellulare ${this.marca} ${this.modello} è il miglior telefono al prezzo di ${this.prezzo}`)
//     }
// }

// document.write(cellulare);

// cellulare.commenti();

// cellulare.prezzo = 400
// {
// let pizza = {
//     gusto : 'margherita',
//     prezzo : 5,
//     aggiunte : {
//         doppiaPasta: 0.50,
//         mozzarellaBufala : 1.00,
//         aggiunte : 1.00,
//     },
//     mostraPrezzo: function() {
//         console.log(`il prezzo della pizza ${this.gusto} e pari a ${this.prezzo} €`);
//     }    
// }
// pizza.gusto = 'tonno e cipolla'
// console.log(pizza.gusto);

// pizza.mostraPrezzo();

// }


// {

//     function Pizza(_gusto, _prezzo){
//         this.gusto = _gusto;
//         this.prezzo = _prezzo;
//         this.mostraPrezzo = function() {
//             console.log(`il prezzo della pizza ${this.gusto} e pari a ${this.prezzo} €`);
//     }
// }

// let margherita = new Pizza('margherita', 5);
// let fruttiDiMare = new Pizza('frutti di mare', 10);
// console.table('margherita' , 'fruttiDiMare');

// Pizza.prototype.aggiunte = {
//     doppiaMozzarella : 0.50,
//     basilico : 1.00,
// }

// console.log(Pizza)
// }

// let pizze = [
//     'tonnoCipolla',
//     'fruttiDiMare',
//     'margherita',
//     'diavola',
// ]

// console.log(pizze);

// pizze[1] = 'marinara';
// console.log(pizze)

// pizze[4] = 'cipolla';
// console.log(pizze);



// if (pizze[6]) {
//     pizze[6] = 'boscaiola';
    
// }
// console.log(pizze[6]);

// pizze.push('vegetale', 'napoli');

// console.log(pizze[pizze.length - 1]);


// let arr = [
//     1,
//     2,
//     3,
//     4,
//     5,
//     6,
//     ['a','b','c','d','e', [
//         {
//         p1 : 'fatima',
//     },
//     {
//         p2 : 'Hassan',
//     }
// ]]
// ]

// console.log(arr[6][4]);
// console.log(arr[6][5][1].p2);

// function mostraPrezzo(pippo){

// let frutto = pippo.value;

// switch (frutto) {
//     case 'Mela':
//         document.write('la Mela costa 1 euro al kilo');
//         break;
//     case 'kiwy' :
//         document.write('il kiwy costa 2 euro al kilo');
//         break;
//     case 'banana' : 
//         document.write('la banana costa 3 euro al kilo');
//         break;
//     case 'pere' :
//         document.write('le pere costa 4 euro al kilo');
//         break;
//     case 'arancie':
//     case 'fragole':
//         document.write('le arancie e le fragole costano 5 euro al kilo');
//     default:
//         document.write(`non abbiamo le ${frutto}`);
// }

// }

// let i = 0
// while (i < 10) {
//     document.write(i + '<br>');
//     i++;
// }

// for (let a=0 ; a < 10 ; a++){
//     document.write(a + '<br>');
// }


// let pizze = ['marinara' , 'margherita' , 'cipolla', 'fruttiDiMare', 'mimosa'];

// for(let a = 0 ; a < pizze.length ; a++){
//     document.write(pizze[a] + '<br>');
// }

// document.write('<hr>')

// pizze = ['marinara' , 'margherita' , 'cipolla', 'fruttiDiMare', 'mimosa'];

// for(let MelaGusto of pizze){
//     document.write(MelaGusto + '<br>');
// }

// let persona = {
//     nome : 'Mario',
//     cognome : 'Rossi',
//     anni : 30 ,
// }

// for(let id in persona){
//     document.write(persona[id])

// }


// terza settimana

//funzioni:

// function prova (){
//     console.log('invocata');
// }

// prova()

// function prova(){
//     return 'dato restituito'
// }

// console.log(prova())

// function somma1(){
//     return 2 + 3;
// }

// console.log(somma1);


// function somma(a,b){
//     return a + b;
// }

// console.log(somma(5,2));


// function somma3(a = 0 , b = 0 , c = 0){
// return a + b + c;
// }

// let risult4 = somma3(2 , 3)
// console.log('il risultato n 4 e pari a ' + risult4);

function scrivi(){
    let testo = document.getElementById('testo');
    testo.innerHTML = 'testo';
}

scrivi('hello world');
scrivi('<br>');
scrivi('ciao mondo');