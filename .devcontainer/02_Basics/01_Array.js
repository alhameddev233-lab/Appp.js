// Array 

let Array = [0, 1, 2, 3, 4, 5]

let myArr = ["HEllO", "Hii"]

// let newArr = new Array (1,2,3,4)
console.log(Array[0]);

// Array Methods
// myArr.push(6)
// myArr.push(9)

myArr.unshift(9)
myArr.pop()
myArr.shift()
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr);

const newArr = myArr.join()
console.log(myArr);
console.log(newArr);
// Slice And Splice

console.log("A", myArr);
const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C", myArr);

console.log(myn2);


