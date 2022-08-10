import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function PatientSignUp() {
  let navigate = useNavigate()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [confrimPasswordError, setConfirmPasswordError] = useState(false)
  const [passwordMatchError, setPasswordMatchError] = useState(false)
  const [userExist , setUserExistError] = useState(false)
  const onNameChange = (input) => {
    setName(input.target.value)
    setNameError(false)
    console.log(name)
  }

  const onEmailChange = (input) => {
    setEmail(input.target.value)
    setUserExistError(false)
    setEmailError(false)
    console.log(email)
  }

  const onPasswordChange = (input) => {
    setPassword(input.target.value)
    setPasswordError(false)
    setPasswordMatchError(false)
    console.log(password)
  }

  const onConfirmPasswordChange = (input) => {
    setConfirmPassword(input.target.value)
    setConfirmPasswordError(false)
    setPasswordMatchError(false)
    console.log(confirmPassword)
  }

  const handleSubmit = event => {
    event.preventDefault();
  };

 async function signup() {
    if (!name) return setNameError(true)
    if (!email) return setEmailError(true)
    if (!password) return setPasswordError(true)
    if (!confirmPassword) return setConfirmPasswordError(true)
    if (password !== confirmPassword) return setPasswordMatchError(true)

    let response =await fetch("http://localhost:5000/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({
        name,
        email,
        password,
        userType:"patient"
      })
    })
    if(!response.ok){
      setUserExistError(true)  
    }
   else{
    navigate('/login')
   }
    
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
      <div className='row container'>
        <div className='col-md-6'></div>
        <div className='col-md-6'>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              {nameError && <div className='alert alert-danger'>Please Enter Name</div>}
              <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
              <input onChange={onNameChange} type="text" className="form-control" id="name" aria-describedby="name" />
            </div>
            <div className="mb-3">
              {emailError && <div className='alert alert-danger'>Please Enter Email</div>}
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input onChange={onEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              {passwordError && <div className='alert alert-danger'>Please Enter Password</div>}
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input onChange={onPasswordChange} type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3">
              {confrimPasswordError && <div className='alert alert-danger'>Please Enter Confirm Password</div>}
              {passwordMatchError && <div className='alert alert-danger'>Password does not match</div>}
              <label htmlFor="exampleInputConfirmP" className="form-label">Confirm Password</label>
              <input onChange={onConfirmPasswordChange} type="password" className="form-control" id="exampleInputConfirmP" />
            </div>
            {userExist && <div className='alert alert-danger'>User already exist</div>}
            <button onClick={signup} style={{ float: "right" }} type="submit" className="btn btn-primary">SignUp</button>
            <p>Already registered? <Link to="/login" style={{ fontSize: "23px" }} >Login</Link></p>

          </form>
        </div>
      </div>
    </div>
  )
}

export default PatientSignUp