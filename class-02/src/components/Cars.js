import React from "react";
import PropTypes from "prop-types";

export function Cars(props) {
    console.log(props);
    return (
        <div>
            <h1>Cars</h1>
            <ul>
                {
                    props.cars.map((car, index) => {
                        return (
                            <li key={index}>
                                <span>{car.brand}</span> &nbsp;
                                <span>{car.model}</span> &nbsp;
                                <span>{car.year}</span> &nbsp;
                                <span>{car.tablici.oznaka}</span> &nbsp;
                            </li> 
                        )
                    })
                }
            </ul>
        </div>
    )
}


Cars.propTypes = {
    cars: PropTypes.arrayOf(PropTypes.object).isRequired
}