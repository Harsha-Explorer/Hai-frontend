import React from 'react'
import {Link} from 'react-router-dom';

const Pagination = ({cardsPerPage,totalCards,paginate,prevPage,nextPage}) => {
    const pageNumbers = [];
    for(let i=1; i<=Math.ceil(totalCards/cardsPerPage); i++){
        pageNumbers.push(i);
    }
    return (
        <div style={{'marginTop':'40px'}}>
            <nav>
                <ul className="pagination justify-content-center">
                    <li className='page-item'>
                        <Link className='page-link' to="#" onClick={()=>prevPage()}>Previous</Link>
                    </li>
                    {
                        pageNumbers.map((num)=>(
                            <li className='page-item' key={num}>
                                <Link to="#" className='page-link' onClick={()=>paginate(num)}>{num}</Link>
                            </li>
                        ))
                    }
                    <li className='page-item'>
                        <Link className='page-link' to="#" onClick={()=>nextPage()}>Next</Link>
                    </li>
                </ul>
            </nav>
        </div>
        
    )
}

export default Pagination