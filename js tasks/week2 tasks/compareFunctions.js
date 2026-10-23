// Topic: Return Value vs. Return Function
// 2. Compare two functions: one that returns the result of an addition, and one that returns a new function that performs the addition.

function add(a, b){
    return a+b;
}

console.log("add", add(1,2));

function returnaddfunction(){
  return function(a,b){
    return a+b;
  }
}

var addfunction = returnaddfunction();
var result = addfunction(3, 4);
console.log("addfunction", addfunction);
console.log("result", result);