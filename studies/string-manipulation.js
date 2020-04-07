/*
* STRING MANIPULATION:
* 0. String manipulation
* Methods are functions, they perform an action, with JavaScript we can use methods
* on string despite the fact that string is a primitive data. 
* JS language treats strings as an object, this allow us to be very creative with string 
* manipulation. 
* 
*/

// 1. String Methods //

// 1. Length property - when using this property return the length of a named string.

var game = 'bingo and cards';
var favGame = game.length;
console.log(favGame);     // prints => 15 

/* 2. Upper and Lower Case Method - with this methods we can change entire string 
* or just select index position to upper or lower case.
*/


var gameUpperCase = game.toUpperCase();
console.log(gameUpperCase);                // prints => BINGO AND CARDS;

var gameUpperCase = game[3].toUpperCase(); 
console.log(gameUpperCase);               // prints => G

var game1 = 'Chess';
var game1ToLowerCase = game1.toLowerCase();
console.log(game1ToLowerCase);             // prints => chess



/* 2. Concat Method - is used to combine two or more strings together,
* it can be used instead of '+' operator.
*/


var favFood = 'Thai';
var favRestaurant = 'Banana Bloosom';

var myFavFood = favFood.concat(' at ', favRestaurant,'.');
console.log(myFavFood);             // prints => Thai ay Banana Bloosom.
// 

    //example 
console.log(  ); // prints => 'input whatever it prints'

// 3. Trim Method - this method is used when we want to remove whitespace from the string.

var interest = '   I love reading books in my free time.    ';
console.log(interest.trim());   // prints => I love reading books in my free time. // 

// 4. Split Method - it is very useful when we need to change string to an array.


var oscars2020 = 'Joker, The Two Popes, Marriage Story, Pain and Glory';

var bestMovie = oscars2020.split(", ");
console.log(bestMovie);       
// prints => ['Joker', 'The Two Popes', 'Marriage Story', 'Pain and Glory'];

/* 5. Slice Method - with this method we can break string apart and return extracted 
* part as a brand new string. To corrctly use this method we need 2 parameters, 
* the start point and the end point but end point is not included when new string is returned. 
* I will use my oscars2020 var form above to slice the portion and return my choice 
* for favorite movie. 
*/

var myOscar2020 = oscars2020.slice(22, 35);  // prints => Marrige Story

// 6. Search Method - it helps to search for value that we specify.
// Again using oscars2020 var.

var position = oscars2020.search('Joker');
console.log(position);            //prints => 0

// 7. indexOf method - search an Array for index, with specified value.
var fruits = ['Kiwi', 'Apple', 'Pear', 'Orange', 'Mango'];
var index = fruits.indexOf('Apple');
console.log(index); // prints => 2  (index position of the Array is starting from 0)

// 8. Substring Method - Extracts characters from a string, between the two points specified.
var greeting = 'Have a nice trip!';
var result = greeting.substring(7, 11);
console.log(result); // prints => 'nice


// 2. In addition to methods we can also use operators or escape notations.

// 1. (+) operator, we can use to add two or more strings together, similar to concat method
var x = 'one';
var y = 'two';
var sum = x + ' and ' + y;
console.log(sum); // prints => one and two

// 2. (+=) operator, allow us to add string. 
var movie2020 = "I think, ";
movie2020 += "Joker will win Oscars for best movie.";
console.log(movie2020);

// 3. Special characters. 

// \'	single quote
// \"	double quote
// \\	backslash
// \n	new line

movie2020 = 'In my opinion,\n\'Joker\' will win Oscars.\nFor the best movie.';
console.log(movie2020);  // prints => In my opinion,
                        //'Joker' will win Oscars. 
                        //For the best movie.