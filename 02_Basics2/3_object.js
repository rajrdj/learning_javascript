//signleton 
//constructor

//literatls

// this is the way to crate the object in the javascipt
//cosnt  Singleton = {}

const mySym = Symbol("key1") 

const jsUser = {
   user : "rajrd",
   "fullname": "RAj Dahayat ",
   [mySym]:"I am a secret message for you",
   email: "rajdahayat2@google.com",
   phone:"+91-8603547036",
   islooged:true,
   lastLoginday: ["monday", "tuesday"],


}

//interviewe question '
console.log(typeof jsUser[mySym]);

jsUser.email = "rajdahyat@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email =  "microsfot@gmail.com"
console.log(jsUser);


jsUser.greeting = function(){
    console.log("hello js user");
}


jsUser.greetingTwo = function(){
    console.log(`hello js user ,${this.user,this.islooged}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());