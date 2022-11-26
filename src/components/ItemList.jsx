import React from 'react'
import { Card, Col } from "react-bootstrap";
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
const ItemList = ({cards}) => {
  return (
    <>
        {cards.map((item) => (
            <Col xs={12} md={4} lg={4} key={item.id}>
                <Card className='card-zoom'  style={{'marginTop':'20px'}} >
                    {/* changes required for url routing */}
                    <a href="/item">
                        <div key={item.id}>
                            <img src={item.image} style={{'height':'290px'}} alt="itemImage"/>
                        </div>
                    </a>
                    <Card.Body >
                        <Card.Title style={{'textAlign':'center'}}>{item.name}</Card.Title>
                        <div key={item.id}>
                            <span>
                                <button class="btn btn-outline-primary" id="button-addon2" style={{'textAlign':'left','backgroundColor':'green','color':'white'}}>
                                    {item.rating}<StarOutlinedIcon fontSize='small'/>
                                </button>
                            </span>
                            <span>({item.ratedBy})</span>
                            <span  ><button className='btn btn-outline-primary' style={{'fontWeight':'600'}}>Assured By Hai</button></span>
                        </div>
                        <Card.Text style={{'color':'green','fontWeight':'600','textAlign':'center'}}>₹{item.price}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        ))}
    </>
  )
}

export default ItemList