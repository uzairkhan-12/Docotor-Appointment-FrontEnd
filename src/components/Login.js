import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Login() {
  let navigate = useNavigate()
  const [email , setEmail] = useState()
  const [password ,setPassword] = useState()
  const [emailError , setEmailError] = useState(false)
  const [passwordError,setPasswordError] = useState(false)
  const [error , setError] = useState(false)
  
  const onEmailChange = (input)=>{
    setEmail(input.target.value)
    setError(false)
    setEmailError(false)
  }
  
  const onPasswordChange = (input)=>{
    setPassword(input.target.value)
    setError(false)
    setPasswordError(false)
  }

  async function SubmitLogin(){
    if(!email) return setEmailError(true)
    if(!password) return setPasswordError(true)

    let response = await fetch("http://localhost:5000/sign-in",{
      method:"POST",
      headers:{
        "Content-Type":"Application/json"
      },
      body:JSON.stringify({
        email,
        password
      })
    })
  
  if(!response.ok){
    setError(true)
  }
  else{
    const data = await response.json()
    console.log(data)
    localStorage.setItem("token",data.token)
    localStorage.setItem("userType",data.user.userType)
    localStorage.getItem('userType') === 'doctor' ? 
    navigate('/my-patients') : 
    navigate('/home')
  }


  }
  const handleSubmit = (event) => {
    event.preventDefault()
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
              {error && <div className='alert alert-danger'>Please check your Email and Password</div>}
              {emailError && <div className='alert alert-danger'>Please Enter Email</div>}
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input onChange={onEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              {passwordError && <div className='alert alert-danger'>Password is required</div>}
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input onChange={onPasswordChange} type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button onClick={SubmitLogin} style={{ float: "right" }} type="submit" className="btn btn-primary">Login</button>
            <p>Forgot password? <Link to='/login'  style={{ fontSize: "23px" }} >Forget Password</Link></p>
            <p>Are you new here? <Link to="/sign-up-main" style={{ fontSize: "23px" }} >Register</Link></p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login