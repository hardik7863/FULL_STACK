// import React from "react";
// const Child =({count,setCount})=>{
//     return(
//         <div className="text-2xl bg-green-500 p-5 m-5">
//             Child 1

//       <p className="text-xl text-white">The value of count is :{count}</p>
//       <button className="bg-slate-200 p-2 m-4 active:bg-slate-400 active:shadow-inner" onClick={()=>{
//         setCount(count-1)
//       }}>Dec (-)</button>
//        <button className="bg-slate-200 p-2 m-4 active:bg-slate-400 active:shadow-inner" onClick={()=>{
//         setCount(count+1)
//       }}>Inc (+)</button>
//         </div>
//     )
// }
// export default Child

import React from 'react'
import Child1 from './Child1'
const Child = ({count,setCount}) => {
  return (
    <div className='bg-orange-300 w-4/5 h-4/5 text-3xl flex justify-center items-center'>Child
   Child
   <Child1 count={count} setCount={setCount} />
    </div>
  )
}

export default Child