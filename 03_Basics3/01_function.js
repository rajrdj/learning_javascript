// console.log("J");
// console.log("a");
// console.log("y");
// console.log("a");
// console.log("t");
// console.log("i");


function sayMyNmae () {
    console.log("J");
console.log("a");
console.log("y");
console.log("a");
console.log("t");
console.log("i");
}

//sayMyNmae()  //this is wheen we cwant to cal the functo

//const name = sayMyNmae();

//console.log(name);   //undefined - because the function does not return anything, it just prints out the letters one by one
 // in order to get something i return we wil use a key word called returen 


//  function addTwoNumber(num1, num2) {   // this is how you define a funtion with parameters
//      let sum = num1 + num2;            // this is how you declare a variable and assign it a value
//       return sum                       // this is how you return data from a function
//  }

//let result = addTwoNumber(5, 7);        // this is how you call a function and store the returned data into a varibale  
// console.log("Result: ", result);

// function addTwoNumbers1(number1, number2){

//     // let result = number1 + number2
//     // return result
//     return number1 + number2
// }

// const result1 = addTwoNumbers1(3, 5)
// console.log(result1);

// Function: loginUserMessage
// 
// Purpose: This function takes in a user's username as a parameter and returns a
// personalized welcome message for the user.
// 
// Parameters:
//  - username: a string representing the user's unique username
// 
// Returns: A string containing a welcome message for the user.
// 
// Example: 
// loginUserMessage('john_doe')
// 
// Output: "Welcome back john_doe"
// 
// function loginUserMessage(username) {   
//     return `Welcome back ${username}`;
//  }
// function  loginUserMessage(username){
//    return  `Welcome back ${username}`;

// }
// console.log(loginUserMessage( "jayati"));

// this is normal way of callin g the function 

function loginUserMessage(username) {    
    if (typeof username === 'string'){
        return `Welcome back ${username}!`;
    } else {
        throw new Error("Username must be a  string.");     
    }    
}
try {
   console.log(loginUserMessage("hitesg"));
} catch (error) {
    console.log(`Error: ${error.message}`);
}
console.log(loginUserMessage ("JaneDoe"));  

///function and object and array in javascript


// function calculateCartPrice(...num12) {  
//  return  num12
// // this wil return the array of objext 
    
// }

function calculateCartPrice(val1,val2 , ...num12) {  
    return  num12
   // this wil return the array of objext  [] 5 ]
       
   }

console.log(calculateCartPrice(3,4,5));

const user = {
    name:"jayti",
    surname: "bhardwaj",
    price : 99


}

function handleUserObject (anyObject) {
    console.log(`username is ${anyObject.name} and lastname is ${anyObject.surname} and the 
    price is ${anyObject.price}`);
    
}
handleUserObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]


function returnArray(getanarray) {
    return getanarray[1]
    
}

console.log(returnArray(myNewArray));