
/*
*
*
********************************************************************************
*                            STRING MANIPULATION                               *
********************************************************************************
*
*
*
* String Manipulation
* In JavaScript strings are objects, therefore strings can be
* manipulated by using methods on them. Methods are functions, 
* they can be used to change strings.
*/

// concat()and (+)- we can use concatenate two or more strings //

var firstName = 'Sabina';
var fullName = firstName + ' ' + 'Sopata';
console.log(fullName); // prints => Sabina Sopata


// trim() - remove leading and trailing whitespace whitespace


var name = ' Sabina    ';
var trimedString = name.trim();
console.log(trimedString);   // prints => ‘Sabina’


// toLowerCase() and toUpperCase() - changes case of a string.

var day = 'MonDaY';
console.log(day.toLowerCase()); // prints => 'monday'
console.log(day.toUpperCase()); // prints => 'MONDAY';

//replace() - it replace a substring in a string

var string = "the bird is loud";
var str = string.replace(/the/g, "a");
console.log(str);     // prints => "a bird is loud"


// search() - returns the position of the string for the first match was found.
// If no match is found, it returns -1.
var string = "This is a my favorite movie.";
var movie = string.search(/is/);
console.log(movie); // 2


// split() - Converting a String to an Array

var str = "January, Februeary, March";
console.log(str.split(" ")); // split no space
console.log(str.splice(",")); // split with comma


//   indexOf()  - returns the index of (the position of) the first occurrence 
// of a specified text in a string, if nothing found returns -1.
 var drink = "coffee";
 console.log(drink.indexOf("f")); // prints => 2


// Operators or escape notations.

// 1. (+) operator, we can use to add two or more strings together, 
// similar to concat method
var x = 'one';
var y = 'two';
var sum = x + ' and ' + y;
console.log(sum); // prints => one and two

// 2. (+=) operator, allows us to add strings. 
var movie = "I think, ";
movie += "this is the best movie.";
console.log(movie);

// 3. Special characters. 

// \'	single quote
// \"	double quote
// \\	backslash
// \n	new line

var pizza = 'In my opinion,\n pizza blanca.\n Is the best.';
console.log(pizza);  // prints => In my opinion,
                        // pizza blanca.
                        // Is the best.
