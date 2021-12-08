import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {buyCake, RestockCakes} from './../actions/CakeActions';

export const Cake = (props) => {

    const dispatch = useDispatch();
    const cakes = useSelector(state => state.CakeReducer.cakes);
    const error = useSelector(state => state.CakeReducer.message);
    
    const [quantity, setQuantity] = React.useState(0);


    return (
        <div className="Cake">
            <h2>Cakes: {cakes}</h2>
            <label>Quantity:</label><br/>
            <input onChange={
                (e) => {
                    setQuantity(e.target.value);
                }
            } type="text" value={quantity}/><br/><br/>
            <button
                disabled={cakes - quantity < 0}
                onClick={() => {dispatch(buyCake(quantity))}}>
                    Buy Cakes
            </button>
            <button
                disabled={cakes + quantity > 10}
                onClick={() => {dispatch(RestockCakes(quantity))}}>
                    Restock Cakes
            </button>
        </div>
    )
}