import React from 'react'
import "../App.css";
import ShowContentDetails from './ShowContentDetails';


const ShowContent = ({content}) => {
    const general = Object.entries(content.Specifications.general).map(([key,value])=>(
        <div className='d-flex' style={{'marginTop':'6px'}}><h6>{key}:</h6>&nbsp; &nbsp;{value}</div>
    ))
    const description = content.description
    return (
        <>
            <ShowContentDetails content={general} contentLen={5} heading={"General"}/>
            <ShowContentDetails content={description} contentLen={100} heading={"Description"}/>
        </>

    )
}

export default ShowContent
