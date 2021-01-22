const express=require('express')
const app=express()
var API_KEY = 'YOUR_API_KEY';
var DOMAIN = 'YOUR_DOMAIN_NAME';
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'avinash1279777@gmail.com',
    pass: 'forTrial'
  }
});

var mailOptions = {
  from: 'avinash1279777@gmail.com',
  to: 'avinash127977@gmail.com',
  subject: 'trial',
  text: `otp:12345` 
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
app.listen(8080)
app.get('/',async(req,res)=>{
    res.send("Working")
})




