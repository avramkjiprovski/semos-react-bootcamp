import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {buyCake, RestockCakes} from './../actions/CakeActions';

export const Cake = (props) => {

    const dispatch = useDispatch();
    const cakes = useSelector(state => state.CakeReducer.cakes);
    const error = useSelector(state => state.CakeReducer.message);

    return (
        <div className="Cake">
            <h2>Cakes: {cakes}</h2>
            {error !== undefined && <h2>{error}</h2>}
            <button
                disabled={cakes<1}
                onClick={() => {dispatch(buyCake(1))}}>
                    Buy Cake
            </button>
            <button
                disabled={cakes<2}
                onClick={() => {dispatch(buyCake(2))}}>
                    Buy 2 Cakes
            </button>
            <button
                disabled={cakes<3}
                onClick={() => {dispatch(buyCake(3))}}>
                    Buy 3 Cakes
            </button>
            <button
                disabled={cakes>9}
                onClick={() => {dispatch(RestockCakes())}}>
                    Restock Cakes
            </button>
        </div>
    )
}