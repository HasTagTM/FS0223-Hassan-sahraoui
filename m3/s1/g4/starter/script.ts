class CapoAbbigliamento{
    id: number
    codprod: number
    collezione: string
    capo: string
    modello: number
    quantita: number
    colore: string
    prezzoivaesclusa: number
    prezzoivainclusa: number
    disponibile: string
    saldo: number

    constructor(id: number,
        codprod: number,
        collezione: string,
        capo: string,
        modello: number,
        quantita: number,
        colore: string,
        prezzoivaesclusa: number,
        prezzoivainclusa: number,
        disponibile: string,
        saldo: number){
            this.id = id
            this.codprod = codprod
            this.collezione = collezione
            this.capo = capo
            this.modello = modello
            this.quantita = quantita
            this.colore = colore
            this.prezzoivaesclusa = prezzoivaesclusa
            this.prezzoivainclusa = prezzoivainclusa
            this.disponibile = disponibile
            this.saldo = saldo
        }

        getSaldoCapo(saldoSottrattore:number){
            return this.saldo - saldoSottrattore
        }

        getAcquistoCapo(){
            return this.prezzoivainclusa
        }
        
  
}



function fetchAbbigliamento(): Promise<void> {
    return fetch('Abbigliamento.json')
    .then((res)=>{
        if(res.ok){
            console.log(res);
            return res.json() as Promise<CapoAbbigliamento[]>;
            
        }else{
            throw new Error('errore nella richiesta della fetch')
        }
    })
    .then(data=>{
        data.forEach(capo=>{
            
            capo.getSaldoCapo(10)
            console.log(capo.getSaldoCapo);
            
        })
    })
    .catch(error =>{
        console.log(error, 'errore nella richiesta');
        
    })
    
}

fetchAbbigliamento()

// NON FUNZIONA!!! E NON SO COME FARLO FUNZIONARE! :(