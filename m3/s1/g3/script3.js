"use strict";
class JobWorker {
    constructor(codredd, redditoannualelordo) {
        this.codredd = codredd;
        this.redditoannualelordo = redditoannualelordo;
    }
}
class Tasse4 extends JobWorker {
    constructor(codredd, redditoannualelordo, tasseinps, tasseirpef) {
        super(codredd, redditoannualelordo);
        this.tasseInps = tasseinps;
        this.tasseirpef = tasseirpef;
    }
    getTasseInps3() {
        return this.tasseInps;
    }
    getTasseIrpef3() {
        return this.tasseirpef;
    }
    getUtileTasse3() {
        return this.tasseInps + this.tasseirpef;
    }
    getRedditoAnnualeNetto3() {
        return this.redditoannualelordo - this.getUtileTasse3();
    }
}
let newJobWorker = new Tasse4(12, 50000, 10000, 15000);
console.log(newJobWorker.getUtileTasse3());
console.log(newJobWorker.getTasseInps3());
console.log(newJobWorker.getTasseIrpef3());
console.log(newJobWorker.getRedditoAnnualeNetto3());
