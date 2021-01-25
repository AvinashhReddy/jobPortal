import axios from 'axios'
import {useState, useEffect} from 'react'
import {Button ,Card,Modal,Form} from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import React from 'react'
function MyVerticallyCenteredModal(props) {
    const [title,setTitle]=useState()
const [description,setDescription]=useState()
const [location,setLocation]=useState()

const setTitleValue=(event)=>{
    setTitle(event.target.value)
}
const setDescriptionValue=(event)=>{
    setDescription(event.target.value)
}
const setLocationValue=(event)=>{
    setLocation(event.target.value)
}
const createJob=()=>{
    const data ={
        title:title,
        description:description,
        location:location
    }
    axios.post('/addJob',data)
    alert('job created')
}

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create Job
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div style={{padding:'4vw',paddingRight:'4vw'}}>
        <Form>
        
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Job Title</Form.Label>
   <Form.Control type="text" placeholder="Enter Title" onChange={(event)=>{setTitleValue(event)}} />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Job description</Form.Label>
   <Form.Control type="text" placeholder="Enter description" onChange={(event)=>{setDescriptionValue(event)}} />
  </Form.Group>
 
  
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Job Location</Form.Label>
    <Form.Control  placeholder="location" onChange={(event)=>{setLocationValue(event)}}/>
  </Form.Group>
 
  <Button variant="primary" type="submit" onClick={createJob} >
    Create Job
  </Button>
</Form>

</div>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  
function OnEmployeeLogin(){
    const [jobs,setJobs]=useState()
    const [modalShow, setModalShow] = React.useState(false);
    var history=useHistory()
    useEffect(()=>{
    axios.get("/getJobs")
    .then(res=>setJobs(res.data))
    },[])
    const addJob=()=>{
history.push('/addJob')
    }
    if(!jobs)
    return <h3 style={{textAlign:'center',paddingTop:'18vw',color:'lightblue'}}>Loading..</h3>

    return (
        <div>
           <div style={{paddingTop:'2vw',paddingLeft:'85vw'}}>
           <Button variant="primary" onClick={() => setModalShow(true)}>
        Create Job
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      /> </div>
               <div style={{paddingLeft:'4vw'}}>
                   
                   {jobs.map((job)=>{
                     return (
                         <div style={{paddingleft:'4vw',paddingRight:'50vw',paddingTop:'2vw'}}>
                        <Card>
                        <Card.Header><b>{job.title}</b></Card.Header>
                        <Card.Body>
                          <Card.Title>Job applicants:</Card.Title>
                          <Card.Text>
                            {job.applicants.map((user)=>{
                                return <p>{user}</p>
                            })}
                          </Card.Text>
                          
                        </Card.Body>
                      </Card>
                      </div>
                     )
                        })}
               </div>
          
        </div>
    )
}
export default OnEmployeeLogin