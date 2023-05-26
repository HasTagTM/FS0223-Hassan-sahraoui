interface smartphone{
    carica: number 
    numeroChiamate: number 
    costoMinuto: number

    ricarica(euro:number):void
    numero404():string
    getNumeroChiamate(): number
    chiamata(min: number): void
    azzeraChiamate():void
    mostraRegistroChiamate():void
    filtraChiamataPerDataOra(dataOra : string):void
}

class Smartphone implements smartphone{
    carica: number;
    numeroChiamate: number;
    costoMinuto: number ;
    registroChiamate: {id:number; durata:number, dataOra: string}[]

    constructor(){
        this.carica = 0
        this.numeroChiamate = 0
        this.costoMinuto = 0.20
        this.registroChiamate = []
    }

    ricarica(euro:number): void{
        this.carica += euro;
         
    }
    numero404(): string {
        return 'credito residuo: ' + this.carica.toFixed(2) + '€'
    }

    getNumeroChiamate(): number {
        return this.numeroChiamate
    }

    chiamata(min: number): void {
        const CostoChiamata = min * this.costoMinuto
        if(CostoChiamata <= this.carica){
            this.carica -= CostoChiamata
            this.numeroChiamate++
            const dataOra = new Date().toLocaleString()
            const nuovaChiamata = {id: this.numeroChiamate, durata: min, dataOra}
            this.registroChiamate.push(nuovaChiamata)
            console.log(`chiamata effettuata (${min}) minuti`);
            
        }else{
            console.log('il tuo credito è insufficente per coprire la chiamata, le ricordiamo che il suo sldo disponibile è pari a '+ this.carica + '€'
            );
            
        }
    }
    azzeraChiamate(): void {
        this.numeroChiamate = 0
        this.registroChiamate = []
        console.log('registro chiamate azzerato');
        
    }
    mostraRegistroChiamate(): void {
        console.log('registro chiamate:');
        this.registroChiamate.forEach((chiamata)=>{
            console.log(
                `ID: ${chiamata.id}, durata: ${chiamata.durata} minuti, Data e Ora: ${chiamata.dataOra}`
            );
            
        })
        
    }

    filtraChiamataPerDataOra(dataOra: string): void {
        console.log(`Chiamata effettuata il ${dataOra}:`);
        const chiamateFiltrate = this.registroChiamate.filter((chiamata) =>{
            console.log(`ID: ${chiamata.id}, durata: ${chiamata.durata} minuti, Data e Ora: ${chiamata.dataOra}`);
            
        })
        
    }
}

const Smartphone1 = new Smartphone()
const Smartphone2 = new Smartphone()
const Smartphone3 = new Smartphone()


Smartphone1.ricarica(10)
Smartphone1.ricarica(15)
Smartphone1.chiamata(11)
Smartphone1.mostraRegistroChiamate()
Smartphone1.filtraChiamataPerDataOra('25/05/2023 , 15:30')

Smartphone2.ricarica(10)
Smartphone2.ricarica(3)
Smartphone2.chiamata(4)
Smartphone2.mostraRegistroChiamate()
Smartphone2.filtraChiamataPerDataOra('10/05/2023 , 15:00')

Smartphone3.ricarica(10)
Smartphone3.ricarica(20)
Smartphone3.chiamata(7)
Smartphone3.mostraRegistroChiamate()
Smartphone3.filtraChiamataPerDataOra('12/04/2021 , 13:00')

console.log(Smartphone1.numero404());
console.log("Numero di chiamate effettuate:", Smartphone1.getNumeroChiamate());


console.log(Smartphone2.numero404());
console.log("Numero di chiamate effettuate:", Smartphone1.getNumeroChiamate());


console.log(Smartphone3.numero404());
console.log("Numero di chiamate effettuate:", Smartphone1.getNumeroChiamate());

