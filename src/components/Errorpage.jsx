import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css'
import Navibar from './Navibar';
import { useNavigate } from 'react-router-dom';
const Errorpage = () => {
  const navigate = useNavigate();
  return (
    <>
    <Navibar />
    <div fluid className='container text-center' style={{'marginTop':'15%','backgroundColor':'white','borderColor':'white'}}>
      <h1 className='text-center fw-bold mx-3 mb-0' style={{'textAlign':'center'}}>WE ARE SORRY PAGE NOT FOUND!</h1>
      <br></br>
      <p className='text-center mx-3 mb-0' style={{'textAlign':'center'}}>The page you are looking for might have been removed, had it name changed
          or is temporarily unavailable
      </p>
      <br></br>
      <button type="button" className="btn btn-primary text-center" onClick={()=>{navigate('/')}} >Back to home</button>
      
    </div>
    </>
  )
}

export default Errorpage
