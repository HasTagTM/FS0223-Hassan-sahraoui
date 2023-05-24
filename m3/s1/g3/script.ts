abstract class LavoratoreAutonomo{
    codredd:number
    redditoannualelordo:number
    constructor(codredd:number, redditoannualelordo:number){
        this.codredd = codredd
        this.redditoannualelordo = redditoannualelordo
    };
    abstract getUtileTasse(): number;
    abstract getTasseInps():number
    abstract getTasseIrpef():number
    abstract getRedditoAnnuoNetto():number
}
class Tasse extends LavoratoreAutonomo{
    tasseinps: number
    tasseirpef: number
    constructor(codredd:number , redditoannualelordo:number , tasseinps: number , tasseirpef: number){
        super(codredd , redditoannualelordo)
        this.tasseinps = tasseinps
        this.tasseirpef = tasseirpef
    }
    getUtileTasse(): number {
        return this.tasseinps + this.tasseirpef
    }
    getTasseInps(): number {
        return this.tasseinps
    }
    getTasseIrpef(): number {
        return this.tasseirpef
    }

    getRedditoAnnuoNetto(): number {
        return this.redditoannualelordo - this.getUtileTasse()
    }
}
let lavoratore = new Tasse(3,45000,7000,10000)
console.log(lavoratore.getRedditoAnnuoNetto());
console.log(lavoratore.getTasseInps());
console.log(lavoratore.getTasseIrpef());
console.log(lavoratore.getUtileTasse());

let lavoratore2 = new Tasse(121,50000,10000,1500)
console.log(lavoratore2.getRedditoAnnuoNetto());
console.log(lavoratore2.getTasseInps());
console.log(lavoratore2.getTasseIrpef());
console.log(lavoratore2.getUtileTasse());


let lavoratore3 = new Tasse(314,25000,3000,7000)
console.log(lavoratore3.getRedditoAnnuoNetto());
console.log(lavoratore3.getTasseInps());
console.log(lavoratore3.getTasseIrpef());
console.log(lavoratore3.getUtileTasse());

