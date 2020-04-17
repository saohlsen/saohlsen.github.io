/*
* LOOPS:
*
* 0. Loops are used to execute the same block of code many times until the 
* condition in the block code is met. 
 
JavaScript now supports many different types of loops:


// 1. For Loop //
/* 
A For loop has three parameters: start, end, and number of iterations.
For loop is mainly performed on arrays and strings.

- Start point — it is a start counter variable, evaluates only once when it starts.
- Stop point — it represents the end point when the condition is met. 
- Increment/ Decrement  — it updates the loop counter at each time the loop 
runs the code.
*/

// for loop flow increment string
for(var i = 0; i < 6; i++) {
  console.log('Hi'); // prints => Hi six times
}

// for loop forward counting
var i = 0;

for(i = 0; i <= 3; i++) {
console.log(i)   // prints => 0, 1, 2, 3
}

// for loop backward counting
for( i = 3; i >= 0; i--) {
console.log(i)  // prints => 3, 2, 1, 0
}


// 2. For in Loop //
/*
For in, loops over properties of an Object. Allows to access each property 
and value even without knowing the name of property. 
*/
var obj = {
  name: 'Gaby',
  favFlower: 'orchid',
  number: 2,
  isStudent: false};
  
for (var key in obj) {
console.log(key);    // => prints name, favFlower, number, isStudent
console.log(obj[key]); // => prints Gaby, orchid, 2, false

}
 console.log(obj);

// prints => both each key with each assign value one time, 
//as console.log it is outside of the block scope



// 3. While Loops
/*
While loop executes a block of code as long as the test condition is true and 
when the condition becomes false, the statement inside the loop stops executing.
False outcome stops the condition 
*/

var num1 = 0;
var num2 = 0;
while (num1 < 2) {
num1++;            // after first pass num1 = 1, num2 = 1 
// each iteration loop increases number1 by 1 and adds the value to num2
num2 += num1;   // after second pass num1 = 2, num2 = 3
console.log(num2); // prints => 1, 3
}

