const express=require('express')
const app=express()
var API_KEY = 'YOUR_API_KEY';
var DOMAIN = 'YOUR_DOMAIN_NAME';
var mailgun = require('mailgun-js')({apiKey: '6ca90969337b8e041534f71e8bf5ee8f-e438c741-53e646a1', domain: 'sandboxdd23545946274bd8b96afdfaa7b8d767.mailgun.org'});

const data = {
  from: 'avinash <avinash12797@gmail.com>',
  to: 'avinash127977@gmail.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomeness!'
}; 
mailgun.messages().send(data, (error, body) => {
  console.log(body);
});
app.listen(8080)
app.get('/',async(req,res)=>{
    res.send("Working")
})




