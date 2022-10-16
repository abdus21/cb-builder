import { IS_LOGIN } from "./actionType";
import initialState from "./initialState";


const getUserReducer = (state = initialState,{type,pyload})=>{
    switch (type) {
        
        case IS_LOGIN:
            return {
                ...state,
                isLogin : true
            }
    
        default:
           return state
    }
}

export default getUserReducer