import React, { createContext, useState } from 'react'
//Create Context is a function not hook as it do not have use keyword
const CountContext=createContext();
// CountContext act as object and provide Provider function



export const CountProvider = (children) => {
    const [countValue, setCountValue]=useState(0);
  return (
    <CountContext.Provider value={{countValue,setCountValue}}>
        {children}

    </CountContext.Provider>
  )
}

export default CountProvider