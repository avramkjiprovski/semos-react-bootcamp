import React from 'react';
import PropTypes from 'prop-types';


export const FruitList = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Fruit List</h1>
            
                <ul>
                    {
                        props.listaNaOvosje.map((fruit, index) => {
                            return <li key={index}>{fruit}</li>
                        })
                    }
                </ul>  
        </div>
    )
}

FruitList.propTypes ={
    listaNaOvosje: PropTypes.array.isRequired
}