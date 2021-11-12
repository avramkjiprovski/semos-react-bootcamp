import React from 'react';
import PropTypes from 'prop-types';


export const Hotel = (props) => {

    console.log(props);
    return (
        <div>
            <h2>Hotel: {props.name}</h2>
            <p>
                Capacity/Reservations: 
                {props.capacity}/
                {props.reservations}
            </p>
            {
                props.vacancy ? 
                <h2>We have rooms</h2> :
                <h2>Sorry we're full!</h2>
            }
        </div>
    )
}


Hotel.propTypes = {
    name: PropTypes.string.isRequired,
    capacity: PropTypes.number.isRequired,
    reservations: PropTypes.number,
    vacancy: PropTypes.bool
}