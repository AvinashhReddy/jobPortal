import {Form,Button} from 'react-bootstrap'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import {useState,useEffect} from 'react'
function Userlogin(){
const [email,setEmail]=useState()
const [actualotp,setactualOTP]=useState()
const [enteredotp,setenteredOTP]=useState()
const history=useHistory()
const setEmailValue=(event)=>{
    setEmail(event.target.value)
}
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      }


    const sendOtp=()=>{
        if(email){
        var a=getRndInteger(1000,10000)
        setactualOTP(a)
        var url="/sendOTP/"+a+"/"+email
  axios.post(url)
  alert('OTP SENT!')
        }
        else{
            alert('please enter email')
        }
    }

const setenteredOTPbyUser=(event)=>{
    setenteredOTP(event.target.value)
}

const login=(event)=>{
    if(enteredotp){
if(actualotp==enteredotp){
alert("Login success")
history.push('/onUserLogin/'+email)
event.preventDefault()
}
else{
   alert("Login failed")
   event.preventDefault()
}}
else{
   alert("please fill in all the fields")
}
}
    return (<div>
        <div style={{padding:'4vw',paddingRight:'70vw'}}>
        <Form>
        
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
   <Form.Control type="email" placeholder="Enter email" onChange={(event)=>{setEmailValue(event)}} />
   <Button onClick={sendOtp}>Send OTP</Button>

    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
 
  
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Enter OTP sent to the above email address</Form.Label>
    <Form.Control  placeholder="OTP" onChange={(event)=>{setenteredOTPbyUser(event)}}/>
  </Form.Group>
 
  <Button variant="primary" type="submit" onClick={(event)=>login(event)}>
    Login
  </Button>
</Form>

</div>

    </div>)
}

export default Userlogin;