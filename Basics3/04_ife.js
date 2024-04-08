//+++++++++++++++++= ifee  

// declerattion of ifee 
// tha is how we declere funtion 
// function ifee(){
//     console.log(`connected to the db`);
// }
// ifee(); we use ifee so we dont poluutte the gloval scope i
// to declere the ifee in the function  expression way , we use (function(){})()
(function ifee(){
    console.log(`connected to the db`);
})(); // named iife 


// ifee with arrow funtion 

( (name) => {
    console.log(`connected to the db again ${name}`)
} )("jayati");// unname iife 
// if we want to execute two ifee at a time we should  put them inside another ifee or use comma operator like this 

// calling a function inside another function using call or apply methods

const person = {
    name : "Jayati",
    age:21,
    profession:"Software Developer"
};

console.log(person.profession);

const logProfession = function () {
    console.log(this.profession);
}

logProfession(); // undefined because it's not bound to any object

logProfession.call(person); // Software Developer

((jay)=> {
    console.log(`this is an anoommus funtion ${jay}`);
})("learn the iife")