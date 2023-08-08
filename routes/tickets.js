

const router = require('express').Router();
const db = require('../db/db');

// For ticketId
router
.route('/t/:ticketId')
.get((req,res)=>{
    const ticketId = req.params.ticketId;
    const ticket = db.findTicketById(ticketId);
    res.status(200).json(ticket);
})
.patch((req,res)=>{
    const ticketId = req.params.ticketId;
    const updatedTicket = db.updateTicketById(ticketId,req.body);
    res.status(200).json({message:'updated Successfully',updatedTicket});
})
.delete((req,res)=>{
    const ticketId = req.params.ticketId;
    db.deleteTicketById(ticketId);
    res.status(203).send();
})

router.get('/u/:username',(req,res)=>{
    const username = req.params.username;
    const tickets = db.findByUsername(username);
    res.status(200).json(tickets);
    
});
router.patch('/u/:username',(req,res)=>{});
router.delete('/u/:username',()=>{});

// single ticket create
router.post('/sell',(req,res)=>{
   const {username,price} = req.body;
   const ticket = db.create(username,price);
   res.status(201).json({
    message:"Ticket Created Successfully",
    ticket
})
});

// bulk tickets create
router.post('/bulk',(req,res)=>{
    const{username,price,quantity} = req.body;
    const tickets = db.bulkCreate(username,price,quantity);
    res.status(201).json({
        message:"Bulk Tickets Created Successfully",
        tickets,
    });

});
// draw using how many winners need to win
router.get('/draw',(req,res)=>{
    const winnerCount = req.query.wc ?? 3;
    const winners = db.draw(winnerCount);
    res.status(200).json(winners);
})
router.get('/',(_req,res)=>{
    const tickets = db.findTicket();
    res.status(200).json(tickets);
})

// router
// .route('tickets/t/:ticketId')
// .get(()=>{})
// .patch(()=>{})
// .delete(()=>{})

// module.exports =  router;

module.exports = router;
