// payment (senders card, receivers card, amount, currency, date)

class Payment{
    constructor(data){
        this.sendersCard = data.sendersCard;
        this.receiversCard = data.receiversCard;
        this.amount = data.amount;
        this.currency = data.currency;
        this.date = data.date;
    }

    send(){
        console.log(`from ${this.sendersCard.number} to ${this.receiversCard.number}`);
        console.log(`amount: ${this.amount} (${this.currency})`)
    }
}

module.exports = Payment;