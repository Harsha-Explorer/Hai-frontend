import React,{useState} from 'react'
import Navibar from './Navibar';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInput
}
from 'mdb-react-ui-kit'; 
import Image from "react-bootstrap/Image";
import '../App.css'

export default function About() {
  const defaultImage = "https://media.istockphoto.com/id/522855255/vector/male-profile-flat-blue-simple-icon-with-long-shadow.jpg?s=612x612&w=0&k=20&c=EQa9pV1fZEGfGCW_aEK5X_Gyob8YuRcOYCYZeuBzztM="
  const [imageFile,setImageFile] = useState(defaultImage);
  function handleChange(e) {
      setImageFile(URL.createObjectURL(e.target.files[0]));
      e.target.value=null
  }
  function handleRemoveImage(){
    setImageFile(defaultImage)
  }
  return (
    <>
      <Navibar />
      <MDBContainer fluid className="p-5 my-5 justify-content-center" >
        <form class="shadow-lg p-5 mb-5 bg-body rounded" >
          <MDBRow className="d-flex justify-content-center">
              <Image src={imageFile} roundedCircle style={{'height':'200px','width':'240px'}}/>
          </MDBRow>
          <MDBRow className="d-flex justify-content-center" style={{'marginTop':'10px'}}>
            <input
              className='form-control'
              type="file"
              name="myImage"
              onChange={handleChange} id='uploadImage' style={{'width':'107px'}}/>
            {
              imageFile !== defaultImage ? 
              <button className='btn btn-outline-danger-cls' type="button" onClick={handleRemoveImage} style={{'fontWeight':'600','width':'160px'}}>
                Remove
              </button> : null
            }
          </MDBRow>
          <MDBRow>
            <MDBInput id='formControl' type='text' size="lg" placeholder='About' autoComplete='off'/>
          </MDBRow>
          <MDBRow style={{'marginTop':'10px'}}>
            <MDBCol md='7'>
              <MDBInput id='formControl' type='text' size="lg" placeholder='Address' autoComplete='off'/>
            </MDBCol>
            <MDBCol md='3'>
              <MDBInput id='formControl' type='text' size="lg" placeholder='State' autoComplete='off'/>
            </MDBCol>
            <MDBCol md='2'>
              <MDBInput id='formControl' type='text' size="lg" placeholder='Pincode' autoComplete='off'/>
            </MDBCol>
          </MDBRow>
          <MDBRow style={{'marginTop':'10px'}}>
            <MDBCol md='4'>
              <MDBInput id='formControl' type='text' size="lg" placeholder='Mobile number' autoComplete='off'/>
            </MDBCol>
            <MDBCol md='4'>
              <MDBInput id='formControl' type='text' size="lg" placeholder='Secondary Mobile number (optional)' autoComplete='off'/>
            </MDBCol>
            <MDBCol md='4'>
              <MDBInput id='formControl' type='text' size="lg" placeholder='Email' autoComplete='off'/>
            </MDBCol>
          </MDBRow>
          <MDBRow className="justify-content-center" style={{'marginTop':'90px'}}>
            <button className="btn btn-outline-primary" style={{'fontWeight':'600','justifyContent':'right','width':'107px'}}>SAVE</button>
          </MDBRow>
        </form>
      </MDBContainer>
    </>
  )
}
