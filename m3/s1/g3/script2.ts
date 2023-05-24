abstract class lavoratori{
    codredd:number
    redditoannualelordo:number

    constructor(codredd:number , redditoannualelordo:number){
        this.codredd= codredd
        this.redditoannualelordo = redditoannualelordo
    }

    abstract getUtileTasse2():number
    abstract getTasseInps():number
    abstract getTasseIrpef():number
    abstract getRedditoAnnualeNetto():number
}

class Tasse2 extends lavoratori{
  
    tasseinps:number
    tasseirpef:number
    constructor(codredd:number,redditoannualelordo:number,tasseinps:number,tasseirpef:number){
        super(codredd,redditoannualelordo)
        this.tasseinps = tasseinps
        this.tasseirpef = tasseirpef
    }

    getUtileTasse2(): number {
        return this.tasseinps + this.tasseirpef
    }

    getTasseInps(): number {
        return this.tasseinps
    }

    getTasseIrpef(): number {
        return this.tasseirpef
    }

    getRedditoAnnualeNetto(): number {
        return this.redditoannualelordo - this.getUtileTasse2()
    }
}

let worker1 = new Tasse2(15,100000,20000,35000,)

console.log(worker1.getRedditoAnnualeNetto());
console.log(worker1.getTasseInps());
console.log(worker1.getTasseIrpef());
console.log(worker1.getUtileTasse2());

