abstract class JobWorker{
    codredd:number
    redditoannualelordo:number
    constructor(codredd:number,redditoannualelordo:number){
        this.codredd = codredd
        this.redditoannualelordo = redditoannualelordo 
    }

    abstract getUtileTasse3(): number
    abstract getTasseInps3(): number
    abstract getTasseIrpef3(): number
    abstract getRedditoAnnualeNetto3(): number
}

class Tasse4 extends JobWorker{
        tasseInps: number 
        tasseirpef:number
        constructor(codredd:number, redditoannualelordo:number,tasseinps:number,tasseirpef:number){
            super(codredd,redditoannualelordo)
            this.tasseInps = tasseinps
            this.tasseirpef = tasseirpef
        }

        getTasseInps3(): number {
            return this.tasseInps
        }
        getTasseIrpef3(): number {
            return this.tasseirpef
        }
        getUtileTasse3(): number {
            return this.tasseInps + this.tasseirpef
        }
        getRedditoAnnualeNetto3(): number {
            return this.redditoannualelordo - this.getUtileTasse3()
        }
    }


    let newJobWorker = new Tasse4(12,50000,10000,15000)

    console.log(newJobWorker.getUtileTasse3());
    console.log(newJobWorker.getTasseInps3());
    console.log(newJobWorker.getTasseIrpef3());
    console.log(newJobWorker.getRedditoAnnualeNetto3());

    