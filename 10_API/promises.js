fetch ('https://something.com').then().catch().then()//


const promisOne = new Promise(function (resolve,reject){
    // Do an async task
    //DB calls , cryptography,network
    setTimeout(function(){
        console.log('Async taski s completed ');
        resolve()
    }, 10000)

})

promisOne.then(function (){
    console.log("promise consoume");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async taski s completed ');
        resolve()
    }, 1000)

}).then(function(){
    console.log("promise consoume");    
})


const promiseThree = new Promise(function (resolve,reject){
    setTimeout(function (){
         resolve({username:"jayati", email: "jayati@exapmple"})
    },1000)
})
promiseThree.then(function(data){
    console.log(data);
   
})


const promiseFour = new Promise (function (resolve , reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({username: "jayati", passowrd: 'raj'})
            
        }else{
            reject('error: some went worng')
        }
    },1000)
})

const username = promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
    return username

}).catch(function (error) {
    console.log(error);
}).finally (()=>{
    console.log("the promise is either rejected or resolvedfinally");
})



const promiseFive = new Promise((resolve, reject)=> {
  setTimeout(function(){
    let error = false;
    if(!error){
        resolve({username: "javascipt", passowrd: 'raj'})
    }else{
        reject('error: js went worng')
    }

  },1000)
})

// async function ConsumePromiseFive(){
//  try {
//     const response =   await promiseFive
//      console.log(response);
    
//  } catch (error) {
//     console.log(error);
    
//  }


// }

// ConsumePromiseFive()


// async function getAlluser(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         console.log(response);
//     const data = await response.json()
//     } catch (error) {
//         console.log(error);
        
//     }

   
// }
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
return response.json()
})
.then((data) => {
console.log(data);
})

fetch('https://randomuser.me/api/')
.then((r))