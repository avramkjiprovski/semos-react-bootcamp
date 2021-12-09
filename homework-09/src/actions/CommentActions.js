import { FETCH_COMMENT_FAIL, FETCH_COMMENT_SUCCESS } from './../constants/CommentConstants';


export const fetchCommentSuccess = (comment) => {
    return {
        type: FETCH_COMMENT_SUCCESS,
        payload: comment
    }
}

export const fetchCommentFail = (err) => {
    return {
        type: FETCH_COMMENT_FAIL,
        payload: err
    }
}



export const fetchCommentRequest = (id) => {
    return dispatch => {
        fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
            .then(res => res.json())
            .then(json => dispatch(fetchCommentSuccess(json)))
            .catch(err => dispatch(fetchCommentFail(err)));
    }
}