// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    
    // use Array.isArray to test value
    // if passes return true
    // if not, return false
    
    if(Array.isArray(value)){
        return true;
    } else {
        return false;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    
    // we need to test all: object, array, null, date as they are all objects JS
    // test if value os object and return true, if not false
    // to test object use typeof operator
    // to test array use Array.isArray
    // date just compare value to Date() (!=)
    // null, just compare to null (!=)
    if(typeof value === 'object' && Array.isArray(value) != true 
    && value != Date() && value != null) {
        return true;
    } else {
        return false; 
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    
    
    // we have to test if true for object and array
    // also we have to test that Date and null don't test true with value
    // is all condition passes, return true
    // if not return false
    
    if(Array.isArray(value) || typeof value === 'object' && value != Date() 
    && value != null){
        return true;
    }
     return false;
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    
    // test value to each data type, 
    //if true return the name of the data type as string
    // to test valy we have to use correct mehtods or operators
    
    if(typeof value === 'string'){
        return 'string';
    } else if(Array.isArray(value)){
        return 'array';
    } else if(typeof value === 'object' && value instanceof Date){
        return 'date';
    } else if(typeof value === undefined){
        return 'undefined';
    } else if(typeof value === 'number'){
        return 'number';
    } else if(value === 'boolean') {
        return 'boolean';
    } else if(value === null){
        return 'null';
    } else if(typeof value === 'function'){
        return 'function';
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
