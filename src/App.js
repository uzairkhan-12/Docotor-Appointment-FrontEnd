import './App.css';
import { Routes , Route} from 'react-router-dom'
import BookAppointment from './components/BookAppointment'
import ViewBooking from './components/ViewBooking';
import Login from './components/Login';
import DrSignUp from './components/DrSignUp';
import SignUpMain from './components/SignUpMain';
import PatientSignUp from './components/PatientSignUp';
import AddEditExperise from './components/AddEditExpertise';
import MyPatient from './components/MyPatients';
import ResetPassword from './components/ResetPassword';
function App() {
  return (
    <div>
   <Routes>

    <Route path='/home' element={<BookAppointment />}/>
    <Route path='/' element={<Login />} />
    <Route path='/view-booking' element={ <ViewBooking />} />
   <Route path='/login' element={<Login />} />
   <Route path='/dr-signup' element={<DrSignUp />} />
    <Route path='/sign-up-main' element={<SignUpMain /> }/>
    <Route path='/patient-signup' element={<PatientSignUp />}/>
    <Route path='/add-edit-expertise' element={<AddEditExperise />}/>
    <Route path='/my-patients/' element={<MyPatient />}/>
    <Route path='/reset-password' element={<ResetPassword />} />
   </Routes>
   </div>
  );
}

export default App;
