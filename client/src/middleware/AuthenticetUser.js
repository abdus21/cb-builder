import {useSelector} from 'react-redux';
import {Navigate } from 'react-router-dom'
const AuthenticetUser = ({children})=>{

    const {isLogin} = useSelector(state=>state.getUser);
    return isLogin ? children :<Navigate to='/login'/> 

}

export default AuthenticetUser