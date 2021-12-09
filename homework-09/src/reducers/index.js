import {combineReducers} from 'redux';
import CakeReducer from './CakeReducer';
import CommentsReducer from './CommentsReducer';
import CommentReducer from './CommentReducer';

export default combineReducers({
    CakeReducer, CommentsReducer, CommentReducer
});