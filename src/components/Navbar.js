import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Navbar(){
  let navigate = useNavigate()

  function logout(){
    localStorage.clear()
    navigate('/login')
  }

    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
        {localStorage.getItem("userType") === "patient" ? 
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/home" className="nav-link" aria-current="page" href="#">Book Appointment</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/view-booking" className="nav-link" >View Booking</NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink to='/add-edit-expertise' className="nav-link">Add Edit Expertise</NavLink>
        </li> */}
        <li className="nav-item">
          <button style={{marginLeft:"1130px"}} onClick={logout} className="btn btn-primary">Logout</button>
          </li>
        
        
       
      </ul>
        : null}
  {localStorage.getItem("userType") === 'doctor' ? 
  <ul className="navbar-nav">
  <li className="nav-item">
          <NavLink to='/my-patients' className="nav-link">Patients List</NavLink>
        </li>
        <li className="nav-item">
          <button style={{marginLeft:"1310px"}} onClick={logout} className="btn btn-primary">Logout</button>
          </li>
          </ul>
  
  : null }
 
      {localStorage.getItem("userType") === 'Admin' ?
      <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink to="/home" className="nav-link" aria-current="page" href="#">Book Appointment</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/view-booking" className="nav-link" >View Booking</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to='/add-edit-expertise' className="nav-link">Add Edit Expertise</NavLink>
      </li>
      <li className="nav-item">
          <NavLink to='/my-patients' className="nav-link">Patients List</NavLink>
        </li>
        <li className="nav-item">
      <button style={{marginLeft:"890px"}} onClick={logout} className="btn btn-primary">Logout</button>
      </li>
    </ul> : null}

      
    </div>
    </div>
</nav>
        </div>
    )
}


export default Navbar