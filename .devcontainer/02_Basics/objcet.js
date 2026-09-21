
// Object-1
// Single-Ton

// Object-Literals 

const mySym = Symbol("Key1")
let jsUser = {
    name: "Ahmed",
    "fullname": "Ahmed AL-Hamed",
    [mySym]: "Keysym-1",
    age: 21,
    location: "Pune",
    email: "alhameda224@gmail.com",
    isLogin: false,
}
// console.log(jsUser.name);
// console.log(jsUser["location"]);
// console.log(jsUser["fullname"]);
// console.log(jsUser[mySym]);

jsUser.email = "AlhmedDev@gmail.com"
// Object.freeze(jsUser)

jsUser.email = "AlhmedDev@google.com"
// console.log(jsUser);

jsUser.greeting = function () {
    console.log("Hello js user");

}
jsUser.greetingTow = function () {
    console.log(`Hello js user, ${this.name} `);

}

console.log(jsUser.greeting);
console.log(jsUser.greetingTow);

 // Object - Destructuring
        let course = {
            courseName: "JavaScript",
            price: "999",
            courseinstructor: "abc"
        }
        // course.courseinstructor

        const { courseinstructor: instructor } = course

        console.log(instructor);

