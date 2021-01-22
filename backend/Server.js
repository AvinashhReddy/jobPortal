const express=require('express')
const app=express()
const cors=require('cors')
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


app.listen(8080)
app.use(cors())
app.get('/',async(req,res)=>{
    res.send("Working")
})
app.post('/sendOTP/:otp/:email',async(req,res)=>{

    var mailOptions = {
        from: ' no-reply <avinash1279777@gmail.com>',
        to: req.params.email,
        subject: 'YOUR ONE TIME PASSWORD FOR LOGIN',
        text: `Your One Time Password for Login to the jobPortaL is : ` + req.params.otp 
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
})



