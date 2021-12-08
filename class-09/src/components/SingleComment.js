import React from 'react';
import { useParams } from 'react-router';

export const SingleComment = () => {

    const {id} = useParams();

    return (
        <div id="single-comment">
            <h2>
                Single Comment ID: {id}
            </h2>
        </div>
    )
}
