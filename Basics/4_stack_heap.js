// stack and heap inside javascipt 

/*
 stack use primitive data type  
  Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint 

and Heap uses non-primitive types. 
non primitive data types 
Object, Array , Functions are stored in the heap memory.


*/



// in stack  we store values but reference of objects 
// not by  value so it will show false if you compare two variable with same reference of an object


// In JavaScript, when a function is called, a new execution context is created for that particular  function call. This includes information about variables declared within
// Stack is used to implement a function call . Whenever a function is called , a new frame is pushed into the stack which contains return address
// == operator compares both value and type of variables
// === operator compares both value as well as type of variables


// Stack is used to implement following things :

let userOne =  {
    email : "abc@gmail.com",
   

}

let userTwo = userOne;

userTwo.email ="raj@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);
 