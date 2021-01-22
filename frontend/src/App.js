import './App.css';
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap'
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom'
import EmployeeLogin from './EmployeeLogin';
import Userlogin from './UseLogin';
import Home from './Home'

function App() {
  return (
    <div >
      <Router>
        
     <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">JobPortaL</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link ></Nav.Link>
      <Nav.Link ></Nav.Link>
      <Nav.Link ></Nav.Link>
    </Nav>
    <Form inline>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/employeeLogin">employeeLogin</Nav.Link>
      <Nav.Link href='/userLogin'>userLogin</Nav.Link>
    </Nav>
    </Form>
  </Navbar>

  <Switch>
          <Route path='/employeeLogin' exact component={EmployeeLogin} />
          <Route path='/userLogin' exact component={Userlogin} />
          <Route path='/' exact component={Home}/>
        </Switch>
  </Router>
    </div>
  );
}

export default App;
