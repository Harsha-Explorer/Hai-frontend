import React, { useState,useEffect } from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInput
}
from 'mdb-react-ui-kit';
import PopUpBox from './PopUpBox';
import '../App.css'
import UserService from '../services/UserService';
import Navibar from './Navibar';
import { useNavigate } from 'react-router-dom';


function Login() {
  const navigate = useNavigate();
  useEffect(()=>{
    if(sessionStorage.getItem('user-info')){
      navigate("/");
    }
  },[])
  const [modalShow, setModalShow] = useState(false);
  const [modalstatement,setModalStatement]=useState('') 


  const [user,setUser] = useState({
    username:"",
    password:"",
  });

  const inputEvent = (e) =>{
    const value = e.target.value;
    const name = e.target.name;
    setUser((preVal)=>{
      if(name === "uName"){
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

  async function loginSubmit(e){
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
    await UserService.checkUserLogin(user).then((res)=>{
      sessionStorage.setItem("user-info",JSON.stringify(res.data))
      sessionStorage.setItem("loggedin-count",'0')
      sessionStorage.setItem("username",user.username)
      navigate("/")
    })
    .catch((err)=>{
      setModalShow("true"); 
      setModalStatement(err.response.data);
    });
  }

  return (
    <>
    <Navibar />
      <MDBContainer fluid className="p-3 my-5">
        <MDBRow>

          <MDBCol>
          {/* https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg */}
            <img src="./images/login.svg" style={{'height':'100%'}} alt="LoginImg" />
          </MDBCol>
          <MDBCol col='4' md='6'>
            <form class="shadow-lg p-5 mb-5 bg-body rounded">
              <h1 style={{'textAlign':'center'}}>Login</h1>
              <br></br>
              
              <div className='input-group mb-6'>
                <label className='w-100'><i class="zmdi zmdi-account" style={{'position':'absolute','left':'0','top':'12px','paddingLeft':'40px','padding':'25px 8px'}}></i>
                  <MDBInput wrapperClass='mb-4' id='formControl' type='email' size="lg" placeholder='Username' style={{'paddingLeft':'40px'}} autoComplete='off' value={user.username} name='uName' onChange={inputEvent}/>
                </label>
              </div>
              <div class="input-group mb-3">
                <label className='w-100'>
                  <i class="zmdi zmdi-lock" style={{'position':'absolute','left':'0','top':'12px','paddingLeft':'40px','padding':'25px 8px'}}></i>
                  <MDBInput wrapperClass='mb-4'id='formControl' type='password' size="lg"  placeholder='Password' style={{'paddingLeft':'40px'}} name='pWord' onChange={inputEvent} value={user.password}/>
                </label> 
              </div>
              <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" htmlFor="exampleCheck1">Remember me</label>
              </div>
              <button className="btn btn-primary mb-4 w-100" size="lg" onClick={loginSubmit}>Sign in</button>
              <PopUpBox
                show={modalShow}
                onHide={() => setModalShow(false)}
                statement = {modalstatement}
              />
              <div className="align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">OR</p>
              </div>
              <button className="btn btn-primary mb-4 w-100" size="lg" style={{backgroundColor: 'red'}}>
                Continue with Google
              </button>
            </form>
          
          </MDBCol>
              

      </MDBRow>
      

      </MDBContainer>
    </>
    
  );
}

export default Login;