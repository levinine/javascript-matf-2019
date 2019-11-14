//ES5
var setNameIdsEs5 = function setNameIds(id, name) {
  return {
    id: id,
    name: name
  };
};

// ES6 return object literal 
var setNameIdsEs6 = (id, name) => ({ id: id, name: name });

//Spread 
var setNameIdsEs6Spread = (id, name) => ({ id, name });


console.log(setNameIdsEs6 (4, "Kyle"));   // Object {id: 4, name: "Kyle"}