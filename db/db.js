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
    //update ticket by id
    updateTicketById(ticketId,ticketBody){
        
    }
    // delete ticket by id;
    deleteTicketById(){
        
    }
    draw(){
        
    }
}

const myDB = new MyDB();

module.exports = myDB;