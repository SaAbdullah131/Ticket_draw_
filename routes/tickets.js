

const router = require('express').Router();
const db = require('../db/db');

// For ticketId
router
.route('/t/:ticketId')
.get(()=>{})
.patch(()=>{})
.delete(()=>{})

router.get('/u/:username',()=>{});
router.patch('/u/:username',()=>{});
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
