/*
*DATA TYPES:
*
* 0. In JavaScrit variable can contain any data type, it is 'dynamiclly typed' language.
* There are two types of data types: simple/primitive and complex data type.
*/

// I. Simple or Primitive Data Type: numbers, strings, booleans, undefined, null. 
/* 
Primitive date do not hold, collect or group, they are immutable and 
copy by value when assigning or passing form over variable to the other. 
Example:*/
var x = 10;
var y = 2;

var num = x + y; // => prints 12 
// value of x and y was passed to num but val of x or y was not changed


/*
// 1. number - represents numeric values.
Any number value: positive, negative, or with decimal points.
With numbers we can: add, subtract, divide, multiply.
New value is created with arithmetic expressions

*/
var myNum = 2; // regular number
myNum = 1.5; // Decimal number
myNum = 4 + 5; // Mathematical Expressions
console.log(myNum); // prints => 9

/*
Additionally to regular numbers, there are also three "special numeric values":


***NaN*** – property we can use to check if given value is not a legal number. 
It is only value that is not equal to itself. NaN === NaN =>false .
If we want t check if value is NaN, we have to use global function isNaN()
isNaN(NaN) => true
idNaN(11) => false
Typeof NaN => ‘number’

***Infinity*** – is an error value. 
It can indicate that number can not be represented as its scale is too large, 
and too small when ***-Infinity***. Other reason is when division by 0 has happened. 
Very useful as default value when we are looking for min or max value. 

5/0 //  => Infinity
5/-0 // => -Infinity

*/

console.log(1 / 0) // => Infinity
console.log("NaN" / 2) // => prints NaN, as this division is erroneous
console.log(-Infinity) // => -Infinity



// 2. String
/* 
Represents a sequence of characters or symbols, they must indicated in quotes i.e. ('' or ""), 
To access  each character of a string we can do by using bracket notation. 
They have .length property.
We can concatenate strings with '+' operator 
*/

var myString = "Sabina";
console.log(myString); // prints => prints Sabina

var myString1 = "Ohlsen";
var fullName = myString + myString1; // concatenation of 2 strings, and returns new value
console.log(fullName); // prints => Sabina Ohlsen 

// 3. Booleans
/*
Represents only two values: true or false, it works like any on/off switch.
They come very handy in the conditional statements, can be created with comparisons operators.
(note: Named after the early 19th century English mathematician George Boole)
*/
var myBoolean = false;
console.log(myBoolean); // prints => false
var isGreater = 5 > 1;
console.log(isGreater); // prints => true


// 4. Undefined
/*
Is when value of a variable (var) has not beeen assigned, and variable is only declared. 
*/
var home;
console.log(home); // prints => undefined, as we declared the variable but no value assign. 

// 5. Null

/* 
It is a special value that contains nothing in it, its empty, but is still consider value. 
In JavaScript null is an object, when form of value in which there is none (and not ZERO).
*/

var age = null;
console.log(age); // prints => null

// II. Complex Data Type: 
/* 
Not like simple date, complex data group other values and they have indefinite size, and
copy by reference when assigning or passing.
example:*/

var fruits = ['orange', ' kiwi '];
var veggies = ['spinach'];
var sList =  fruits + ' ' + veggies; //copy by ref. // prints => orange, kiwi, spinach 


/*
When a reference type value, an object,
is copied to another variable using = , the address of that value is what's actually
copied over as if it were a primitive. 
Objects are copied by reference instead of by value. var reference = [1]

*/


//1. Array

/*
Since Arrays are complex data types they store multiple data types. 
Their value is at index location - the number position of the value in the list. 
The first value has 0 index, second is at 1st, third is at 2nd and so on.
Since they copy by reference, they can hold other data types,
like: String, Number, Booleans, Other Arrays, and Objects, and even Functions!
Like strings, they have .lenght property, 

*/


//declare an array literal
var myArray = [];
console.log(myArray); // prints => []

//hard coding values inside of an array
var myArray = [3, 'string', true, ['array inside of array', 2, false ]];
console.log(myArray); // prints => [3, 'string', true, ['array inside of array', 2, false ]];


//update myArray with new value and check length of an array
var myArray = [true, 'green', false];
console.log(myArray.length)  // prints => 3

//check for last index of an array
console.log(myArray.length-1); // prints => 2


//check for position of index form the end
console.log(myArray[myArray.length-1]); // prints => false

//checks for position of the first index
console.log(myArray[1]); //  prints => green


//accessing values in an array (first value starts at 0)
console.log(myArray[0]); //  prints => true

//changing values
myArray[0] = 'new value';
console.log(myArray[0]); // prints => new value

//add values to the end of an array
var newArray = [1, true, 'movie', [22, 'dog']]
newArray.push(['push', 'pushArray']);
console.log(newArray); //prints => [1, true, 'movie', [22, 'dog'], ['push', 'pushArray']]

//remove values at end of an array
newArray.pop();
console.log(newArray); //prints => [1, true, 'movie', [22, 'dog']]

//add values to beginning of an array
newArray.unshift('add');
console.log(newArray);   //prints => ['add', 1, true, 'movie', [22, 'dog']]

//remove value from beginning of an array
newArray.shift();
console.log(newArray); //prints => [1, true, 'movie', [22, 'dog']]



//2. Object
/*
Just like an array, objects are complex data type that stores data. 
That data usually relates to ingle object stored in curly braces {}.
Arrays store values at index location, where objects are stored at keys in object. 
Objects they do not have length property. 
Every value (value can be any data type) has a key (key is a string data type).
*/


{} //==> this is an object literal
var myObject = {};// ==> this is an object literal assigned to a variable named myObject

myObject = {key1: 'a', key2: 'b'}; // => this is an object with string data types.




//declare an object literal
var myObject = {};

//add keys to an object
//dot notation
myObject.city = 'New Orleans';
console.log(myObject); // prints => {city: 'New Orleans'}

//bracket notation
myObject['school'] = 'Operation Spark';
console.log(myObject); // prints => {city: 'New Orleans', school: 'Operation Spark'}

//hardcoding objects
var personDetails = {
  name: 'Sofia',
  age: 22,
  hobbies: ['cooking', 'reading'],
  stats: {height: 5, weight: 155},
  marriedStatus: false
}
console.log(personDetails); 
/* prints => {name: 'Sofia', age: 22, hobbies: ['cooking', 'reading'], 
stats: {height: 5.8, weight: 155}, marriedStatus: false} */

//accessing values
console.log(personDetails.age); // with dot notation // prints => 22
console.log(personDetails['hobbies']); 
// with bracket notation // prints => ['cooking', 'reading']
console.log(personDetails.hobbies[1]); 
// accessing array of hobbies at index 1, with dot notation prints => reading
console.log(personDetails.stats.height); 
// accessing object stats for key name height, using dot notation prints => 5

//changing values
personDetails.name = 'Olivia';
console.log(personDetails.name); // prints => Olivia

//3. Function
/*
Functions are reusuble block of code, its like a button you press to. 
With functions you can group of statements together to perform a task we want. 
DRY - do not repeat yourself. 
There are four parts for function declaration:
- Name
- Parameter - they are optional, parameters are placeholder for arguments, 
when they can later be passed at the time of function call
- Function body (where the code runs and where return statment can be placed. 
- Return statement - also optional, the return statment will give value to the 
functation call, and it can only be used in the function body
Function Call - to call the function we need to call by the cunctation name follwed
by parenthesis (), that allows the code that is in the body of the function to run.
calling the function and definning a function are two different things, 
if we do not call nothing will happen. 
Its like if we do not press alarm button, the alarm will not perform its action. 

*/

function homework(par1, par2) {   
  // here we named function as => homework, that takes 2 parameters 
  
  return par1 + " " + "and" + " " + par2 + " " + 'are due on monday!';
  // body of the function, where we can input the return statement
}
 homework('Scratch Pad', 'Studies') ;
 // when calling a function it prints => Scratch Pad and Studies are due on monday!