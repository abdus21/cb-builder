import { GET_USER, IS_LOGIN, LOG_OUT } from "./actionType";
import initialState from "./initialState";


const getUserReducer = (state = initialState,{type,payload})=>{
    switch (type) {
        
        case GET_USER:
            return {
                ...state,
                users : payload
            };
        case IS_LOGIN:
            return {
                ...state,
                isLogin : true
            };

        case LOG_OUT:
            return {
                ...state,
                isLogin : false
            }
    
        default:
           return state
    }
}

export default getUserReducer