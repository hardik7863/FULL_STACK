import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassworrd] = useState("");

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log({
            email : email,
            password : password
        }
        )
    }
  return (
    <div className='w-full h-full bg-white flex rounded shadow-xl'>
        <div className='w-1/2 flex justify-center items-center'>
        <img src="https://image.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg" alt="" className='h-full'/>
        </div>
        <div className='w-1/2 flex flex-col justify-center items-center gap-5'>
        <h1 className='text-2xl font-semibold'>Welcome Back!</h1>
        {/* ONCHANGE TO GET INPUT RETRIEVES SO USING ONCHANGE AS WITH IT AT EVERY CHANGE OF WORD EVENT TRIGGERED
         OR FIRED AT EVERY CHANGE EVEN WHEN WE REMOVE IT IT ALSO FIRED*/}
        <form onSubmit={handleSubmit}>
        <input type="email" placeholder='Email' className='border border-gray-700 p-2 rounded w-3/5
        outline-none my-3' onChange={(e)=>{setEmail(e.target.value)}}/>
        <input type="password" placeholder='Password' className='border border-gray-700 p-2 rounded w-3/5
        outline-none my-3' onChange={(e)=>{setPassworrd(e.target.value)}}/>
        <button type="submit" className='p-2 w-3/5 bg-gray-700 rounded text-white font-medium active:bg-gray-800 shadow'>Login</button>
        </form>
        </div>
    </div>
  )
}

export default Login
// react render do bar hota hai es tarh se kerta hai ke console me do bar dekhh ta hai
//humne dekha ke ek function or ek state dono independent hai per 
//jab bhi count state ho update ker rhe hai toh function bhi print ho rha hai 
//use state pura rerender kerta hai to avoid this we will use useEffect hook