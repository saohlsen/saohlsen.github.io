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

};

/**************************************************************************/

var femaleCount = function(array){
    return _.reduce(array, function(prev, current) {
        return prev + (current.gender == 'female');
    }, 0);
};

/****************************************************************************/

var oldestCustomer = function(array) {
    var max = 0;
    // use reduce to find oldest customer name
    return _.reduce(array, function(nr, customerObj) {
        if(customerObj.age >= max) {
            //set acc to the object name
            nr = customerObj.name;
            // set max value to object age
            max = customerObj.age;
        }
        // take empty string as seed to return name
        return nr;}, "");

 };




/****************************************************************************/

var youngestCustomer = function(array){
 var min = Infinity;
 // use reduce to find youngest customer name
 return _.reduce(array, function(nr, customerObj){  
     // nr => prev value, customerObj => current value
    
     if(customerObj.age <= min) {
            //set acc to the object name
         nr = customerObj.name;
           // set max value to object age
         min = customerObj.age;
     }
     // take empty string as seed to return name
     return nr;}, "");
 };


/****************************************************************************/


var averageBalance = function(array) {
    let balance = 0;
    //use filter to find the average balance of all customers
    _.filter (array, function(element, index, array){
        // use pareseFloat, 
        // it parses an argument and returns a floating point number.
        balance += parseFloat(element.balance.replace(/\$/g,'').replace(/\,/g,''));
    });
    // to get avarage return result of a balance divided by 2 
    return balance / array.length; 
};



/****************************************************************************/


var firstLetterCount = function(array, letter) {
    // to find how many customer's names begin with a given letter use for loop
    var letterCount = 0;
    // set letter anda name at 0 index toLowerCase()
    letter = letter.toLowerCase();
    for(let i = 0; i < array.length; i++) {
        if(array[i].name[0].toLowerCase() === letter) {
            letterCount += 1;
        }
    }
    
  return letterCount;  
};


/****************************************************************************/


var friendFirstLetterCount = function(people, customer, letter){
    let result;
    // use each to find how many friends of a given customer have 
    //names that start with a given letter
    _.each(people, cust => {
        if(cust.name === customer){
            result = firstLetterCount(cust.friends, letter);
        }
    });
    return result;

    };



/****************************************************************************/


var friendsCount = function(array, name){
        let friend = [];
    //use each to find the customers' names that have a given customer's 
    //name in their friends list    
        _.each(array, function(element, index, array) {
    // use filter to  find and name and add to array literal       
                _.filter(element.friends, function(elem, index, array) {
                if (elem.name === name) {
                    //console.log(element.name);
                    friend.push(element.name);
                }
            });
        });
        return friend;
};




/****************************************************************************/


var topThreeTags = function(array) {
    // Pluck all the arrays of 'tags' from each person and concat them into 
    //a single array using reduce
  let allTags = _.reduce(_.pluck(array, 'tags'), (acc, val) => acc.concat(val));
    // Create empty object to hold a count of all tags with their name associated
    let tagStats = {},
        tagArr = [];
    // Iterate through every tag in the allTags array
    for (let tag of allTags) {
        // Record a name as a property in tagStats for each tag and 
        //add 1 to the value for each time the name is counted
        (!tagStats[tag]) ? tagStats[tag] = 1 : tagStats[tag]++
    };
    for (let key in tagStats) {
        // Push every key name and value as its own object to the tagArr array
        tagArr.push({name: key, count: tagStats[key]});
    };
    // Sort the objects in the tagArr by their count key value
    tagArr.sort((a,b) => b.count - a.count);
    // Return the name key values of the first three objects in tagArr
    return [tagArr[0].name, tagArr[1].name, tagArr[2].name];
};



/****************************************************************************/


var genderCount = function(array){
   let genderObject = {}; 
   // create object literal
   genderObject.male = maleCount(array);
   // add to the object key - male with value of maleCount function we created
   genderObject.female = femaleCount(array); 
   // add to the object key - female with value of femaleCount 
   _.reduce(array, function(accumulator, currentResult) {  
       // use reduce functon that takes array,
       //and function as parameter(accumulator, currResoult)
        if (currentResult.gender === "non-binary") {
            accumulator += 1;
        } 
        return genderObject["non-binary"] = accumulator;
   }, 0);
   return genderObject;
};


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
