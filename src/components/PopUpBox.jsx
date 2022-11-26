import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { IoIosCard } from "react-icons/io";
import { useNavigate } from 'react-router-dom';



const PopUpBox = (props) => {
    const navigate = useNavigate();
    const loggedIn = () =>{
      if(props.signup === "true"){
        navigate("/")
      }else{
        props.onHide()
      }
    }
    if(sessionStorage.getItem("loggedin-count")==='0'){
      sessionStorage.setItem("loggedin-count",'1')
    }
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Note
            <IoIosCard/>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {props.statement}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={loggedIn}>Close</Button>
        </Modal.Footer>
      </Modal>
      
    );
}

export default PopUpBox