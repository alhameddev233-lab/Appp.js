console.log("2" > 1);
console.log("02" > 1);


console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);



console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined > 0);


//  The reason  is that an Equality  check === and Comparisons > < >= <= work differently 
// Copmariosns Convert null to a number, treating it as 0.
// that's why (3)null >= 0 is true and (1) null  false > 0 is false