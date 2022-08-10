import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function NewPassword() {
  let navigate = useNavigate()
  const [password , setPassword] = useState()
  const [passwordError ,setPasswordError] = useState(false)
  const [passwordUpdated , setPasswordUpdated] = useState(false)
  const {token} = useParams()


  const onEmailChange = (input)=>{
    setEmail(input.target.value)
    setEmailError(false)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
  }

function submitNewPassword(){
    if(!password) return setPasswordError(true)
    fetch("http://localhost:5000/new-password",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            password,
            token
        })
    }).then(response => response.json())
    .then(result => {
        if(result.error){
           setError(true)
        }
        else{
            localStorage.setItem("token",result.token)
            // localStorage.setItem("user",JSON.stringify(result.user))
            // dispatch({type:"USER",payload:result.user})
            // dispatch(setActiveUser(result.user))
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
              {passwordError && <div className='alert alert-danger'>Please Enter Email</div>}
              {error && <div className='alert alert-danger'>error</div>}
              <label htmlFor="exampleInputEmail1" className="form-label">New Password</label>
              <input onChange={onPasswordChange} type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <button onClick={submitNewPassword} style={{ float: "right" }} type="submit" className="btn btn-primary">Update</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewPassword