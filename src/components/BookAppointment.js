import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function BookAppointment() {

    const [specialization, setSpecialization] = useState()
    const [doctorId, setdoctorId] = useState()
    const [date, setDate] = useState()
    const [time, setTime] = useState()
    const [doctors , setDoctors] = useState([])
    const [show ,setShow] = useState(false)
    const [error , setError] = useState(false)
    let navigate = useNavigate()
    
    const [specialiazationError , setSpecializationError] = useState(false)
    const [doctorError , setDoctorError] = useState(false)
    const [dateError , setDateError] = useState(false)
    const [timeError , setTimeError] = useState(false)
    const expertise = ["Emergency medicine","Chest Specialist" , "Ultrasound Specialist" , "Children Specialist" , "Allergy and immunology"]
    useEffect(() => {
        setError(false)
        fetch('http://localhost:5000/doctors',{
            method:"post",
            headers:{
                "Content-Type":"Application/json"
            },
            body:JSON.stringify({
                specialization
            })
           })
           .then(response => response.json())
           .then(data => setDoctors(data))
            setShow(true)
    
    },[specialization])

    const onInputChange = (input) => {    
        if (input.target.name == "doctorId") {
            setdoctorId(input.target.value)
            setDoctorError(false)
            setError(false)
        }
        if (input.target.name == "time") {
            setTime(input.target.value)
            setTimeError(false)
            setError(false)
        }
        if (input.target.name == "date") {
            setDate(input.target.value)
            setDateError(false)
            setError(false)
        }
    }

    async function bookAppointment() {
        if(!specialization) return setSpecializationError(true)
        if(!doctorId) return setDoctorError(true)
        if(!date) return setDateError(true)
        if(!time) return setTimeError(true)
        let response = await fetch('http://localhost:5000/book-appointment', {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('token'),
                "Content-Type":"Application/json"
            },
            body: JSON.stringify({
                specialization,
                doctorId,
                date,
                time
            })
        })
        
        if(response.ok){
            navigate('/view-booking')    
        }
        else{
           setError(true)
        }
    }

    const onSpecializationChange = (e) =>{
        setSpecialization(e.target.value)
        setSpecializationError(false)
        setError(false)
        
    }


    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <div>
            <Navbar />
            <div className='container row mt-2'>
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
                        <h3>Book Appointment</h3>
                         <div>
                            <br />
                            {specialiazationError && <div className='alert alert-danger'>Please select one specialist</div>}
                            {error && <div className='alert alert-danger'>Please select another date time or doctor</div>}
                            <label><b>Please Select Specialist</b></label> <br /><br />
                         {expertise.map( x=> { return(
                        <p style={{marginBottom:"5px"}}>    
                        <input onClick={onSpecializationChange} type="radio" checked={specialization === x} value={x} name="specialiazation" /> {x}
                        </p>
                        )
                    })}
                    
                    <br />
                       </div>
                        { show &&
                        <div className="mb-1">
                            {doctorError && <div className='alert alert-danger'>Please select one Doctor</div>}
                            <label htmlFor="exampleInputPassword1" className="form-label">Doctor</label>
                            <select onChange={onInputChange} name='doctorId' className="form-select" aria-label="Default select example">
                                <option >Please Select Doctor</option>
                            { doctors.map((x) => {
                               return <option key={x._id} value={x._id}>{x.name}</option>
                               
                            })}
                            </select>
                        </div>
                        }
                        <div className="mb-1">
                        {dateError && <div className='alert alert-danger'>Please select date</div>}
                            <label htmlFor="exampleInputDate" className="form-label">Date</label>
                            <input onChange={onInputChange} name="date" type="Date" className="form-control" id="date" aria-describedby="date" />
                        </div>
                        <div className="mb-3">
                        {timeError && <div className='alert alert-danger'>Please select time</div>}
                        <label htmlFor="exampleInputPassword1" className="form-label">Please select time</label>
                         <select name="time" className="form-select" aria-label="Default select example" onChange={onInputChange}>
                        <option >Please Select Time</option>
                        <option value="09:00 AM">09:00 AM</option>
                        <option value="09:30 AM">09:30 AM</option>
                        <option value="10:00 AM">10 : 00 AM</option>
                        <option value="10:30 AM">10 : 30 AM</option>
                        <option value="11:00 AM">11 : 00 AM</option>
                        <option value="11:30 AM">11 : 30 AM</option>
                        <option value="12:00 PM">12 : 00 PM</option>
                        <option value="12:30 PM">12 : 30 PM</option>
                        <option value="01:00 PM">01 : 00 PM</option>
                        <option value="01:30 PM">01 : 30 PM</option>
                        <option value="02:00 PM">02 : 00 PM</option>
                        <option value="02:30 PM">02 : 30 PM</option>
                        <option value="03:00 PM">03 : 00 PM</option>
                        <option value="03:30 PM">03 : 30 PM</option>
                        </select>
                        </div>
                        <button onClick={bookAppointment} style={{ float: "right" }} type="submit" className="btn btn-primary">Book</button>

                    </form>
                </div>

            </div>
        </div>
    )
}


export default BookAppointment