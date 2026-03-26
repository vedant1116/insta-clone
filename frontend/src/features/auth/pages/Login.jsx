import React from 'react'
import { useState} from 'react'
import '../style/form.scss'
import axios from 'axios'
import {useAuth} from '../hooks/useAuth'
import { useNavigate } from 'react-router'

const Login = () => {
   const [username, setusername] = useState('')
   const [password, setpassword] = useState('')


   const {loading,handleLogin}=useAuth()
   
      const navigate=useNavigate()
    async function submitHandler(e){
        e.preventDefault()
       
         handleLogin(username,password).then(res=>{
            console.log(res);
            navigate("/")
            
        })
       
    }

    if(loading){
        return (<main>
            <h1>Loading.....</h1>
        </main>)
    }

  return (
   <main>
   
    <div className="form-container">    
        <h1>Login</h1>
        <form onSubmit={submitHandler}>
            <input onInput={(e)=>{
                setusername(e.target.value)
            }} 
            type="text"
             name="username" 
             placeholder="username" />
            <input 
            onInput={(e)=>{
                setpassword(e.target.value)
            }}
            type="password"
            name="password " 
            placeholder="password" />
            <button type='submit'>Login</button>
        </form>
    </div>
   </main>
  )
}

export default Login
