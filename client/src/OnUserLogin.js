import axios from 'axios'
import {useState, useEffect} from 'react'
import {Card,Button} from 'react-bootstrap'
import {useParams} from 'react-router-dom'
function OnUserLogin(){

    const [jobs,setJobs]=useState()
    const [resume,setResume]=useState(null)
    const params=useParams()
    useEffect(()=>{
    axios.get("/getJobs")
    .then(res=>setJobs(res.data))
    },[])
    const takeResume=event=>{
        setResume(event.target.files[0])
        console.log(resume)
    }
    const sendData=async(index)=>{
        var a=jobs[index].applicants
        a.push(params.user)
        alert("applied to the job!")
        await axios.put("/addApplicants/"+jobs[index].title,{applicants:a})
    }
    if(!jobs)
    return <h3 style={{textAlign:'center',paddingTop:'18vw',color:'lightblue'}}>Loading..</h3>

    return (
        <div>
            <div style={{paddingTop:"1vw",paddingLeft:'78vw'}}>
            <label for="myfile">Upload your Resume:</label>
  <input type="file" id="myfile" name="myfile" onChange={takeResume} />
            </div>
        <div style={{paddingLeft:'4vw',paddingTop:'2vw'}}>
            
        {jobs.map((job,index)=>{
            return (
                <div style={{display:'inline-block',paddingLeft:'1vw'}}>
                <Card border="dark" style={{ width: '18rem' }}>
    <Card.Header>{job.title}</Card.Header>
    <Card.Body>
      <Card.Title>{job.description}</Card.Title>
      <Card.Title>Location: {job.location}</Card.Title>
      <Card.Text>
        <Button onClick={(event)=>sendData(index)}>Apply</Button>
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
export default OnUserLogin