import React,{useState} from 'react'
import Navibar from './Navibar';
import '../App.css'
import {
    MDBCol,
    MDBRow,
}
from 'mdb-react-ui-kit';
import Carousel from 'react-multi-carousel';
import {Link} from 'react-router-dom';
import ItemContent from './ItemContent';


const Item = () => {
    const [itemImages,setItemIamges] = useState({image:['https://m.media-amazon.com/images/I/61tk3NENc7L._SX522_.jpg',
    'https://m.media-amazon.com/images/I/61m+-6nZliL._SX522_.jpg',  
    'https://m.media-amazon.com/images/I/517gYi4LEDL._SX522_.jpg',
    'https://m.media-amazon.com/images/I/61AZ-EotH+L._SX522_.jpg',
    'https://m.media-amazon.com/images/I/517gYi4LEDL._SX522_.jpg',
    'https://m.media-amazon.com/images/I/61uojnUWTeL._SX522_.jpg']})
    
    const [displayImage,setDisplayImage] = useState(itemImages.image[0])
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 6
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3
      },
      LargeDesktop:{
        breakpoint: { max: 4000, min: 3000 },
        items: 6
      }
    };
    return (
      <>
        <Navibar />
        <MDBRow style={{'marginTop':'70px','marginRight':'5%','marginLeft':'5%'}}>
          
          <MDBCol md='5' >
            <div>
                <img src={displayImage} alt=""  style={{'height':'350px','width':'100%'}}></img>
            </div>
            <div>
              <Carousel swipeable={true}
                  draggable={true}
                  showDots={true}
                  responsive={responsive}
                  ssr={true} // means to render carousel on server-side.
                  // infinite={true}
                  keyBoardControl={true}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px" 
                  >
                  {itemImages.image.map((item)=>(
                      <div  style={{'marginTop':'20px'}}>
                          <div  style={{'height':'100px'}}>
                              {/* changes required for url routing */}
                              <Link to='#'>
                                  <img className='itemBox' src={item} alt="" style={{'height':'80px','width':'90px'}} onClick={()=>{setDisplayImage(item)}}></img>
                              </Link>
                          </div>
                      </div>
                  ))}
              </Carousel>
            </div>
            <MDBRow style={{'marginLeft':'15%','marginRight':'15%','marginTop':'20px'}}>
              <button className='btn btn-outline-success' style={{'fontWeight':'760'}}>BUY NOW !</button>
              <button className='btn btn-outline-danger' style={{'fontWeight':'760'}}>RENT NOW !</button>
              <button className='btn btn-outline-primary' style={{'fontWeight':'760'}}>ADD TO CART</button>
            </MDBRow>
            
          </MDBCol>
          <MDBCol >
            <div className='shadow-lg p-5 mb-5 bg-body rounded'>
                <ItemContent/>
            </div>
          </MDBCol>
        </MDBRow>
      </>
  )
}

export default Item