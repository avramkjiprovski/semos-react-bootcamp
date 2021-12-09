import { FETCH_COMMENTS_FAIL, FETCH_COMMENTS_SUCCESS } from './../constants/CommentsConstants';

export const fetchCommentsSuccess = (comments) => {
    return {
        type: FETCH_COMMENTS_SUCCESS,
        payload: comments
    }
}

export const fetchCommentsFail = (err) => {
    return {
        type: FETCH_COMMENTS_FAIL,
        payload: err
    }
}


export const fetchCommentsRequest = () => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(json => dispatch(fetchCommentsSuccess(json)))
            .catch(err => dispatch(fetchCommentsFail(err)));
    }
}

