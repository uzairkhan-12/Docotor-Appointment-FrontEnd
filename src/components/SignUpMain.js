import React from "react";
import { useNavigate } from "react-router-dom";
function SignUpMain(){
  let navigate = useNavigate()
  function toDoctor(){
    navigate('/dr-signup')
  }
  function toPatient(){
    navigate('/patient-signup')
  }
    return(
      <div>
      <div className="row container mt-5">
        <div className='col-md-5'>
          <h2>
            <small className="text-muted"><i>Doctor Appointment System</i></small>
          </h2>
        </div>
        </div>
      <div className="d-grid gap-2 col-3 mx-auto" style={{marginTop:"180px"}}>
  <h2>Sign up as</h2>
  <button onClick={toDoctor} className="btn btn-outline-primary btn-lg" type="button">Doctor</button>
  <button onClick={toPatient} className="btn btn-outline-primary btn-lg" type="button">Patient</button>
  </div>
</div>
    )
}

export default SignUpMain