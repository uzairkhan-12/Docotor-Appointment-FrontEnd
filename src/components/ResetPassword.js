import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function ResetPassword() {
  let navigate = useNavigate()
  const [email , setEmail] = useState()
  const [emailError ,setEmailError] = useState(false)
  const [emailSent , setEmailSent] = useState(false)
  const [error , setError] = useState(false)
  const onEmailChange = (input)=>{
    setEmail(input.target.value)
    setEmailError(false)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
  }

function submitEmail(){
    if(!email) return setEmailError(true)
    fetch("http://localhost:5000/reset-password",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            email
        })
    }).then(response => response.json())
    .then(result => {
        if(result.error){
            setError(true)
        }
        else{
           setEmailSent(true)
           navigate('/login')
        }
}).catch(err => {console.log(err)})
}

  return (
    <div>
      <div className='container row mt-5'>
        <div className='col-md-5'>
          <h2>
            <small className="text-muted"><i>Doctor Appointment System</i></small>
          </h2>
        </div>
      </div>
      <div className='row container mt-5'>
        <div className='col-md-6'></div>
        <div className='col-md-6'>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
                {emailSent && <div className='alert alert-danger'>Please check your email</div>}
              {emailError && <div className='alert alert-danger'>Please Enter Email</div>}
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input onChange={onEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <button onClick={submitEmail} style={{ float: "right" }} type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword