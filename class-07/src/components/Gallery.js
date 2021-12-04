import React from 'react';
import PropTypes from 'prop-types';
import {Popup} from './Popup';

export const Gallery = ({listOfPhotos, openPhoto, selectedPhoto, closePhoto}) => {
    console.log(listOfPhotos);
    return(
        <div className="Gallery">
            {
                listOfPhotos.slice(0, 50).map(photo => {
                    return(
                        <div
                            key={photo.id}
                            className="image-holder"
                            onClick={() => openPhoto(photo.url)}
                        >
                            <img 
                                src={photo.thumbnailUrl}
                                alt={photo.title}
                            />

                        </div>
                    )
                                
                })
            }
            {
                selectedPhoto !== '' &&
                <Popup 
                    selektiranaSlika={selectedPhoto}
                    zatvoriPopup={closePhoto}
                />
            }
        </div>
    )
}



Gallery.propTypes ={
    listOfPhotos: PropTypes.arrayOf(PropTypes.object).isRequired,
    openPhoto: PropTypes.func.isRequired,
    selectedPhoto: PropTypes.string,
    closePhoto: PropTypes.func.isRequired
}