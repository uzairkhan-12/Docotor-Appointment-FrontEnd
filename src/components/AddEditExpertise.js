import React from "react";
import Navbar from "./Navbar";


function AddEditExperise(){
    return(
        <div>
        <Navbar/>
        <div className='container row mt-3'>
        <div className='col-md-4'>
            <h2>
            <small className="text-muted"><i>Doctor Appointment System</i></small>
        </h2>
        </div>
    </div>
       
        <div className="container">
    <div className='row'>
        <div className='col-md-2'></div>
        <div className='col-md-6'>
    <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Add Experise</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="e.g : chest specialist"/>
  </div>
  <div className='mb-3'>
        <button style={{float:"right"}} className='btn btn-outline-primary'>Add</button>
  </div>
  </div>
    </div>
    <div className='row'>
        
        <div className=' mt-5'>
        <form >
            <h3>Specialist's list</h3>
        <div className="mb-3">
        <table className="table">
  <thead className="thead-light">
    <tr>
      <th scope="col">S.no</th>
      <th scope="col">Expertise</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Chest Specialist</td>
      <td><button className="btn btn-outline-primary" style={{width:"120px"}}>Edit</button></td>
      <td><button className='btn btn-outline-danger'style={{width:"120px"}}>Delete</button></td>
      
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>Chest Specialist</td>
      <td><button className="btn btn-outline-primary" style={{width:"120px"}}>Edit</button></td>
      <td><button className='btn btn-outline-danger'style={{width:"120px"}}>Delete</button></td>
      
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>Chest Specialist</td>
      <td><button className="btn btn-outline-primary" style={{width:"120px"}}>Edit</button></td>
      <td><button className='btn btn-outline-danger'style={{width:"120px"}}>Delete</button></td>
      
    </tr>
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


export default AddEditExperise