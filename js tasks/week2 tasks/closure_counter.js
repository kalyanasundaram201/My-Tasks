// Topic: The Counter Closure Challenge
// 3. Create a function 'createCounter' that returns a function. Every time the returned function is called, it increments and logs a count.

function createCounter(){
  var count = 0;

  return function(){
    return count+=1;
  }
}

let counter = createCounter();
console.log("count", counter());
console.log("count", counter());
console.log("count", counter());