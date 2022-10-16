import { GET_USER, IS_LOGIN } from "./actionType";
import axios from "axios";
import jsCookie from "js-cookie";

export const isLogin = (payload)=>({
    type : IS_LOGIN,
})

export const getUser = (payload)=>({
    type : GET_USER,
    payload : payload
})


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

}
export const get_User = (data)=> async (dispatch)=>{
    let token = jsCookie.get('token');
    try{
        axios.get(`http://localhost:5000/api/v1/cb/me`,{
          headers : {
            'Authorization' : `Bearer ${token}`
          }
        })
        .then(res=>{
          dispatch(isLogin());
        })
        .catch(err=>{
          console.log(err);
        })
      }catch(err){
        console.log(err);
      }

}


