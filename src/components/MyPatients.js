import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

function MyPatient(){
const [myPatients , setMyPatients] = useState()
let count = 1;


  useEffect(()=>{
    fetch('http://localhost:5000/get-my-patients',{
      headers:{
        "Authorization":localStorage.getItem('token')
      }
    })
    .then(response => response.json())
    .then(data => setMyPatients(data))
  },[])


    return(
        <div>
        <Navbar />
   <div className='container row mt-3'>
    <div className='col-md-4'>
        <h2>
        <small className="text-muted"><i>Doctor Appointment System</i></small>
    </h2>
    </div>
</div>
<div className="container">
<div className='row'>
    {/* <div className='col-md-2'></div> */}
    <div className='col-md-10 mt-5'>
    <form onSubmit={ (event) => event.preventDefault()}>
        <h3>Appointments</h3>
    <div className="mb-3">
    <table className="table">
<thead className="thead-light">
<tr>
  <th scope="col">S.no</th>
  <th scope="col">Patient Name</th>
  <th scope="col">Patient Email</th>
  <th scope="col">Date</th>
  <th scope="col">Time</th>
  
</tr>
</thead>
<tbody>
  {console.log(myPatients)}
 { myPatients && myPatients.map(x=> {
  return( <tr>
  <th scope="row">{count++}</th>
  <td>{x.patientDetail.name}</td>
  <td>{x.patientDetail.email}</td>
  <td>{x.date}</td>
  <td>{x.time}</td>
</tr>
)
})}
</tbody>
</table>
  </div>
  
  
</form>
</div>
   </div>
   </div>
   </div>
    )
}
export default MyPatient