/*
* LOOPS:
*
* 0. Loops are used to execute the same block of code again and again, repeated (looped) 
until a certain condition is met. 
 
JavaScript now supports many different types of loops:





// 1. For Loop //
/* 
A For loop contains parameters which determine the start, end, and number of iterations.
Loops through a block of code until the specified condition is reached.
For loop is mainly performed on arrays and strings.
The constraints of the for-loop statement have following meanings:
- Start point — it constraints initialize the start counter variables. .
- Stop point — it is evaluated at the beginning of each iteration. If the condition is true,
the loop statements execute.
If it is false, the execution of the loop ends.
- Increment/ Decrement  — it updates the loop counter at each time the loop runs.
*/

// for loop flow increment string
for(var i = 0; i < 5; i++) {
  console.log('Good Afternoon'); // prints => Good Afternoon five times
}

// for loop forward cointing
var i = 0;

for(i = 0; i <= 5; i++) {
console.log(i)   // prints => 0, 1, 2, 3, 4, 5
}

// for loop backward counting
for( i = 5; i >= 0; i--) {
console.log(i)  // prints => 5, 4, 3, 2, 1, 0
}

//looping over array
var colors = ['green', 'red', 'blue']

// looping forword through array
for(var i = 0; i <= colors.length; i++) {
console.log(colors[i]) // prints => green, red, blue
}

// looping backword through array
for( var i = colors.length-1; i >= 0; i--) {
console.log(colors[i])  // prints => blue, red, green
}


// 2. For in Loop //
/*
For in loop cycle key through all of the properties of an Object. 
*/
var myObject = {
  color: 'green',
  flower: 'orchid',
  number: 2,
  isItTrue: false};
  
for (var key in myObject ) {
console.log(key);    // => prints color, flower, number, isItTrue
console.log(myObject[key]); // => prints green, orchid, 2, false
console.log(myObject);
// prints => both each key with each assigne value five times, 
// as console.log it is inside of the block scope
}
 console.log(myObject);

// prints => both each key with each assigne value one time, 
//as console.log it is outside of the block scope



// 3. While Loops
/*
While loop executes its statement as long as condition we are checking is true.
when condiiton becomes false, the statment inside the loop stops executing.
In while loops, the test condition occures before statment in the loop is executed. 
If tested condition is true, the statement executes and condition is tested again, 
until it is false.
False outcome stops the condition 
*/

var number1 = 0;
var number2 = 0;
while (number1 < 2) {
number1++;            // after first pass number1 = 1, number2 = 1 
// each iteration loop increses number1 by 1 and adds the value to number2
number2 += number1;   // after second pass number1 = 2, number2 = 3
console.log(number2); // prints => 1, 3
} 
