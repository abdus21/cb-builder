import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { registration_User } from '../../redux/login/action';

const Registration = () => {
    const  Navigate = useNavigate()

  const dispatch = useDispatch()
  const [input,setInput]= useState({
      email : '',
      password : '',
      firstName : '',
      lastName: '',
      mobile : ''
  });
  const handleInput = (e)=>{
      setInput((prev)=>({
          ...prev,
          [e.target.name] : e.target.value
      }))
  }

  const handleSubmit = async (e)=>{
      e.preventDefault();
      //dispatch(login_User(input)) 
      if(input.email && input.firstName && input.lastName && input.mobile && input.password){
        dispatch(registration_User(input,setInput,Navigate));
       
      }else{
        toast.error("All fields are required")
      }
  
            
  };



  return (
    <>
    <div className="container mt-5">
     <div className="row justify-content-center">
         <div className="col-md-5">
             <div className="card shadow-sm">
                 <div className="card-body">
                     <h3>Sing Up</h3>
                     <form action="">
                         <div className="my-3">
                             <label htmlFor="">Firstname</label>
                             <input onChange={handleInput} name='firstName' value={input.firstName} type="text" className='form-control' />
                         </div>
                         <div className="my-3">
                             <label htmlFor="">Lastname</label>
                             <input onChange={handleInput} name='lastName' value={input.lastName} type="text" className='form-control' />
                         </div>
                         <div className="my-3">
                             <label htmlFor="">Email</label>
                             <input name='email' value={input.email} onChange={handleInput} type="text" className='form-control' />
                         </div>
                         <div className="my-3">
                             <label htmlFor="">Mobile</label>
                             <input name='mobile' value={input.mobile} onChange={handleInput} type="text" className='form-control' />
                         </div>
                         <div className="my-3">
                             <label htmlFor="">Password</label>
                             <input onChange={handleInput} name='password' value={input.password} type="password" className='form-control' />
                         </div>
                         <div className="my-3">
                             <input onClick={ handleSubmit} type="submit" className='btn btn-primary form-control' />
                         </div>
                     </form>
                     <div className='text-center'><Link to='/login' className='text-center text-decoration-none' >Sing In</Link></div>
                 </div>
             </div>
         </div>
     </div>
    </div>
    </> 
  )
}

export default Registration