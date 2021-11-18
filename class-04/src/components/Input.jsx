import React from 'react';
import PropTypes from 'prop-types';

export const Input = ({
    type,
    placeholder,
    value,
    onChange,
    name
}) => {

    return (
        <p>
            <input 
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </p>
    );
}


Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    name: PropTypes.string,
    onChange: PropTypes.func.isRequired,


}