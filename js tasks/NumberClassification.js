// Topic: Sequence vs. Nesting Analysis	
// 3. Write a program that classifies a number: 'Small' (0-10), 'Medium' (11-20), 'Large' (21-30).

var num = [1,3,6,8,24,28,21,16,17,13];
let small = [];
let medium = [];
let large = [];

for(let i = 0; i < num.length; i++) {
  if(num[i] <= 10 && num[i]>=0){
      small.push(num[i]); 
  }else if(num[i] <= 20 && num[i]>=11){
      medium.push(num[i]);
  }else if(num[i] <= 30 && num[i]>=21){
      large.push(num[i]);
  }
}

console.log("small", small);
console.log("medium", medium);
console.log("large", large);
