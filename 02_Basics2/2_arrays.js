const marvel_heros = ["thor","captinAmerica", "ironman"];
const  dc_heroes = ["superman", "batman", "wonder woman"]

//marvel_heros.push(dc_heroes);
//console.log(marvel_heros); 
/*
the output is  an array that contains all the elements from both arrays but the problem is that we dont warnt
that inside the array their is array to solve  this issue we can use the concat method and spread operator i
so we can handle this issue 
//output [
  'thor',
  'captinAmerica',
  'ironman',
  [ 'superman', 'batman', 'wonder woman' ]
]

*/
// this is thr first technique and now we are goona to see the second method we called this method as spread operator 
// const all_new_heores = marvel_heros.concat(dc_heroes) ;
// console.log(all_new_heores); 
 /* this is the output of this 

[
  'thor',
  'captinAmerica',
  'ironman',
  'superman',
  'batman',
  'wonder woman'
]
*/


//spread operator 

const all_new_heores =  [...marvel_heros, ...dc_heroes]; //this will give us same result as above  but with spread operator it looks more cleanlet heroes

console.log(all_new_heores);

/*
[
  'thor',
  'captinAmerica',
  'ironman',
  'superman',
  'batman',
  'wonder woman'
]
*/


const newNumbers = [1,2,3 ,[4,5,6],6,6,7,[8,6.7],10]

const realNewNumber =  newNumbers.flat(Infinity);

console.log(realNewNumber);


/* THIS METHOD IS USED WHEN WE WANT TO MAKE A SINGLE ARRAY INSTED OF ARAAYAS AND ARRAYS  */



console.log(Array.isArray("Raj Rd "))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));