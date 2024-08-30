// // import { useState } from 'react'
// // import './App.css'
// import Home from "./Home.jsx"

// import Home from "./Home";
import Card1 from "./Card1";
import { useState } from "react";
import ProductImage1 from "./assets/1.jpeg"
import ProductImage2 from "./assets/2.jpeg"
import ProductImage3 from "./assets/3.jpeg"
import ProductImage4 from "./assets/4.jpeg"
import Child from "./Child"

// function App() {
//   // const [count, setCount] = useState(0)

//   return (
//     <>
//       {/* <h1>Hello Techno</h1> */}
//       <Home />
//     </>
//   )
// }

// export default App

// export default function App() {
//   return (
//     <h1 style={{backgroundColor:"greenyellow"}}>
//       Hello world!
//     </h1>
//   )
// }

const data = [
  {
    heading : "Card 1",
    description : "Card 1 Description",
    classname : "bg-slate-300",
    image : ProductImage1
  },
  {
    heading : "Card 2",
    description : "Card 2 Description",
    classname : "bg-green-300",
    image : ProductImage2
  },
  {
    heading : "Card 3",
    description : "Card 3 Description",
    classname : "bg-red-300",
    image : ProductImage3
  },
  {
    heading : "Card 4",
    description : "Card 4 Description",
    classname : "bg-blue-300",
    image : ProductImage4
  },
  {
    heading : "Card 5",
    description : "Card 5 Description",
    classname : "bg-cyan-300",
    image : ProductImage2
  },
  {
    heading : "Card 6",
    description : "Card 6 Description",
    classname : "bg-purple-300",
    image : ProductImage3
  },
  {
    heading : "Card 7",
    description : "Card 7 Description",
    classname : "bg-orange-300",
    image : ProductImage4
  },
  {
    heading : "Card 8",
    description : "Card 8 Description",
    classname : "bg-sky-300",
    image : ProductImage1
  },
]
export default function App() {
  const [count,setCount]=useState(0)
  // let count=0;
  // console.log(count);

  
  return (
    // <div className="grid grid-cols-4 gap-3 text-center">
    <div className="text-center">
      {/* <Home/> */}
      {/* <Card1 image={vec1} heading="C1 heading" description="This is a C1 description" classname="bg-emerald-500"/>
      <Card1 image={vec2} heading="C1 heading" description="This is a C1 description" classname="bg-red-600"/>
      <Card1 image={vec3} heading="C1 heading" description="This is a C1 description" classname="bg-amber-400"/>
      <Card1 image={vec4} heading="C1 heading" description="This is a C1 description" classname="bg-cyan-500"/> */}

      <p className="text-4xl font font-medium text-white">The value of count is :{count}</p>
      <Child count={count} setCount={setCount}/>
   

     { data.map((item,i)=>{
        return(
          <Card1 heading={item.heading} classname={item.classname} description={item.description} image={item.image}/>
        )
      })
      }
       <p className="text-4xl font font-medium text-white">The value of count is :{count}</p>
    </div>
  )
}
// parents sey data child me bhej or display ker diya 
//child se data update kiya parent me bhi display ho rha hai