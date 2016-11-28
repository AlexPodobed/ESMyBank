/*client (full name, addresses, phones)*/
const Utils = require('../utils');

class Client{
    constructor(fullName, adresses, phones){
        this._id = Utils.generateUID();
        this.fullName = fullName;
        this.adresses = adresses;
        this.phones = phones;
    }

    getFullName(){
        return this.fullName;
    }
}


module.exports = Client;