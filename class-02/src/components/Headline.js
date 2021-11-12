import React from 'react';
import PropTypes from 'prop-types';


export const Headline = (props) => {
    
    console.log(props);

    return (
        <div id="headline">
            <p>Headline</p>
            <p>Cifra: {props.cifra}</p>
            <p>Datum: {props.datum}</p>
            <p>Title: {props.naslov.title}</p>
            <p>Author: {props.naslov.author}</p>
            <p>Content: {props.naslov.content}</p>
        </div>
    )
}

Headline.propTypes = {
    cifra: PropTypes.number,
    datum: PropTypes.string.isRequired,
    naslov: PropTypes.object
}