let map = new Map();

map.set('name', 'Tutorial Point');

console.log('------------------------ Maps 1');

console.log(map.get('name'));
console.log(map.has('name'));

map.delete('name');

console.log('------------------------ After delete');

console.log(map.get('name'));
console.log(map.has('name'));

map
  .set('key1', 'val1')
  .set('key2', 'val2');


