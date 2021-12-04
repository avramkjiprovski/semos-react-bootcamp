import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {sayHello, sayGoodbye} from '../actions/index';

export const FuncComponent = () => {
    const dispatch = useDispatch();
    const pozdrav = useSelector(state => state.SayHelloReducer.greeting);
    const goodbye = useSelector(state => state.SayHelloReducer.farewell);

    useEffect( () => {
        dispatch(sayHello());
        dispatch(sayGoodbye());
    }
    , [dispatch]);

    return(
        <div>
            <h1>{pozdrav}</h1>
            <p>{goodbye}</p>
        </div>
    )
}