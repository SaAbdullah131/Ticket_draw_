
// const express = require('express');

// const app = express();

// const simpleLogger = (req,res,next)=>{
//     console.log(`${req.url}-${req.method}-${new Date().toISOString()}`);
//     const name = req.query.name;
//     if(name==='Abdullah'){
//         res.json({message:"Bad Request"})
//     }
    
//     next();
// }

// // middleware use 
// app.use(simpleLogger); // globally middleware 


// app.get('/hello',(req,res,next)=>{
//     // console.log(`${req.url}-${req.method} - ${new Date().toISOString()}`);
//     res.json({message:'Hello'});

// })

// app.get('/',(req,res,next)=>{
//     res.json({message:"Sweet Home"})
// })

// app.listen(8000,()=>{
//     console.log("Application running on port 8000");
// })
require('dotenv').config();
const http = require('http');
const app = require('./app/app');


const server = http.createServer(app);

const PORT = process.env.PORT || 8000;
server.listen(PORT,()=>{
    console.log(`Server listing on ${PORT}`)
})