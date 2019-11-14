var roles = new Map([ 
  ['r1', 'User'], 
  ['r2', 'Guest'], 
  ['r3', 'Admin'], 
]);
for(let r of roles.entries()) 
console.log(`${r[0]}: ${r[1]}`);