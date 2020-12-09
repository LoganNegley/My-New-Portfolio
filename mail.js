const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
require('dotenv').config()

const mailgunKey = process.env.KEY
const domainName = process.env.DOMAIN

const auth ={
    auth:{
        api_key:mailgunKey,
        domain:domainName
    }
};

const transporter= nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, message, cb)=>{
    const mailOptions= {
        from:email,
        to:'logannegley@gmail.com',
        subject:subject,
        text:message
    };

    transporter.sendMail(mailOptions, function(err, data){
        if(err){
            cb(err, null)
        }else{
            cb(null, data)
        }
    })
};


module.exports = sendMail;