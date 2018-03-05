import React from 'react'
import './ListSingle.css'

const ListSingle = ({complaintNumber, restaurantName, complaintDescription}) => <div className='single-link'>
    <div className='wrapper'>
        <span className='single-link-complaint-number'>{complaintNumber}</span><br/>
        <p className='single-link-complaint-footer'>Violations</p>
    </div>
    <h3 className='single-link-info-name'>{restaurantName}{' '}
        <br/><br/>{complaintDescription}</h3>
</div>

export default ListSingle