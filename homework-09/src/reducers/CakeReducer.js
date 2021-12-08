import { BUY_CAKE } from "../constants/CakeConstants"
import { RESTOCK_CAKES } from "../constants/CakeConstants"

const initialState ={
    cakes: 10,
    message: undefined
}

const CakeReducer = (state = initialState, actions) => {
    switch(actions.type){
        case "BUY_CAKE":
            if(state.cakes - actions.payload < 0){
                return {
                    ...state,
                    message: `Not enough cakes, only ${state.cakes} cakes left`
                }
            }else{
                return {
                    ...state,
                    cakes: state.cakes - actions.payload
                }
            }


        case "RESTOCK_CAKES":
            return {
                ...state,
                cakes: actions.payload
            }
        default:
            return state
    }

}


export default CakeReducer;