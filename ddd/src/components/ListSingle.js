import React from 'react'
import './ListSingle.css'

const ListSingle = ({complaintNumber, restaurantName, restaurantCuisine, restaurantBorough, restaurantZipCode}) => {
    return (
        <div className='random-restaurant single-link'>
            <div className='wrapper'>
                <span className='single-link-complaint-number'>{complaintNumber}</span><br/>
                <p className='single-link-complaint-footer'>Complaints</p>
            </div>
            <h3 className='single-link-info-name'>{restaurantName}{' '}
             <br/><br/>{restaurantCuisine}</h3>
            <p className='single-link-info-location'>{restaurantBorough}{' '}{restaurantZipCode}
            </p>
        </div>
    )
}

export default ListSingle