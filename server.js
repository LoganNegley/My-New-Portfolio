// Server Config
const express = require('express');
const cors = require('cors')
const path = require('path')
const sendMail = require('./mail');

const server = express();

server.use(cors());
server.use('/assets', express.static(__dirname + '/assets'));

// Data parsing
server.use(express.urlencoded({
    extended:false,
}));
server.use(express.json());

// Render HTML File
server.get('/', (req,res) =>{
res.sendFile(path.join(__dirname, 'index.html'));
});


// Send Email
server.post('/email', (req,res) =>{
    console.log('Email route working')
    const{email,subject,message} = req.body
    console.log(req.body)
    res.redirect('/')

    // Send mail function from mail.js
    sendMail(email, subject, message, function(err,data){
        if(err){
            res.status(500).json({message:'Problem sending message'})
        }else{
            res.json({message: 'Email sent'})
        }
    })
});


module.exports = server