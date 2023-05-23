var SonAccount = /** @class */ (function () {
    function SonAccount() {
        this.balanceInit = 0;
    }
    SonAccount.prototype.oneDeposit = function (ammontare) {
        this.balanceInit += ammontare;
    };
    SonAccount.prototype.oneWithDraw = function (ammontare) {
        this.balanceInit -= ammontare;
    };
    return SonAccount;
}());
var MotherAccount = /** @class */ (function () {
    function MotherAccount() {
        this.balanceInit = 0;
    }
    MotherAccount.prototype.twoDeposit = function (ammontare) {
        this.balanceInit += ammontare;
    };
    MotherAccount.prototype.twoWithDraw = function (ammontare) {
        this.balanceInit -= ammontare;
    };
    MotherAccount.prototype.addInterest = function () {
        this.balanceInit += this.balanceInit * 0.1;
    };
    return MotherAccount;
}());
var motherAccount = new MotherAccount(), sonAccount = new SonAccount();
sonAccount.oneDeposit(100);
console.log('il saldo del figlio è pari a :', sonAccount.balanceInit);
motherAccount.twoDeposit(500);
motherAccount.addInterest();
console.log('il saldo della madre più gli interessi è pari a :', motherAccount.balanceInit);
