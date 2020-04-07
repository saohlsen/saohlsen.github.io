// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  //use for loop to search through an array
  for(var i = 0; i < array.length; i++) {
    //print they result values using console.log
    console.log(array[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
  // use for loop to loop throught an array
  // start point is at last index of an array
   for(var i = array.length-1; i >= 0; i--) {
     // print result values using console.log
     console.log(array[i]);
   }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  // create array literal
  var aObj = [];
  // use key in loop in object and access the key
  for(var key in object){
    //use push method to pus keys into an array literal
    aObj.push(key);
  }
  //return an array that holds keys 
  return aObj;

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
// use for in loop to accss keys, print using console. log
  for(var key in object) {
    console.log(key);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // create array literal
  var aObj = [];
  // use key in loop, and push the key value into an array literal
  for(var key in object){
    aObj.push(object[key])
  }
  // return an array that holds object values
  return aObj;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // use for loop to access object values and print using console.log
  for(var key in object){
    console.log(object[key]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the length of its key/value pairs
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  // create array literal
   var aObj = [];
   // use for in loop to access and object
  for(var key in object){
    // use push method to push object into an array
    aObj.push(object);
  }
  
  // return array that holds an object
  return aObj.length;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  // create array literal
  var arrObj = [];
  // use for in loop to access on object key/value and push into an array literal objects values
  for(var key in object) {
    arrObj.push(object[key]);
  }
  // use for loop to access an array values and print using console 
  for(var i = arrObj.length-1; i >= 0; i--) {
    console.log(arrObj[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
