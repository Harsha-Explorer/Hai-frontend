import React from 'react'
import '../App.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {
    MDBCol,
    MDBRow
}
from 'mdb-react-ui-kit';

const ItemCarousel = (props) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
          },
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
          }
      };
    return (
        <>
            <MDBRow >
                <MDBCol>
                    <div style={{'backgroundColor':'ButtonShadow'}}>
                        <h1  className='text-center mx-3 mb-0' style={{'textAlign':'center'}}>{props.itemname}</h1>
                        <img src={props.imageSource} alt=""  style={{'height':'250px'}}></img>
                    </div>
                </MDBCol>
                <MDBCol md='9' >
                    <Carousel swipeable={true}
                        draggable={false}
                        showDots={true}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        keyBoardControl={true}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px" 
                        >
                        {props.items.map((item)=>(
                            <div id={item.id} className='zoom'>
                                <a href="/favourites" >
                                <img src={item.image} alt="" style={{'height':'230px'}}  className="w-100"></img>
                                </a>
                            </div>
                        ))}
                    </Carousel>
                </MDBCol>
            </MDBRow>
        </>
    )
}

export default ItemCarousel