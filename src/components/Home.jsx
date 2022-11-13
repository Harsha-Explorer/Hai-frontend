import React,{useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css'
import '../App.css'
import Navibar from './Navibar';
import PopUpBox from './PopUpBox';



const Home = () => {
  const [modalShow, setModalShow] = useState(true);
  
  return (
    <>
      {(localStorage.getItem('user-info') && localStorage.getItem("loggedin-count")==='0')?
        <>
          <PopUpBox
            show={modalShow}
            onHide={() => setModalShow(false)}
            statement = {"Welcome to Hai. Feel the comfort :)"}
          />
        </>
        :null
      }
      
    <Navibar />
          
     <div>
     
      {/* <div class="container">  */}
      <Carousel interval={2000}>
        <Carousel.Item>
          <img className="d-block w-100" src={'https://wallpapercave.com/wp/wp9024371.jpg'} alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo2aW67BIB4k6a9r_TtT4BaoLep_zW_JT7Xw&usqp=CAU"
            alt="Second slide"
          />
          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQezynQMNrD-6iIILEDmkHAUhKII--W4CHwSQ&usqp=CAU"
            alt="Third slide"
          />
          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
        
      </Carousel>
       {/* </div> */}
       
    </div> 
    </>
  )
}

export default Home
