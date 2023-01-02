import React,{useState} from 'react'
import '../App.css'

const ShowContentDetails = ({content,contentLen,heading}) => {
    const [showMore,setShowMore]=useState(false);
    console.log(content)
    return (
        <>
            <div >
                <h5 style={{'marginTop':'25px'}}>{heading}</h5>
                {
                    showMore ? content : content.slice(0,contentLen)
                }
            </div>
            <div>
                <button className='btn btn-outline-info' onClick={()=> setShowMore(!showMore)}>
                    {showMore ? "Show less" : "Show more"}
                </button>
            </div>
        </>
    )
}

export default ShowContentDetails
