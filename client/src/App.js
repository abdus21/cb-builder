import axios from 'axios';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthenticetUser from './middleware/AuthenticetUser';
import AuthRedirect from './middleware/AuthRedirect';
import Login from './pages/login/Login';
import jsCookie from 'js-cookie';
import { useDispatch } from 'react-redux';
import { checkToken, isLogin } from './redux/login/action';
import Registration from './pages/registration/Registration';
import toast, { Toaster } from 'react-hot-toast';
import Home from './pages/home/Home';
import TopNav from './components/TopNav/TopNav';
import TemplateOne from './components/Resume/TemplateOne';



function App() {

    let token = jsCookie.get('token');
    const dispatch = useDispatch()

  useEffect(()=>{
   dispatch(checkToken())
  },[token])

  return (
   <>
   
   <Toaster
    position="bottom-center"
    reverseOrder={false}
  />

   <Routes >
    <Route path='/' element={<AuthenticetUser> <Home /> </AuthenticetUser>}/>
    <Route path='/registration' element={<AuthRedirect> <Registration /></AuthRedirect>} />
    <Route path='/login' element={<AuthRedirect> <Login /></AuthRedirect>} />
    <Route path='/template-one' element={<AuthenticetUser><TemplateOne /></AuthenticetUser> } />
   </Routes>
   
    
   </>
  );
}

export default App;
