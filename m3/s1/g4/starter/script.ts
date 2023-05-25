class CapoAbbigliamento{
    id?: number
    codprod?: number
    collezione?: string
    capo?: string
    modello?: number
    quantita?: number
    colore?: string
    prezzoivaesclusa?: number
    prezzoivainclusa?: number
    disponibile?: string
    saldo?: number

    constructor(obj:any){
            this.id = obj.id
            this.codprod = obj.codprod
            this.collezione = obj.collezione
            this.capo = obj.capo
            this.modello = obj.modello
            this.quantita = obj.quantita
            this.colore = obj.colore
            this.prezzoivaesclusa = obj.prezzoivaesclusa
            this.prezzoivainclusa = obj.prezzoivainclusa
            this.disponibile = obj.disponibile
            this.saldo = obj.saldo
        }

        mostraPrezzo(): string {
            return this.saldo + '€'
        }
        
  
}



async function call() {

    let chiamata = await fetch('Abbigliamento.json');

    let dati:CapoAbbigliamento[] = await chiamata.json();
    let arr: CapoAbbigliamento[] = [];

    dati.forEach((c: CapoAbbigliamento) => {
        arr.push(new CapoAbbigliamento(c));
    });


    console.log(arr, arr[0].mostraPrezzo());
}

call()