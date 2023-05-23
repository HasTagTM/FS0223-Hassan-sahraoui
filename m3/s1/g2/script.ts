class SonAccount{
    balanceInit: number = 0

    oneDeposit(ammontare:number):void{
        this.balanceInit += ammontare
    }

    oneWithDraw(ammontare:number):void{
        this.balanceInit -= ammontare
    }
}

class MotherAccount{
    balanceInit: number = 0

    twoDeposit(ammontare:number):void{
        this.balanceInit += ammontare
    }

    twoWithDraw(ammontare:number):void{
        this.balanceInit -= ammontare
    }

    addInterest():void{
        this.balanceInit += this.balanceInit * 0.1
    }
}


const motherAccount = new MotherAccount(),
sonAccount = new SonAccount()

sonAccount.oneDeposit(100)
console.log('il saldo del figlio è pari a :' ,sonAccount.balanceInit);

motherAccount.twoDeposit(500)
motherAccount.addInterest()
console.log('il saldo della madre più gli interessi è pari a :' ,motherAccount.balanceInit);


  