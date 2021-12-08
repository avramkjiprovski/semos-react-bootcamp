import {BUY_CAKE} from './../constants/CakeConstants';
import { RESTOCK_CAKES } from './../constants/CakeConstants';

export const buyCake = (numOfCakes) => {
    return {
        type: BUY_CAKE,
        payload: numOfCakes
    };
};

export const RestockCakes = () => {
    return {
        type: RESTOCK_CAKES,
        payload: 10
    };
}