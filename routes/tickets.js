
const router = require('express').Router();
const db = require('../db/db');

router
.route('tickets/t/:ticketId')
.get(()=>{})
.patch(()=>{})
.delete(()=>{})

// const router = require('express').Router();
// const db = require('../db/db');

// router
// .route('tickets/t/:ticketId')
// .get(()=>{})
// .patch(()=>{})
// .delete(()=>{})

// module.exports =  router;

module.exports = router;
