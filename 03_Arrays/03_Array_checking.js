// checking Array
let result = Array.isArray([1,2,3]);
let result1 = Array.isArray("a");

console.log(result);
console.log(result1);

//Every
let s =[80,89,90].every(s => s< 70);
console.log(s);

// Some
let r =[8,59,90].some(s => s< 70);
console.log(r);
let p =[8,59,90].some(s => s> 70);
console.log(p);