import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Cookie from 'js-cookie'
import { login_User } from '../../redux/login/action';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch()
    const [input,setInput]= useState({
        email : '',
        password : ''
    });
    const handleInput = (e)=>{
        setInput((prev)=>({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(login_User(input))
      
    }


  return (
    <>
       <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-md-5">
                <div className="card shadow-sm">
                    <div className="card-body">
                        <h3>Sing In</h3>
                        <form action="">
                            <div className="my-3">
                                <label htmlFor="">Email</label>
                                <input name='email' value={input.email} onChange={handleInput} type="text" className='form-control' />
                            </div>
                            <div className="my-3">
                                <label htmlFor="">Password</label>
                                <input onChange={handleInput} name='password' value={input.password} type="password" className='form-control' />
                            </div>
                            <div className="my-3">
                                <input onClick={handleSubmit} type="submit" className='btn btn-primary form-control' />
                            </div>
                        </form>
                        <div className='text-center'><Link to='/registration' className='text-center text-decoration-none' >Sing Up</Link></div>
                    </div>
                </div>
            </div>
        </div>
       </div>
    </>
  )
}

export default Login