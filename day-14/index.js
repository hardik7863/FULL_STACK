// console.log(a); 
// console.log(sum());

//Hoisting: variable or function is accessed before declaring

//Event Loop , Timers Function, call back hell , promise,
//Async Await, constructor,classes
// var a=20; //undefined 
// let a=20; let will give error as a is not intialised
// let b=1000;

// function sum() {
//     let x=200;
//     let y=300;
//     function add(){
//        return x+y;
//     }
//     return add();
// }

// let c=100;

// console.log(a,b,c);
// sum()
// function call nhi hoga toh execution context nhi banega
//voh uhe padha rahega variable execution context me 

// IQ me aisa puch te hai 
// var supports hoisting but let and const hoisting support nhi kerta hai 
//actually aisa nhi hota hai entery level pe sab yehi samhj te hai 
//let and const bhi support hoisting kerta hai 
//E6 version me jab let and const aaye toh yeh variable environment ke andhar 
// ek or box banaya jesko bol te hai temporal dead zone 
// jab tak enko value asign nhi hoge tab tak yeh access nhi ker sakte hai

// var sum=function() {
//         let x=200;
//         let y=300;
//         function add(){
//            return x+y;
//         }
//         return add();
//     }
    //kisame konsa error aa rha hai important hai 

//  Timer function()

//  let timeout= setTimeout(()=>{
//     console.log("hello Techno");
        
// },5000); //1 sec =10000
// //after  5 sec it will print hello techno


// let interval =setInterval(()=>{
//     console.log(Math.random());
        
//  },2000);//after every 2 sec it will print  

//     document.getElementById("button").addEventListener("click",function(){
//        console.log("Stop Interval buton clicked");
//        clearInterval(interval);
       
//     })
//     document.getElementById("timeout").addEventListener("click",function () {
//         console.log("Stop Timeout button clicked");
//         clearTimeout(timeout);
        
//     })

//Async js

// let a=20;
// let b=30;
// console.log(a+b);

// setTimeout(()=>{
//     console.log("Hello Techno");
    
// },2000);

// console.log(a);
// console.log(b);

//Timeout do not enter directly to the call stack since it will take time to execute
// hence it is store in worker thread then at right time it is send to the call stack
// through Task queue 
//whole process is caleed event loop

//Promises

//call backs can be used for tackling async function

// function step1(callback){
//    setTimeout(()=>{
//     console.log("Step1 completed");
//     callback();
//    },1000)
//     }
//     function step2(callback){
//         setTimeout(()=>{
//          console.log("Step1 completed");
//          callback();
//         },1000)
//          }
//          function step3(callback){
//             setTimeout(()=>{
//              console.log("Step1 completed");
//              callback();
//             },1000)}

// //call back hell :-not prefered    Soln:-Promises
// step1(()=>{
//     step2(()=>{
//         step3(()=>{
//             console.log("All Steps completed");
            
//         })
//     })
// })

//Promises : it is nothing but just a object which contain multiple value is contained
//Promise i s the constructor function

// function fetchData(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             let data ={
//                 firstName:"Hardik",
//                 LastName:"BAtwal"
//             };
//             return resolve(data);
//         },2000)
 
//     }
// )
// }



// function fetchData(){
//         return new Promise((resolve, reject)=>{
//             setTimeout(()=>{
//            try{
           
//                             let data ={
//                                 firstName:"Hardik",
//                                 LastName:"BAtwal"
//                             };
//                             return resolve(data);
//                         }
//             catch(error){
//             reject(error);
//             }
//             },2000)
     
//         }
//     )
//     }
// let fetchedData=fetchData();
// console.log(fetchedData);

// //Promise States -- Pending ,fulfilled , rejected
// //Pending --> fulfilled
// //Pending --> reject

// //then and catch are the functions can be used to retrive data from promise
// fetchedData
// .then((data)=>{
// console.log(data);

// }
// )//pending to success then if you want to go to another website we use then
// .catch((error)=>{
// console.log(error);

// });// 404 error showcase we use catch

//https://fakestoreapi.com/products

// function fetchData(){
//     let data=fetch("https://fakestoreapi.com/products");
    // console.log("Next step after Fetching");
    
    // return data;
//bacground me promise work ker rha hai
// }
// let fetchedData = fetchData();
// console.log(fetchedData);
// fetchedData
// .then((res)=>{
//    console.log(res.json());
//    //if we dont use json then we will get one promise and one response if we use we get two promise
// })
// .catch((error)=>{
//     console.log(error);
    
// })

// let fetchedData = fetchData();
// console.log(fetchedData);
// fetchedData
// .then((res)=>{
//    return res.json();
   
// })
// .then((data)=>{
//   console.log(data);
  
    
// })
// .catch((error)=>{
//     console.log(error);
    
// })
document.getElementById("product-button").addEventListener("click",function(){
    fetch("https://fakestoreapi.com/products")
    .then((res)=>res.json())
    .then((data)=>{
        data.forEach((item) => {
            console.log(item.image);
            let newDiv = document.createElement("div");
            newDiv.innerHTML = `<img style='width : 100px' src=${item.image} alt='Product-Image' ><h3>${item.title}</h3><p>${item.price}</p>`;
            let myDiv = document.getElementById("products");
            myDiv.appendChild(newDiv);
        });
    })
    .catch((error)=>{
        console.log(error);
    })
});
