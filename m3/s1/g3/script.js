"use strict";
class LavoratoreAutonomo {
    constructor(codredd, redditoannualelordo) {
        this.codredd = codredd;
        this.redditoannualelordo = redditoannualelordo;
    }
    ;
}
class Tasse extends LavoratoreAutonomo {
    constructor(codredd, redditoannualelordo, tasseinps, tasseirpef) {
        super(codredd, redditoannualelordo);
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef;
    }
    getUtileTasse() {
        return this.tasseinps + this.tasseirpef;
    }
    getTasseInps() {
        return this.tasseinps;
    }
    getTasseIrpef() {
        return this.tasseirpef;
    }
    getRedditoAnnuoNetto() {
        return this.redditoannualelordo - this.getUtileTasse();
    }
}
let lavoratore = new Tasse(3, 45000, 7000, 10000);
console.log(lavoratore.getRedditoAnnuoNetto());
console.log(lavoratore.getTasseInps());
console.log(lavoratore.getTasseIrpef());
console.log(lavoratore.getUtileTasse());
let lavoratore2 = new Tasse(121, 50000, 10000, 1500);
console.log(lavoratore2.getRedditoAnnuoNetto());
console.log(lavoratore2.getTasseInps());
console.log(lavoratore2.getTasseIrpef());
console.log(lavoratore2.getUtileTasse());
let lavoratore3 = new Tasse(314, 25000, 3000, 7000);
console.log(lavoratore3.getRedditoAnnuoNetto());
console.log(lavoratore3.getTasseInps());
console.log(lavoratore3.getTasseIrpef());
console.log(lavoratore3.getUtileTasse());
