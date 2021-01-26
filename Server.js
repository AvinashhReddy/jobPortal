const express=require('express')
const app=express()
const cors=require('cors')
const path=require('path')
var API_KEY = 'YOUR_API_KEY';
var DOMAIN = 'YOUR_DOMAIN_NAME';
var nodemailer = require('nodemailer');
const mongoose =require('mongoose');
const dataSchema=require('./Model')
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'avinash1279777@gmail.com',
    pass: 'forTrial'
  }
});


const port=process.env.PORT || 8080
app.listen(port,()=>console.log(`running! at ${port}`))
const url='mongodb+srv://cluster0:cluster0@cluster0.8xqli.mongodb.net/firstdb?retryWrites=true&w=majority'
mongoose.connect(url,{useNewUrlParser:true, useUnifiedTopology: true})
const con=mongoose.connection
 
con.on('open',function(){
    console.log('connected!'); 
})
app.use(cors())
app.use(express.json())
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
app.get('/getJobs',async(req,res)=>{
  var data= await dataSchema.find()
  res.json(data)

})
app.post('/addJob',(req,res)=>{
  const newData=new dataSchema({
      title:req.body.title,
      description:req.body.description,
      expireDate:req.body.expireDate,
      location:req.body.location,
      applicants:req.body.applicants
  })
   newData.save()
  })
  app.put('/addApplicants/:p',async(req,res)=>{
    const a =await dataSchema.findOneAndUpdate({'title':req.params.p},req.body)
    
    
  })
 

  if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }
