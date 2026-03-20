//Slice - returns new array, does not mutate actual array
let arr = [1,2,3,4,5];
console.log(arr.slice(1,2));
console.log(arr.slice(2,4));
console.log(arr.slice(-5));
console.log(arr.slice(-6));
console.log(arr.slice(2));
console.log(arr.slice(1,-5));

// Combine 
let a =[1,2];
let b =[3,4];
let c = a.concat(b, [5,7]);
console.log(c);

// spread concatination (modern way)
let d = [...a,...b];
console.log(d);
console.log(arr.slice(2));
console.log(arr.slice(2,3));

// Join
let s = ["pass", "fail","skip"].join(" | ")
console.log(s);