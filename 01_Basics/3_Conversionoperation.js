/*let score = 33

console.log(typeof(score))  
this will tell the type of score is a number
*/
/*

let score = "33abs"

console.log(typeof(score)) 
// this will show that the variable score is now a string because we assigned it
// with a value containing characters other than numbers, so JavaScript converted it to a String data type
*/

// to conver 33abs into number we wiil use a special data type canll Number 

// let score = "33abs";

// let valueNumber = Number(score); // here we used Number() method which converts the given parameter (in our case score) into a
//  // or parseInt() 
//  console.log(typeof valueNumber)


 //let score = "raj";  //this will produce NaN but the type of Nan is number 
                    //NaN stands for Not A Number
        

                    
//to convert such values into normal numbers we use the Number()

//when we assign null in the score

//let scope = null; 
//this will result in NaN 


// let score = undefined;
// console.log(typeof score)  //undefined  means no value has been assigned yet
  // the result will be Nan  and the typeof will give number 


  //let score = null
   //value of Number is 0
   //but the type of valueNumber waill be number 



// let score =NaN
// console.log(typeof score); //number

function myFunction(a) {
  console.log(typeof 'a')
  
  return a
} 
//this will give us 1  because boolean true is equal to 1 in JavaScript
// in case of false this wail give us 0



// let  valueNumber = Number(score);

//  console.log(valueNumber); 
//  console.log(typeof valueNumber);  // number 




 /* if we convert the nubmer it is easily converted into the number 
 but when we convert 
 a string int number it will gives us Nan 

 33 => 33 
 "33" => 33
 '33abs' => NaN not a number 
 raj ==> not a number 
 undefined ==> Nan 
 null ==> 0
true ==> 1
false  ==0
NaN ==> Not a number  result will number

*/


// let userLoggeedin = 1
// let isLoggedIn = Boolean(userLoggeedin)
// console.log(isLoggedIn, typeof isLoggedIn);   // true boolean   


// let userLoggeedin = 0
// let isLoggedIn = Boolean(userLoggeedin)
// console.table([isLoggedIn, typeof isLoggedIn]);   // false  boolean   


// let userLoggeedin = ""
// let isLoggedIn = Boolean(userLoggeedin)
// console.log(isLoggedIn, typeof isLoggedIn);   // false  boolean   

// let userLoggeedin = 1 //any number  other than zero considered as true in JS
// let isLoggedIn = Boolean(userLoggeedin);
// console.table([userLoggeedin,isLoggedIn, typeof isLoggedIn]);   // true boolean   

/* 
1 ==> True
0 ==> false 
 
null or Undefined or N
// let userLoggeedin = ""
// let isLoggedIn = Boolean(userLoggeedin)
// console.log(isLoggedIn, typeof isLoggedIn);   // false  boolean   N ==> False
Anything else ==> True

*/

//let someNumber = NaN

// console.log(typeof someNumber)
// let isString = String(someNumber)

//console.table( [ isString, typeof someNumber , isString] ) 

//console.log(typeof isString)

/* 
 0 ==> string 
 anything else ====>  like name is sting 
 null ==. object ==>string 
undefiend ==> undfined ==> sting 
NaN  ===> Number ==> "NaN"

  
*/


//****************OPERATION************** */

// let value = 3
// let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);


// 1 year ago
// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

function createCounter(initialValue) {
  let count = initialValue;
  return function counter() {
    count++;
    return count;
  };
}

const counter1 = createCounter(5);
console.log(counter1());
console.log(counter1());
console.log(counter1());

const counter2 = createCounter(10);
console.log(counter2());
console.log(counter2());