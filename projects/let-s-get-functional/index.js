// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require( 'lodown-saohlsen');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    //using filter find the number of males cusotemrs in our list
    let arrOfMales = _.filter(array, function(customerObj){
        //filter all of the male cusotemrs
        //each custoemrObj has a gender prop
        return customerObj.gender === "male";
    }).length;
    
    return arrOfMales;
    
  //console.log(arrOfMales);
};

// ### 2: `femaleCount`
//  - **Objective**: Find the number of female customers
//  - **Input**: `Array`
//  - **Output**: `Number`
//  - **Constraints**: use `reduce`

var femaleCount = function(array){
    return _.reduce(array, function(prev, current) {
        return prev + (current.gender == 'female');
    }, 0);
};


var oldestCustomer = function(array) {
    var max = 0;
    return _.reduce(array, function(nr, customerObj) {
        if(customerObj.age >= max) {
            nr = customerObj.name;
            max = customerObj.age;
        }
        return nr;}, "");

 };


var youngestCustomer = function(array){
 var min = Infinity;
 return _.reduce(array, function(nr, customerObj){  /// nr => prev value, customerObj => current value
     if(customerObj.age <= min) {
         nr = customerObj.name;
         min = customerObj.age;
     }
     return nr;}, "");
     
 };


// ### 5: `averageBalance`
//  - **Objective**: Find the average balance of all customers
//  - **Input**: `Array`
//  - **Output**: `Number`
//  - **Constraints**:


//  using filter
var averageBalance = function(array) {
    let balance = 0;
    _.filter (array, function(element, index, array){
        balance += parseFloat(element.balance.replace(/\$/g,'').replace(/\,/g,''));
    });
    return balance / array.length; 
};


// using avarage
// var avarageBalance = function(array) {
//     _.reduce(array, function(prev, current){
//         let balance = parseFloat(current.balance.replace(/\$/g,'').replace(/\,/g,''));
//         return balance; 
//     },0);
// };




var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
