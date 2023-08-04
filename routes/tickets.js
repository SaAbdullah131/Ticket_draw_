

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

router.post('/sell',()=>{});
router.post('/bulk',()=>{});
router.get('/draw',()=>{})
router.get('/',()=>{})


// const router = require('express').Router();
// const db = require('../db/db');

// router
// .route('tickets/t/:ticketId')
// .get(()=>{})
// .patch(()=>{})
// .delete(()=>{})

// module.exports =  router;

module.exports = router;
