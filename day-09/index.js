// Conditional Statements
//If else ,switch ,ternary operators

//functions
//array,object
//loops

// let count =20;

// if(count==20){
//     console.log(`The count is ${count}`);
//     }
// else if (count>20) {
//     console.log("the count is less than 20");
    
// }
// else{
//     console.log("The count is more than 20");
    
// }

// let firstNumber=prompt("enter the first Number");
// console.log(firstNumber);

// prompt is not define in node js

//Prompt the user to enter their username and password.
//if username is "admin" and password is 123 in numbers
//if both condition is true then display 'Auth Successful" else "Auth Failed"

// let username=prompt("enter the username");
// console.log(username);

// let password=prompt("enter the password");
// console.log(password);
// //prompt takes string as input for numbers we need to typecaste it
// // if (username=="admin" && password==Number("123"))
// if (username==="admin" && password===Number(123)) {
//     console.log("Auth Successful");
// }
// else{
//     console.log("Auth Failed");
    
// }

//nested if else

// if(username==="admin")
// {
//     if (password===123) {
//         console.log("Auth Successful");
        
//     }
//     else{
//         console.log("Auth Failed");
    
//     }
// }
// else{
//     console.log("Auth Failed");
    
// }

//ternary operator

// let count=20;
// // count ===20 ? console.log("the count is 20"): console.log("The count is not 20");

// count ===20 ? console.log("the count is 20"): count>20?console.log("The count is greator than 20")
// : console.log("The count is not 20");

// let username=prompt("enter the username");
// let password=+prompt("enter the password"); //another way of typecasting

// (username==="admin" && password===123)? console.log("Auth Successful"):console.log("Auth Failed");

//Switch CASES

// let Dayname;
// let Daynumber=3;

// switch (Daynumber) {
//     case 1:
//         console.log("Monday");
        
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thrusday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//          console.log("Sunday");
//          break;
        

//     default: console.log("invalid Day number");
    
//         break;
//         //if we dont use break for eg if wednesday satisy the condition then it will not check futher and print till end from wednesday to invalid daynumber
// }

// console.log(Dayname);

//Functions
// three types of function

//function declaration
//function expression
//arrow functions


//function declaration
// function sum(){
//     console.log("this is sum function");
//     }

// sum();


//function expression
// let sum =function () {
//     console.log("This is function expression");
    
// }
// sum();


// Arrow functions

// let sum = ()=>{
//     console.log("This is Arrow function");
    
// }

// sum();


// let add=(a,b) =>{
// console.log(a+b);

// }
// add(2,5)

// what about return keyword

// let add=(a,b) =>{
//     return a+b;
    
//     }
//     let result=add(2,5) // we need to store the return value in variable
// console.log(result);

// if there is only one statement retuning the value then you can write in below format

let add =(a,b) =>a+b;
let result=add(4,3);
console.log(result);


