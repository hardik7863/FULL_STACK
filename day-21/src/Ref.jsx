import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react'
 
const Ref = () => {
    const inputRef=useRef(20);
    
    useEffect(()=>{

      // console.log(inputRef.current.value);
      inputRef.current.focus();
    },[]) 
    
  return (
    <div className='p-8'>
      <input ref={inputRef}type="text" placeholder='Enter the name' />
      <button onClick={()=>{
        console.log(inputRef.current.value)
      }}>Show ref value</button>
    </div>
  )
}

export default Ref
// control component which are controlled by usestate
//uncontrol component can be controlled other than use state may be through useRef