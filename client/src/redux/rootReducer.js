import {combineReducers} from 'redux'
import getUserReducer from './login/getUserReducer'


const rootReducer = combineReducers({
    getUser : getUserReducer
})

export default rootReducer