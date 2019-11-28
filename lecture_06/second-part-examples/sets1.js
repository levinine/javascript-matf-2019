let weakSet = new WeakSet();  
let obj = {msg:"hello"}; 
weakSet.add(obj); 
console.log(weakSet.has(obj)); 
weakSet.delete(obj); 
console.log(weakSet.has(obj));