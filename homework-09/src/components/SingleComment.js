import React, {useEffect} from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {fetchCommentRequest} from './../actions/CommentActions'

export const SingleComment = () => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const comment = useSelector(state => state.CommentReducer.comment)


    useEffect ( () => {
        dispatch(fetchCommentRequest(id));
    }, [dispatch]);

    

    return (
        <div id="single-comment">
            <h2>
                Single Comment ID: {id}
            </h2>
            <p>
                comment: {
                    comment.body
                }
            </p>
        </div>
    )
}
