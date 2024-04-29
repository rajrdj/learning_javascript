const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//const newnums = myNums.filter((num)=> num>4  )
//it we write in one line we do not have to use return or it is in the same line 

const newnums = myNums.filter((num)  => {
    return num
} )
//console.log(newnums);
// if we write user the block scopt the we can use the return fjeywirjd  

myNums.forEach(()=> {

})

const newNums = []

myNums.forEach((num) => {
    if (num>4) {
        newNums.push(num)
    }
})


console.log(newNums);