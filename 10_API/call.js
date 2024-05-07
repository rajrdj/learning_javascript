//call bind apply
// these topics should be explain differnetly 
// 1. bind
// 2. call
// 3. apply


function setUsernaem (username){
   // comple calculation
   this.username = username
   console.log(this.username)
}

function createUser(username, email,password){
    // setUsernaem(username) // instead of using this.username = username i have outsorced that work
    //now it should execute but it will not execute actully this is not calling we have just give it 
    // refernce in javacript we get some mehtods in which we go expleicticly  and call the funtion 
// // 
// setUsernaem.call(username)
// this will call but it is still not when we use that method it only calls and the execution we crated and it contents swap away and it can not able to reach to the other 



setUsernaem.call(this, username)
// in order to execute this mty this isted of using my this by  using the funtion it is giveing to its next funtion not just erasing  

    this.email= email
    this.password= password
}

const jayati = new createUser("jayti", "jayati@example.com", "123")
console.log(jayati);
