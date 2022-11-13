import React, { useState,useEffect } from 'react'
import '../App.css'
import UserService from '../services/UserService';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInput
}
from 'mdb-react-ui-kit';
import PopUpBox from './PopUpBox';
import Navibar from './Navibar';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    if(localStorage.getItem('user-info')){
      navigate("/");
    }
  },[])

  const [modalShow, setModalShow] = React.useState(false);
  const [isSignup,setIsSignup] = useState("false");
  const [modalstatement,setModalStatement]=useState('') 
  const [errorMessage,setErrorMessage]=useState('')
  const [user,setUser] = useState({
    username:"",
    password:"",
  });
  

  const inputEvent = (e) =>{
    const value = e.target.value;
    const name = e.target.name;
    setUser((preVal)=>{
      if(name === "uName"){
        UserService.getUserByName(value).then((res)=>{
          if(res.data==="User already exists. Please choose another username"){
            setErrorMessage("User already exists. Please choose another username")
          }else{
            setErrorMessage("")
          }
        })
        .catch((err)=>{console.log(err.data)})
        return{
          username:value,
          password:preVal.password
        }
      }else{
        return{
          username:preVal.username,
          password:value
        }
      }
    });
  };

  async function signUpSubmit(e){
    e.preventDefault()
    if(user.username === ""){
      setModalStatement("Username cannot be empty")
      setModalShow("true")
      return;
    }
    if(user.password === ""){
      setModalStatement("Password cannot be empty")
      setModalShow("true")
      return;
    }
    await UserService.createUser(user).then((res)=>{
      setModalShow("true"); 
      setModalStatement(res.data); 
      setIsSignup("true");
      localStorage.setItem("user-info",JSON.stringify(res.data))
      navigate("/")
    })
    .catch((err)=>{
      setModalShow("true"); setModalStatement(err.response.data);setIsSignup("false")
    });
    
  };


  return (
    <>
    <Navibar />
    <MDBContainer fluid className="p-3 my-5" >

      <MDBRow>
      <MDBCol>
      {/* https://st.depositphotos.com/18722762/51522/v/600/depositphotos_515228814-stock-illustration-online-registration-sign-login-account.jpg */}
          <img src="./images/signup.jpg" style={{'height':'100%'}} alt="LoginImg" />
        </MDBCol>
        <MDBCol col='4' md='6'>
          <form class="shadow-lg p-5 mb-5 bg-body rounded">
            <h1 style={{'textAlign':'center'}}>Signup</h1>
            <br></br>
            
            <div className='input-group mb-6'>
              <label className='w-100'><i class="zmdi zmdi-account" style={{'position':'absolute','left':'0','top':'12px','paddingLeft':'40px','padding':'25px 8px'}}></i>
                <MDBInput wrapperClass='mb-4' id='formControl' type='email' size="lg" placeholder='Username' style={{'paddingLeft':'40px'}} autoComplete='off' value={user.username} name='uName' onChange={inputEvent}/>
                <p style={{'color':'red'}}>{errorMessage}</p>
              </label>
            </div>
            <div class="input-group mb-3">
              <label className='w-100'>
                <i class="zmdi zmdi-lock" style={{'position':'absolute','left':'0','top':'12px','paddingLeft':'40px','padding':'25px 8px'}}></i>
                <MDBInput wrapperClass='mb-4'id='formControl' type='password' size="lg"  placeholder='Password' style={{'paddingLeft':'40px'}} name='pWord' onChange={inputEvent} value={user.password}/>
              </label> 
            </div>
            <button className="btn btn-primary mb-4 w-100" size="lg" onClick={signUpSubmit}>Register</button>
            <PopUpBox
              show={modalShow}
              onHide={() => setModalShow(false)}
              statement = {modalstatement}
              signup={isSignup}
            />
            <div className="align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0">OR</p>
            </div>
            <button className="btn btn-primary mb-4 w-100" size="lg" style={{backgroundColor: 'red'}}>
              Signup with Google
            </button>
          </form>
        
        </MDBCol>
      </MDBRow>

    </MDBContainer>
    </>
  )
}

export default Signup
