import {FETCH_COMMENT_FAIL, FETCH_COMMENT_SUCCESS} from './../constants/CommentConstants';

const initialState = {
    comment: {},
    error: undefined
}

const CommentReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_COMMENT_SUCCESS:
            return {
                ...state,
                comment: action.payload
            }

        case FETCH_COMMENT_FAIL:
            return {
                ...state,
                error: action.payload
            }
        
        default: return state;
    }

}


export default CommentReducer;