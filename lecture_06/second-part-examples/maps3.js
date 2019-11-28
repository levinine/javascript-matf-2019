let weakMap = new WeakMap(); 
let obj = {}; 
console.log(weakMap.set(obj,"hello"));  
console.log(weakMap.has(obj));// true

