// card (number, expiry date, CVV code, client)

class Card{
    constructor(data){
        this.number = data.number;
        this.expiryDate = data.expireDate;
        this.CVV = data.CVV;
        this.client = data.client;
    }

    showClientName(){
         console.log(this.client.getFullName());
    }

}

module.exports = Card;