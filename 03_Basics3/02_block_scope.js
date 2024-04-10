//clobal scope 
var c = 300 
let a = 300 
if(true){
    let a = 10
    const b = 20
    var c = 500;
   console.log(`we are now printing the inner zero as ${a}`);
}

//console.log(a);
//console.log(b);
//console.log(c);  // this will print the value of c  outside of the if statement, which is 500 that is why we dont use var that breaks the bkock scope

//this is the problem with the var


// in global socpe the value we waeite we can acess it inside the scope  where  
//id some value has decleard inside the scope we can not use outside of the socpe 


//c


function one(){
    const username = "jayati"
    function two() {
        const website = "youtube"
        console.log(username);
}
//console.log(website); this can not acrss because that is outside the scope

//two() // this two is executed because we are accessing username as we know we can acrss the global functiion insided the scope so we get the oupturt "jayti "
}
one()

 
if (true){
    const usename = "jayati"
    if (usename === "jayati"){
        const website = "youtube"
        //console.log(usename + "is using " + website)

 }
 //console.log(website);
}
//console.log(usename);


//+++++++++++++++  interesting ++++++++++++
console.log(
    addone(5));
function addone(num){
    return num +1
}

addone(5)

//expression
// addTwo(5) we can not acces s add two without declering it this is also called hositing 

// because we are accessing it even we have not declered it 






















const addTwo = function(num){
    return num +2
}
addTwo(5)