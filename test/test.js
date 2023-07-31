const myDB = require('../db/db');
myDB.create('user 1',10);
myDB.create('user 2',10);
myDB.create('user 3',10);
myDB.create('user 4',10);
myDB.create('user 5',10);

const bulkTicket = myDB.bulkCreate('user 6',10,5);

console.log(bulkTicket);
const tickets = myDB.findTicket();
console.log("All Ticekts",tickets);
const winners = myDB.draw(2);
console.log("winners",winners);