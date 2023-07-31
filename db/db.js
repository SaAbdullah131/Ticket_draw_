const Ticket = require('../models/Ticket');

class MyDB {
    constructor(){
        this.tickets = [];
    }
/**
 * create and save a new ticket
 * @param {string} username 
 * @param {number} price 
 * @return {ticket} return a ticket object
 */
    create(username,price){
        const ticket = new Ticket(username,price);
        this.tickets.push(ticket);
        return ticket;
    }
/**
 * Create multiple ticket for a single user
 * @param {string} username
 * @param {number} price
 * @param {number} quantity
 * @return {Array<Ticket>}
 */
    // sell multiple ticket 
    bulkCreate(username,price,quantity){
        const result =[];
        for(let i =0;i<quantity;i++){
            const ticket = this.create(username,price)
            result.push(ticket); 
        }
    }
/**
 * Return all available tickets
 */

    findTicket(){
        return this.tickets;
    }
// single ticket by id
/**
 * Find Ticket By Ticket id
 * @param {string} ticketId 
 * @return {Ticket} ticket
 */
    findTicketById(ticketId){
        const ticket = this.tickets.find(
            /**
             * 
             * @param {Ticket} ticket 
             */
            (ticket)=>{
            ticket.id === ticketId;
        });
       return ticket;
    }
/**
 * find all tickets for a given user
 * @param {string} username 
 * @returns {Array<Ticket>}
 */
    findByUsername(username){
        const tickets = this.tickets.filter(
                /**
                 * @param {Ticket} ticket
                 * 
                 */
                (ticket) =>ticket.username === username
            );
            return tickets;
    }
    /**
     * @param {string} ticketId
     * @param {{username:string,price:number}} ticketBody
     * @returns {Ticket}
     */
    //update ticket by id
    updateTicketById(ticketId,ticketBody){
        const ticket = this.findTicketById(ticketId);
        ticket.username = ticketBody.username ?? ticket.username;
        ticket.price = ticketBody.price ?? ticket.price;
        ticket.updatedAt = new Date();

        return ticket;
    }
    /**
     * @param {string} ticketId;
     */
    // delete ticket by id;
    deleteTicketById(ticketId){
            const index = this.tickets.findIndex((ticket)=>{
                ticket.id === ticketId;
            });
            if(index != -1){
                this.tickets.splice(index,1);
                return true;
            }
            else {
                return false;
            }
    }
    /**
     * find winners
     * @param {number} winnerCount 
     * @returns {Array<Ticket>}
     */
    draw(winnerCount){
        let indexes = new Array(winnerCount);
        for(let i = 0;i<indexes.length;i++){
            let index = Math.floor(Math.random()*this.tickets.length);
            while(indexes.includes(index)){
                index = Math.floor(Math.random()*this.tickets.length);
            }
            indexes.push(index);
        };
        const winners = indexes.map(index=>this.tickets[index]);
        return winners;
    }
}

const myDB = new MyDB();

module.exports = myDB;