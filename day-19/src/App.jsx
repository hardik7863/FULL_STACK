  // use effect can also give error to avoid such scenario we make it dependent by passing dependency array
  //sirf ek bar he chalana ho toh empty array pass kerdo 
  //otherwise kes pe dependent bna ho toh usko array me pass kerdo


import { useContext,useEffect, useState } from 'react'
import Login from './Login'
import Child from './Child';
import { CountContext } from "./context/CountProvider"
function App() {
//useState
  const [count, setCount] = useState(0);
  const [productId,setProductId]=useState(1);
  const { setCountValue } = useContext(CountContext)
  

  // const fetchData =()=>{
  //   console.log("Hello Techno from fetch Data Function");
    
  // }

  const fetchData= async (id)=>{
    try{
    const response=await fetch(`https://fakestoreapi.com/products/${id}`)
    const data=await Response.json();
    console.log(data);
    }catch(error){
      console.log(error);
      
    }
  }
  // useEffect(()=>{
  //   fetchData(productId)
  //   // console.log(count);
  //   // setCount(prev=>prev+1)
    
  // },[productId])
  // use effect can also give error to avoid such scenario we make it dependent by passing dependency array
  //sirf ek bar he chalana ho toh empty array pass kerdo 
  //otherwise kes pe dependent bna ho toh usko array me pass kerdo
  return (
    // <div className='w-full h-screen flex flex-col gap-7 justify-center items-centertext-center text-white'>
    //   <button className='border-2 p-2 px-4 border-gray-200 active:bg-gray-700 active:text-gray-200
    //   ' onClick={()=>{setCount(count+1)}}>+Count</button>
    //   <p className='"text-2xl'>The value of Count is:{count}</p>
    //   <p className='"text-2xl'>The value of ProductId is:{productId}</p>
     
    //   <button className='border-2 p-2 px-4 border-gray-200 active:bg-gray-700 active:text-gray-200
    //   ' onClick={()=>{setProductId(productId+1)}}>+ProductId</button>

    //   {/* <Login/> */}
      

    // </div>

    <div className='w-full h-screen flex flex-col justify-center items-center text-center gap-4'>
      <p className="text-3xl text-white">App</p>
      <button className="p-2 border-2 text-gray-200 active:bg-gray-200 active:text-gray-700" onClick={()=>{setCountValue((prev)=>prev+1)}}>Update Count Value</button>
      <Child count={count} setCount={setCount} />
    </div>
  )
}

export default App
