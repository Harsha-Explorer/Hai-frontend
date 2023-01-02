import React,{useState} from 'react'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import ShowContent from './ShowContent';


const ItemContent = () => {
    const [itemDetails,setItemDetails] = useState(
    {id:'1',name:'Canon PIXMA G3000 All-in-One WiFi Ink Tank Colour Printer with 2 Additional Black Ink Bottles'
    ,ratedBy:"120",rating:"3.5",price:"3200",description:"• This HP printer is great for printing, scanning and copying your documents. With the voice command feature, you can use Alexa and Google Home to print your documents out. and also with audio controlled assistant"
    ,Specifications:{general:{
        printingMethod:"Inkjet",Type:'Multi-function',ModelName:'DeskJet 2723',PrintingOutput:'Color'
    ,funtions:'Print,Copy,Scan',Brand:'HP',RefillType:'Ink Cartridge',IdealUsage:'Home & Small Office'
    }},aboutTheItem:'Print Speed (A4): 8.8/5.0 (Mono/Colour) images per minute; Prints a 10.16 x 15.24cm borderless photo in 60s;4800x1200 dpi, Borderless Printing. CIS Flatbed Scanner, up to 600x1200 dpi, up to 21 copies'
    })
  return (
    <>
        <h3 className='text-center mx-3 mb-0'>{itemDetails.name}</h3>
        <div className='d-flex justify-content-around'>
            <div className='d-flex'>
                <span>
                    <button className="btn btn-outline-primary d-flex" id="button-addon2" style={{'textAlign':'left','backgroundColor':'green','color':'white'}}>
                        {itemDetails.rating}<div><StarOutlinedIcon fontSize='small'/></div>
                    </button>
                </span>
                <span><button className="btn d-flex">{itemDetails.ratedBy} Ratings</button></span>
                
            </div> 
            <div className='d-flex'>
                <button className="btn btn-outline-primary" style={{'fontWeight':'600','justifyContent':'right'}}>Assured By Hai</button>
            </div> 
        </div>
        <div className='specifications' style={{'marginTop':'40px'}}>
            <h4 className='text-start mx-3 mb-0 d-flex'><h4 style={{'color':'green'}}>Price: &nbsp;</h4>₹{itemDetails.price}</h4>
        </div> 
        <div className='specifications' style={{'marginTop':'40px'}}>
            <h5>Specifications:</h5>
            <ShowContent content={itemDetails}/>
            {/* <ShowContent content={itemDetails.description} contentLen={30}/> */}
        </div>
    </>
  )
}

export default ItemContent