// this basically what does this do is refering the current coontext


const user ={
    usernaem : "jaytai",
    price : 100,

    welcomeMessage: function(){
        console.log(`Hello ${this.usernaem}! Welcome to our website`);
     console.log(this)   
    }
}

user.welcomeMessage();
user.usernaem="Jay";
user.welcomeMessage()

console.log(this);

/*ello jaytai! Welcome to our website
{
    usernaem: 'jaytai',
    price: 100,
    welcomeMessage: [Function: welcomeMessage]
  }
  Hello Jay! Welcome to our website
  {
    usernaem: 'Jay',
    price: 100,
    welcomeMessage: [Function: welcomeMessage]
  }
  {}

  */

  // function chai(){
  //   let username = "jayati"
  //   console.log(this.username);
  // }
  // chai()

  // we can not call this.username adn the output is undefined
  // because when we called the function chai(), there was no object so this was not defined.
  
//So in order to use this keyword inside a function ,we need to bind that function with an object or create an objec and
  // const person={
  //     name:"John",
  //     age:30,}
  // chai.call(person)// here we are binding the function with an object ,so now this inside of the function points towards that
  // chai.call(person)// here we are binding the function call with an object so now this will point to that object and it
  // chai.call(person)// now this inside of chai refers to person objecy
  // /*Output: John*/


  // const chai =function (){
  //   let username ="raj"
  //   console.log(this.username);
  // }

  const chai = () => {
    let username = "raj"
    console.log(this.username);
  }

  //becuse arrow function waork with the obhexts


  // this willl also result undefineeeeeed  becausae in node js global scope doesnot have any property named username
  //chai();/* Output : raj
              //Undefined 

  //+++++++Arrow function ++++++


// {} => {} this is my b asic arrow function 

// now if i have to take parmeters in the arrow fuction 

const addTwo = (num1 ,num2 ) =>{

  return num1 +num2
}


console.log(addTwo(3,5));

// we can also write arrow function it is called implicit reutrurn we have to remove the curley braces and make the function in same line 


const addThree =(num1,num2,num3)=> num1+num2+num3;

console.log(addThree(4,6,8)) ;

// if we wrao the function inside curely brackets so whe have to use reutrn  keyword 

const multiply=(x,y) =>{return x*y};

const divide =(a,b) => (a/b)
divide(9,0);


//we can also pass a single parameter without using parentheses ()

const log= val=> console.log(val);

log("Hello");


//we can also pass many parameters with out using parentheses ()

// const sum= (val1 ,val2 ,val3 ,...rest) => console.log(`The sum of all values is ${val1+val2+val3+ rest.reduce((acc,curr))}
// const sum= num1 ,num2 ,num3 ,...rest => {
//    return num1+num2+num3 + rest.reduce((acc,next) => acc + next ,0)
// }

// console.log(sum(1,2,3,4,5,6,7,8,9));


//arrow functions are less verbose than regular functions 

const person={
    name:"John",
    age:30,
    greet :()=> console.log(`Hi! I am ${this.name} and I'm ${this.age} years old`)
}
person.greet();


let obj={};
obj.getName=()=> this.name; // wrong way of doing it because there is no context for "this"
console.log(obj.getName()); // undefined

const getName=()=> this.name; // correct way of doing it by binding the function to an object
console.log(getName.call({name:"Tom"})) // Tom  


/*
* The call method allows you to invoke a function from another function with a specific "this" value along with any necessary arguments.
An arrow function does not have its own “this” value. Instead, it inherits the “this” value from the enclosing execution
In JavaScript, arrow functions have some differences from regular functions. The “this” keyword behaves differently depending on whether it’s used in an
In JavaScript, when you declare a method inside an object, 'this' refers to the object itself. However, in arrow functions, 'this
 * Immediately Invoked Function Expression (IIFE)
 */
// ((x)=> console.log(`The value of x is ${x}`))(10);
