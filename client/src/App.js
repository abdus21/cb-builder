import axios from 'axios';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Logded from './components/Logded';
import AuthenticetUser from './middleware/AuthenticetUser';
import AuthRedirect from './middleware/AuthRedirect';
import Login from './pages/login/Login';
import jsCookie from 'js-cookie';
import { useDispatch } from 'react-redux';
import { get_User, isLogin } from './redux/login/action';
import Registration from './pages/registration/Registration';


function App() {

    let token = jsCookie.get('token');
    const dispatch = useDispatch()

  useEffect(()=>{
   dispatch(get_User())
  },[token])

  return (
   <>
   
   <Routes >
    <Route path='/' element={<AuthenticetUser> <Logded /> </AuthenticetUser>}/>
    <Route path='/login' element={<AuthRedirect> <Login /></AuthRedirect>} />
    <Route path='/registration' element={<AuthRedirect> <Registration /></AuthRedirect>} />
   </Routes>
   
    
   </>
  );
}

export default App;
