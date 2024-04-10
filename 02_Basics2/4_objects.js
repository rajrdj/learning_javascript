// // what is singleton
// // this is singleton ovject 
// //const tinderUser = new Object()

// //console.log(tinderUser);
// // this is not a singleton object 
// // const tinderUser3 = {

// // }

// const tinderUser3 = {}


// tinderUser3.user = "John Doe"
// tinderUser3.email = "weeb@tinder.com"
// tinderUser3.isloggedIn =  false;
// //console.log(tinderUser3);



// const regularUder = {
//     email: "someone@gmail.com",
//     fullname: {
//         firstname : "raj",
//         lastname:"kumar"
//     }
// }

// console.log(regularUder.fullname.firstname);


// // console.log(regularUser.fullname.userfullname.firstname);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}

// // const obj3 = { obj1, obj2 }
// // const obj3 = Object.assign({}, obj1, obj2, obj4)

// const obj3 = {...obj1, ...obj2}
// // console.log(obj3);


// const users = [
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
// ]

// users[1].email
// // console.log(tinderUser);

// // console.log(Object.keys(tinderUser));
// // console.log(Object.values(tinderUser));
// // console.log(Object.entries(tinderUser));

// // console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//objects in js


//destructing of objects 

const course = {
    coursename : "js basics",
    price : 444,
    duration : "6 months",
    courseinstructor :"rajrd"

}

console.log(course.courseinstructor
    );

    const {courseinstructor:  instructor ,...rest }= course;

console.log(instructor);


