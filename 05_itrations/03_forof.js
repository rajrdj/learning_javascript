//for of 

// const arr = [1,2,3,4,5];
// //iterator object array string all the the iterator  method in javascript is a function that returns an iterable object.
// //console.log(arr);

// for (const num of arr) {
//     console.log(typeof(num));
    
// }

// const greetings = " hello wrodld"
//   for (const greet of greetings) {
//     console.log(`Each cagr us ${greet}`);
//   }
    

  // maps in javascipt

  const map = new Map()
  map.set('In', "india")
  map.set('In', "india")
  map.set("Us", 'USA')
  map.set('fi','France')

 // console.log(map);

  for (const [key, value] of map) {
    //console.log(key, "---> ",value);
    
  }

  const myObj = {
    'game1': "jayati",
    'game2':'cricket',
    'game3':'Football',
    'game4' : "raj"
  }
  
//   for (const [key,value] of myObj) {
    // this loop does not work in the  object because objects do not have a [Symbol.
//   }





for (let index = 1; index <= 100; index++) {
  console.log(`outer loop index ${index} `);
for (let j = 1; j <= 10; j++) {
  console.log(`${index} * ${j} = ${index*j}`);
  
}  
}