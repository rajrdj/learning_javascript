 const coding = ["js","ruby","java","python","cpp"]


// coding.forEach(function (val){
//     console.log(val);
// })


// coding.forEach((item)=> {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

//coding.forEach(printMe)

// coding.forEach((item,index,arr)=> {
// console.log(item,index,arr);
// })

const myCoding = [
    {
        langugename : "js",
        year : 1995

    },
    {
        langugename:"java",
        langugeFilenaem: "java"
    },
    {
        langugename:"python",
        langugeFilenaem: "python"
    }
]

myCoding.forEach( (item) => {
 console.log(item.langugename);
})