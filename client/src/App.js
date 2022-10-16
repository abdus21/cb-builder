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
import { isLogin } from './redux/login/action';


function App() {

    let token = jsCookie.get('token');
    const dispatch = useDispatch()

  useEffect(()=>{
    try{
      axios.get(`http://localhost:5000/api/v1/cb/me`,{
        headers : {
          'Authorization' : `Bearer ${token}`
        }
      })
      .then(res=>{
        dispatch(isLogin())
        console.log(res.data);
      })
      .catch(err=>{
        console.log(err);
      })
    }catch(err){
      console.log(err);
    }
  },[token])

  return (
   <>
   
   <Routes >
    <Route path='/' element={<AuthenticetUser> <Logded /> </AuthenticetUser>}/>
    <Route path='/login' element={<AuthRedirect> <Login /></AuthRedirect>} />
   </Routes>
   
    
   </>
  );
}

export default App;
