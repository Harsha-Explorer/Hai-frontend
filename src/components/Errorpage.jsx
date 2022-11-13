import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css'
import Navibar from './Navibar';

const Errorpage = () => {
  return (
    <>
    <Navibar />
    <div style={{'left':'50%','top':'50%','position':'absolute','transform':'translate(-50%, -50%)'}}>
      <h1 className='text-center fw-bold mx-3 mb-0' style={{'textAlign':'center'}}>WE ARE SORRY PAGE NOT FOUND!</h1>
      <p className='text-center mx-3 mb-0' style={{'textAlign':'center'}}>The page you are looking for might have been removed, had it name changed
          or is temporarily unavailable
      </p>
      <button className="btn btn-primary mx-3 w-10 text-center mb-0" to="/" >Back to home</button>
    </div>
    </>
  )
}

export default Errorpage
