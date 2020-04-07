//0. Function
/*
Functions are reusable block of code, it's like a button you press to, or verb in the JavaScript.
With functions you can group of statements together to perform a task we want. 
DRY - do not repeat yourself. 
There are two steps of a function: 


1. Function declaration: four parts for function declaration.
- Name
- Parameter - they are optional, parameters are placeholder for arguments, when they can later
be passed at the time of function call
- Function body (where the code runs and where return statement can be placed. 
- Return statement - also optional, the return statement will give value to the function call,
and it can only be used in the function body

// Function declaration
function add(num1, num2) {
	return num1 + num2;
}

Function without arguments and return statement as they are optional.
Function without a return statement will return a default value 
Arguments are also optional, if we don't pass a value, parameter is undefined.
If we pass parameters (as many as we need) than they are in the signature, and we can use 
arguments.

function functionName () {
  // Do stuff here
}


2. A function expression is similar to function declaration, the difference is the function name.
Name can be omitted with function expression, than its called anonymous function, they can 
be used to IIFE  - Immediately Invoked Function Expression, and it runs when it is defined. 
Expressions can not be used before they are defined as they are not hoisted,
function declarations on the other hand are hoisted. 


// Function expression
var add = function (num1, num2) {
	return num1 + num2;
};


3. Function Call is second step - to call the function we need to call by the function name, 
followed by parenthesis (), that allows the code that is in the body of the function to run.
Calling the function and declaring a function are two different things, if we do not call 
nothing will happen. Its like if we do not press alarm button, it perform its action. 
Function call, is also called as invoke a function. 
We have to call/invoke, its called by function name, followed by arguments inside of ().
*/

// Function 

function homework(par1, par2) {   
    // here we have named function as => homework, that takes 2 parameters 
  
  return par1 + " " + "and" + " " + par2 + " " + 'are due on monday!' 
  // body of the function, where we can input the return statement
}
 homework('Scratch Pad', 'Studies') 
 // when calling a function by its name with arguments inside of ().
 // prints => Scratch Pad and Studies are due on monday!
 

// 1. Scope
/*
Variables that are declared within a function can only be accessed WITHIN the function,
therefore they have what is called a LOCAL scope. A variable that is defined OUTSIDE of
the function have a GLOBAL scope.
Function has access to variables in global scope, but variables that are created in function 
scope cannot be accesed form global scope.
*/

// Global vs. Function Scope
var country = 'USA';                // initialized variable in the global scope  
function states () {                // function name with no par, creates function scope 
  var city = 'New York';            // initialized variable in the local/function scope
  let city1 = 'New Orleans';        // initialized let variable in the local/function scope
  const city2 = 'Los Angeles'       // initialized const variable in the local/finction scope
  
  console.log(city);    // prints => New York, access within local scope
  console.log(city1);   // prints => New Orleans, access within local scope
  console.log(city2);   // prints => Los Angeles, access within local scope
  console.log(country); // prints => USA, local scope has access to global scope
}
states ();  

//console.log(city);     // prints => Refrence Error, global scope has no access to local scope
//console.log(city1);    // prints => Refrence Error, global scope has no access to local scope
//console.log(city2);    // prints => Refrence Error, global scope has no access to local scope 
console.log(country);  // prints => USA, access within global scope

// 1. Closure
/*
In Javascript all functions are objects, using exical scope.
A closure is the blend of functions but fenced together by their scope,
closure makes it possible for a function to have it's own set of private or LOCAL variables.
Within the scope in which a function is created, it can access the local variables
as well as other functions, and any of global variables declared OUTSIDE the function.
The inner function created can access variables inside the outer function's scope.


*/

// add function with one parameter, that returns function with one parameter as well
function add(num1) {
  return function(num2) {
    return num1 + num2;
  };
}

// add2 and add22 are closures that share the same function add base 
// but have diffrent lexical environment.
var add2 = add(2); 
var add22 = add(22);

console.log(add2(5));  // prints => 7
console.log(add22(20)); // prints => 42