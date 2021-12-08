import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCommentsRequest} from './../actions/CommentsActions'
import { Link } from 'react-router-dom';

export const Comments = () =>{

    const dispatch = useDispatch();
    const comments = useSelector(state => state.CommentsReducer.comments);

    useEffect( () => {
        dispatch(fetchCommentsRequest())
    }, [dispatch]);

    return (
        <div className="comments">
            <h2>Comments {comments.length}</h2>
            <ul>
                {comments.map(comment=>{
                    return(
                        <li key={comment.id}>
                            <span>
                                {comment.name}
                            </span>
                            <span>
                                <Link to={`/comment/${comment.id}`}>
                                    Details...
                                </Link> 
                            </span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}