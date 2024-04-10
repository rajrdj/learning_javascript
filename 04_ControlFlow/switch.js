const month = []
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");

        break;
    case 3:
        console.log("March");

        break;
    case 4:
        console.log("April");

        break;
    case 5:
        console.log("May");

        break;

    default:
        console.log("nune");

        break;
}


//falsy value

// false , 0,-0 bingInf 0n, null undefined ,NaN

//truthy value 

//"string"=="0" this is alos truth value " ",[],true ,funtion(){}

userEmail = []

if (userEmail.length===0) {
console.log(`Array is empty`);
    
}

let objectisEmpty ={};

if(Object.keys(objectisEmpty).length === 0 && Object.getPrototypeOf(objectisEmpty) === null){
    console.log( `The object is Empty`);
}else{
    console.log('The object is not empty')
}

// Nullish colescing  operator  

let name
name = 5 ?? 10
name = null ?? undefined

console.log(name);


