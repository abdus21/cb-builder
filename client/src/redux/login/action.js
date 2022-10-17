import { GET_USER, IS_LOGIN, LOG_OUT } from "./actionType";
import axios from "axios";
import jsCookie from "js-cookie";
import toast from 'react-hot-toast';

export const isLogin = (payload)=>({
    type : IS_LOGIN,
})

export const logOut = (payload)=>({
    type : LOG_OUT,
});

export const getUser = (payload)=>({
    type : GET_USER,
    payload : payload
});


export const login_User = (data)=> async (dispatch)=>{
    try{

        await axios.post(`http://localhost:5000/api/v1/cb/login`,data)
        .then(res=>{
            jsCookie.set('token',res.data.token);
           
            dispatch(isLogin());

        })
        .catch(err=>{
            console.log(err);
        })
    }catch(err){
        console.log(err);
    }

};


export const checkToken = (data)=> async (dispatch)=>{
    let token = jsCookie.get('token');
    try{
        axios.get(`http://localhost:5000/api/v1/cb/me`,{
          headers : {
            'Authorization' : `Bearer ${token}`
          }
        })
        .then(res=>{
          dispatch(isLogin());
          dispatch(getUser(res.data));
        })
        .catch(err=>{
          console.log(err);
        })
      }catch(err){
        console.log(err);
      }

};

export const updateUser = (data)=> async (dispatch)=>{
    let token = jsCookie.get('token');
    try{
        axios.patch(`http://localhost:5000/api/v1/cb/updateProfile`,{
          headers : {
            'Authorization' : `Bearer ${token}`
          }
        })
        .then(res=>{
          dispatch(isLogin());
          dispatch(getUser(res.data));
        })
        .catch(err=>{
          console.log(err);
        })
      }catch(err){
        console.log(err);
      }

};



export const registration_User = (data,setInput,Navigate)=> async (dispatch)=>{

  try{
    await axios.post(`http://localhost:5000/api/v1/cb/registration`,data)
     .then(res=>{
        toast.success('Registration Successful')
       setInput({
        email : '',
        password : '',
        firstName : '',
        lastName: '',
        mobile : ''
       });
       Navigate('/login')
     })
     .catch(err=>{
      toast.success(err) 
       console.log(err);
     })
   }catch(err){
    toast.success(err)  
     console.log(err);
   } 

}


