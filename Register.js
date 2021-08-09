import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify';
const Register = ({registerUser}) => {
    const [email , setEmail]=useState('')
    const [password , setPassword]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
      
        if(!email || !password){
            return toast.error('Please Filled in all Fields')
        }
        if(password.length<6){
            return toast.error('Password must have more than 6 letters')
        }
        const data ={
            email,
            password,
        }
        registerUser(data)
        console.log(`login ${JSON.stringify(data)}`)

  }
    return (
        
        <div className='col-md-5 p-4 mx-2 border'> 
        <h1 className='text-primary text-center my-2'>Register</h1>
        <form onSubmit={handleSubmit}> 
        <div className='form-group'>
              <input type='email' placeholder='Email' name='Email' className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>

            <div className='form-group'>
              <input type='password' placeholder='Password' name='password' className='form-control' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>

            <div className='form-group'>
              <button type='submit' className='btn btn-block btn-primary'>Register</button>
            </div>
          </form>
          </div>
    )
}

export default Register
