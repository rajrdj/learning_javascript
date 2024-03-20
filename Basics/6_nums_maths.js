// const socore = 300;
// console.log(socore); // 300

// const balance = new Number(100)
// console.log(balance); // Output: 100

// console.log(balance.toString().length); // Output: object

// const otherNumber = 23.8536
// console.log(otherNumber.toPrecision(3));


// const hundreads = 100000000
// console.log(hundreads.toLocaleString('en-IN')); // "10,000,


//+++++++++++++++++++++++++++Maths ++++++++++++


console.log(Math); // Output    
console.log(Math.abs(9)); // Output  9

const pi = Math.PI;
console.log(`The value of PI is ${pi}`);

let x = 4;
let y = 7;

console.log(Math.max(x,y)); // Output   7

console.log(Math.min(x,y)); // Output   4           


console.log(Math.round(2.4)); // Output  2

console.log(Math.floor(2.4)); // Output  2

console.log(Math.ceil(  2.4)); // Output  3

let randomNum = Math.random();
console.log(randomNum); // Output a number between 0 and 1 (exclusive). For example: 0.12345678901      
// If you need to generate an integer between two numbers use the following formula:    
// let num = Math.floor((Math.random() * (upper - lower +  1)) + lower);       

// Here 'lower' is inclusive and 'upper' is exclusive. So if we             



console.log(Math.floor(Math.random()*10)+1);


const min = 10;
const max = 20 


console.log(Math.floor(Math.random()* (max-min+ 1) + min)); // This will