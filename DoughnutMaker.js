class dohnut{
    constructor(numberOf) {
        this._numberOf = numberOf;
        this._autoCost = 100;
        this._multiCost = 10;
        this._clickValue = 1;
        this._numOfAuto = 0;
        this._numOfMulti = 0;
    }

    get numberOf() {
        return this._numberOf
    }

    getStatus(){
        return "You have made "+ Math.round(this._numberOf) + " Rad-Tastic DohNuts!"  + "\n" + "\n" +
         "Your current cost of laziness/auto clickah is "+ Math.round(this._autoCost) +" DohNutzizzles" + "\n"+ "\n" +
         " and Multipli-ahs cost due to rising inflation is "+Math.round(this._multiCost) + " Dohnutz" + "\n" + "\n" +
         " you have made it rain on " + this._numOfMulti + " Multipli-ahs and "+ this._numOfAuto + " AutoClickahs" +"\n" +"\n" +
         " Each Click is worth a Whopping value of  "+ this._clickValue +" We exact out herrrr" ;
         
    }

    getStatusDisplay(){()=>
        setInterval(this.getStatus,200)      
    }

    make() {
       this._numberOf += this._clickValue;
    }


   
}

export default dohnut


