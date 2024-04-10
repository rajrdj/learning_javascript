// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for (let index = 1; index <=10; index++) {
    const element = index;
    if (element===5) {
        // console.log(`5 is the best number`);
    }
    //console.log(element);
    
}


// for (let i = 1; i <=100; i++) {
//     console.log(`outerloop ${i}`);
//    for (let j = 1; j <= 10; j++) {
//    // console.table( `inner loop ${j} and outer value ${i}` );
//    console.log(`multipication table ${i} + ${j} = ${i*j}`);
    
//    }
    
//}

// let myArray= ["apple", "banana","cherry"];

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }

//keywords break and continue


// for (let index = 1; index <=20; index++) {
//     if (index==5) {
//         console.log(`detected 5`);
//         break
//     }

//     console.log(`value of index ${index}`);
    
// }

for (let index = 1; index <=20; index++) {
    if (index==5) {
        console.log(`detected 5`);
        continue
    }

    console.log(`value of index ${index}`);
    
}