
import {Form,Button} from 'react-bootstrap'
function Userlogin(){
      return (<div>
        <div style={{padding:'4vw',paddingRight:'70vw'}}>
        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Enter OTP sent to the above email address</Form.Label>
    <Form.Control  placeholder="OTP" />
  </Form.Group>
 
  <Button variant="primary" type="submit">
    Login
  </Button>
</Form>
</div>
    </div>)
}
export default Userlogin;