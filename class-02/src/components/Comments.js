import React from 'react';
import PropTypes from 'prop-types';

export function Comments(props) {
    console.log(props);
    return (
        <div className="comments">
            <h2>Comments</h2>
            {
                props.listOfComments.map((comment, index) => {
                    return (
                        <div key={index}>
                            <p>Date: {comment.date}</p>
                            <p>Comment: {comment.content}</p>
                            <p>Author: {comment.author}</p>
                        </div>
                    )
                })
            }
        </div>
    );
}


Comments.propTypes = {
    listOfComments: PropTypes.arrayOf(PropTypes.object).isRequired,
}