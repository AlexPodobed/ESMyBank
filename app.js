// import {Client} from "./classes/client";

const Client = require('./classes/client');
const Card = require('./classes/card');
const Payment = require('./classes/payment');
const Utils = require('./utils');

const ESMyBank  = (function () {
    let users = new Map();

    let createNewClient = function (data) {
        let user = new Client(data.name, data.adresses, data.phone_numbers);
        users.set(user._id, user);

        return user;
    };

    let updateClientInfo = function () {
        console.log('should be soon')
    };

    let removeClient = function (id) {
        users.delete(id);
    };

    let getClient = function (id) {
        return users.get(id);
    };


    return {
        client: {
            get: getClient,
            create: createNewClient,
            update: updateClientInfo,
            remove: removeClient
        }
    }

})();


let alexUser = ESMyBank.client.create({
    name: "Alex",
    adresses: ['adress1'],
    phone_numbers: ["+487777"]
});

ESMyBank.client.remove(alexUser._id);

console.log(ESMyBank.client.get(alexUser._id))


//
// // CLIENT 1
// let client1 = new Client("client one", ["address1"], ["+3811111111111"]);
// let cardForClient1 = new Card({
//     number: 1111111111111111111,
//     expireDate: 1480841417245,
//     CVV: 777,
//     client: client1
// });
//
//
// // CLIENT 2
// let client2 = new Client("client two", ["address2"], ["+3822222222222"]);
// let cardForClient2 = new Card({
//     number: 22222222222222222,
//     expireDate: 1480841417245,
//     CVV: 999,
//     client: client2
// });
//
// let payment = new Payment({
//     sendersCard: cardForClient1,
//     receiversCard: cardForClient2,
//     amount: 150,
//     currency: "USD",
//     date: new Date().getTime()
// });
//
// cardForClient1.showClientName();
// cardForClient2.showClientName();
//
//
// payment.send();