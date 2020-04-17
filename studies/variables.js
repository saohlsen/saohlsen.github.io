/**
* Variable  - are container or place holders for any type of data. 
* In JavaScript declare variable, assign value to the variable, or just declare
* and initialize 
* at the same time. 
*/

// 1. Declaration //
/*
To declare we use keyword var followed by the name of the variable. 
*/

var sentence; 

// 2. Assignment  //
/*
To assign any data type value/  
*/
sentence = 'Good Morning';

// 3. Initialize  //
/*
To declare and assign value at the same time/  
*/
var greetings = 'Welcome in my town!';

// 4. Re-assugnment  //
/*
To change and assign new value/  
*/
greetings = 'Good day';

/**
*  Global vs Local variable. 
* Javascript has a very important concept to understand, it is scope.  
*  Variables can be usable/accessed within the scope they exist.
* There are three scopes: global, local and block scope.
* If var is declared in a function, var has function scope. 
* If var is declared outside the function scope, var has global scope
*/
// 1. Global variable and Local variable Access // 
 
var greeting = 'Hello!';
function greet() {

var greeting = 'Good Day!';
console.log(greeting);         // prints => Good Day!  // from local scope
}
greet(); 
console.log(greet);         // prints => “Hello!”   // from global scope


/**
*  Other keywords that are also containers for data are let and const. 
* Let is very similar to var, but variable declared using let is blocked scope
* only, where var can be global scoped and function scoped. 
* Block scope can be recognized by curly braces ({ }). 
* Example will be conditional statements or loops, they create block scope. 
* That also means that if we try to access let outside the of block scope we
* will get a //ReferenceError//. 
*/

// 1. Let //

var word = 'word';

for(let i = 0; i < word.length; i++) {
  var name = word[i];
}
console.log(name);         // prints => RefrenceError: name not defined 


/**
* Last example of variable in JavaScript is - const, this keyword works like 
* let, but it must be declared and initialized immediately with value, 
* and that value can not be changed. 
*/

//1. Const //  
const birthYear = 2009;
birthYear = 2007;
console.log(birthYear);     // prints => TypeError
