import React from 'react';
import PropTypes from 'prop-types';

export const Popup = ({zatvoriPopup, selektiranaSlika}) => {
    return (
        <div className="Popup">
            <button
                className="Popup__close"
                onClick={zatvoriPopup}
            >&times;</button>
            <div className="Popup-container">
                <img 
                    src={selektiranaSlika}
                    alt={"Slika"}
                />
            </div>
        </div>
    )
}

Popup.propTypes ={
    selektiranaSlika: PropTypes.string,
    zatvoriPopup: PropTypes.func
}