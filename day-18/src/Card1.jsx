import React from 'react'
import vec from "./assets/1.jpeg"

const Card1 = ({heading,classname,image,description}) => {
    // console.log(props);
    // destructuring by not using "props" and directly using the variables
    
  return (
    <div className={`p-2 m-2 text-center ${classname} shadow-xl rounded-lg`}>
      <img src={image} alt="" className='w-48'/>
        <h1 className='text-2xl'>{heading}</h1>
        <p>{description}</p>
    </div>
  )
}


export default Card1