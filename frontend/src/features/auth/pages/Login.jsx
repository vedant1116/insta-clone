import React from 'react'
import { useState} from 'react'
import '../style/form.scss'
import axios from 'axios'
const Login = () => {
   const [username, setusername] = useState('')
   const [password, setpassword] = useState('')
    async function submitHandler(e){
        e.preventDefault()

        axios.post('http://localhost:3000/api/auth/login',{
            username,
            password
        },{
        withCredentials:true
        }).then((res)=>{
        console.log(res.data); 
        })
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
