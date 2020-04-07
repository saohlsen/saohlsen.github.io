// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // return finction that takes one par - value and test is it is greater than base
return function testGreater(value) {
    // use conditional statment to test if true or false
        if(base < value) {
            return true;
        } else {
            return false;
        }
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    // return function that takes one par - value and tests weather is less than the base
    return function testLess(value) {
        // use the conditional statment to test if true or false
        if(value < base) {
            return true;
        } else {
            return false; 
        }
    } ;
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    // return function that takes one parameter
    return function(string) {
       // use conditional statement to test if 1st index is the same as startsWith 
       // use .toLowerCase to ensure for the same case letter
        if(string[0].toLowerCase() === startsWith.toLowerCase()) {
            return true;
        } else {
            return false;
        }
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    // return function that takes one par - string
    return function(string){
        // use conditional statement to test if last index is the same as endsWith
        if(string[string.length-1].toLowerCase() === endsWith.toLowerCase()) {
            return true;
        } else {
            return false;
        }
    };
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    
    // create arra literal
    let aModifyStrings = [];
    
    // use for loop to loop through string and push the result to array literal
    for(let i = 0; i < strings.length; i++) {
        aModifyStrings.push(modify(strings[i]));
    }
   // console.log(strings)
    
    // return an array that hold the result of the looping
    return aModifyStrings;
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    // use for loop to loop through a string 
  for(let i = 0; i < strings.length; i++) {
      // assigne the result ot the test function to the variable array
      let tested = test(strings[i]);
      // set condition when the outcome of function is false, return false
      if(tested === false) {
          return false; 
      }
      // otherwise return positive
  }  return true;
   
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}