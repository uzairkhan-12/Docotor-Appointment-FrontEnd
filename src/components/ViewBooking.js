import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

function ViewBooking(){

  const [appointments , setAppointments] = useState()
  let count = 1
  useEffect(() =>{
    getAppointments()
  },[])

function getAppointments(){
  fetch('http://localhost:5000/get-my-appointments',{
    headers:{
        "Authorization": "Bearer "+localStorage.getItem('token')
    }
})
  .then(response => response.json())
  .then(data => setAppointments(data))
}


function cancleBooking(id){
    // console.log("id is ",id)
    fetch('http://localhost:5000/patient-by-id/'+id)
    .then(response => response.json())
    .then(data => getAppointments())
  }
  function handleSubmit(event){
    event.preventDefault()
  }

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
    <div className='container'>
    <div className='row'>
        <div className='col-md-2'></div>
        <div className=' mt-5'>
        <form onSubmit={handleSubmit}>
            <h3>Your Appoinments</h3>
        <div className="mb-3">
        <table className="table">
  <thead className="thead-light">
    <tr>
      <th scope="col">S.no</th>
      <th scope="col">Doctor Name</th>
      <th scope="col">Expertise</th>
      <th scope="col">Date</th>
      <th scope="col">Time</th>
      <th scope="col">Cancel Booking</th>
      </tr>
  </thead>
  <tbody>
    {appointments && appointments.map(x=>{
      return(<tr key={x._id}>
      <th  scope="row">{count++}</th>
      <td key={x.doctorId?.name}>{x.doctorId?.name}</td>
      <td key={x.specialization}>{x.specialization}</td>
      <td key={x.date}>{x.date}</td>
      <td key={x.time}>{x.time}</td>
      <td><button onClick={() => cancleBooking(x._id)} className='btn btn-outline-danger'>Cancle Booking</button></td>
    </tr>)
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

export default ViewBooking