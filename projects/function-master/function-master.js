//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    
    // create array literal 
    var arr = [];
    // use for in loo to cycle over an object
    for(var key in object) {
        // use push method to add key into an arr
        arr.push(object[key]);
    }
    // retirn an arr
    return arr; 
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//   QUnit.test("keysToString() : Should take an object and return all its keys in a string each separated with a space", function(assert){
//       var objectOne = {a: "one", b: "two", ponies: "crayons", dingle: "dangle"};
//       var objectTwo = {c: "three", d: "four", crayons: "ponies", dangle: "dingle"};
//       assert.equal(keysToString(objectOne), "a b ponies dingle");
//       assert.equal(keysToString(objectTwo), "c d crayons dangle");
//     });

function keysToString(object) {
     
  return Object.keys(object).join(' ')

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    
    // create array literal 
    var arr = [];
    // use for in loop to loop over object 
    for ( var key in object) {
        // use conditional to check if object val is a string
        if(typeof object[key] === 'string'){
            // if true, push into an arr
            arr.push(object[key]); 
        }
      
    }
    // return an arr use join mehtod
     return arr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//  /* global arrayOrObject  */
//     QUnit.test("arrayOrObject() : Should take one argument and return 'array' if its an array and 'object' if its an object", function(assert){
//       assert.equal(arrayOrObject({a:"one"}), "object");
//       assert.equal(arrayOrObject([1,2,{}]), "array");
//     });

function arrayOrObject(collection) {
    // will use if else statement to test for array using Array.isArray
if(Array.isArray(collection)){
    return "array"
    // will use type of to determine if value is object
} else if (typeof collection === "object"){
    return "object";
}

    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////


//  /* global capitalizeWord*/
//     QUnit.test("capitalizeWord() : Should take a string of one word, and return the word with its first letter capitalized", function(assert){
//       assert.equal(capitalizeWord("greg"), "Greg");
//       assert.equal(capitalizeWord("pumpkin"), "Pumpkin");
//       assert.equal(capitalizeWord("quattuordecillion"), "Quattuordecillion");
//     });
function capitalizeWord(string) {
 // will use bracket notation to access first character in string
 // will use .toUpperCase method to uppercase 
 //will use .slice method to attach the first cap letter 
 return string[0].toUpperCase() + string.slice(1);
}
//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////


    
    function capitalizeAllWords(string) {
// will use .toLower case and .split to lowercase and put in an array
var myArr = string.toLowerCase().split(" ")
// will use for loop to itterate over array
for(var i = 0; i < myArr.length; i++){
    // Will use charAt to return the character in string
    // will use toUpperCase to uppercase the first characters
    //will use .slice to add remaing array
    myArr[i] = myArr[i].charAt(0).toUpperCase() + myArr[i].slice(1);
}
    // use join() to turn array to string and return
    return myArr.join(" ");
}
    

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////


//  /* global  welcomeMessage*/
//     QUnit.test("welcomeMessage() : Should take an object with a name property and return 'Welcome <Name>!'", function(assert){
//       assert.equal(welcomeMessage({name: "bert"}), "Welcome Bert!");
//       assert.equal(welcomeMessage({name: "Charlie"}), "Welcome Charlie!");
//     });
function welcomeMessage(object) {
    
    
    // return the message, use the function we created capitalizeWord and pass object.name as par
    return "Welcome" + ' ' + capitalizeWord(object.name) + '!';
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    
    
    // return the message, use the function we created capitalizeWord and pass object.name as par
    // ans add 'is a' function  capitalizeWord(object.species);
 return capitalizeWord(object.name) + ' ' + 'is a' + ' ' + capitalizeWord(object.species);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//  QUnit.test("maybeNoises() : Should take an object, if this object has a noises array return them as a string separated by a space, if there are no noises return 'there are no noises'", function(assert){
//       assert.equal(maybeNoises({noises:["bark", "woof", "squeak","growl"]}), "bark woof squeak growl");
//       assert.equal(maybeNoises({noises: []}), "there are no noises");
//       assert.equal(maybeNoises({}), "there are no noises");
//     });

function maybeNoises(object) {
    
    // use conditional statemant to check object keys if less or equal to 0
    // if true return 'there are no noises';
    if(Object.keys(object).length <= 0) {
        return 'there are no noises';
        // use conditional statemant to check object keys if greater to 0
    } else if(object.noises.length > 0){
        // return object noises using join method 
        return object.noises.join(" ");
    }

   return "there are no noises";
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//  /* global  hasWord*/
//     QUnit.test("hasWord() : Should take a string of words and a word and return true if <word> 
//is in <string of words>, otherwise return false.", function(assert){
//       var data = "This is a super awesome string of words";
//       assert.strictEqual(hasWord(data, "awesome"), true);
//       assert.strictEqual(hasWord(data, "words"), true);
//       assert.strictEqual(hasWord(data, "turtle"), false);
//     });


function hasWord(string, word) {
    
    // apply conditional statement 
    // use includes method to check in word exists in the string of words
    if(string.includes(word)){
        // if passes return true, if not return false
        return true;
    }
     return false; 
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//  /* global addFriend */
//     QUnit.test("addFriend() : Should take a name and an object and add the name 
//     to the object's friends array then return the object", function(assert){
//       assert.deepEqual(addFriend("lester", {friends:[]}), {friends:["lester"]});
//       assert.deepEqual(addFriend("jimmy", {friends:["bobby","jones"]}), {friends:["bobby", "jones", "jimmy"]});
//     });


function addFriend (name, object) {
    
    //use push method to add name to friends array
    object.friends.push(name);
    // return an object
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//   /* global isFriend */
//     QUnit.test("isFriend() : Should take a name and an object and 
//   return true if <name> is a friend of <object> and false otherwise", function(assert){
//       assert.equal(isFriend("jimmy",{friends:["bobby", "ralf"]}), false);
//       assert.equal(isFriend("ralf",{friends:["bobby", "ralf"]}), true);
//       assert.equal(isFriend("chuck",{}), false);
//     });


    
    function isFriend(name, object) {
// will look if name exist in object friends list 
// if does not exist return false, if does return true
//if object is empty return false 
if(object.friends === undefined){
    return false;
} 
// will need to look through array for a match to return true ;
for(let i = 0; i < object.friends.length; i++){
    if(name === object.friends[i]){
        return true;
    }
}
// return false otherwise 
return false;
}
    
    

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

    // /* global nonFriends */
    // QUnit.test("nonFriends() : Should take a name and a list of people, 
    // and return a list of all the names that <name> is not friends with", function(assert){
    //   var data = [
    //     {name: "Jimmy", friends:["Sara", "Liza"]},
    //     {name: "Bob", friends:[]},
    //     {name: "Liza", friends: ["Jimmy"]},
    //     {name: "Sara", friends: ["Jimmy"]}
    //   ];
    //   assert.deepEqual(nonFriends("Jimmy", data), ["Bob"]);
    //   assert.deepEqual(nonFriends("Bob", data), ["Jimmy", "Liza", "Sara"]);
    //   assert.deepEqual(nonFriends("Sara", data), ["Bob","Liza"]);
    // });


function nonFriends(name, array) {
    
    
    // create a array literal to holds tha names that do not friend with
    var listName = [];
   
    // var start is set conditiona
    var start = false;
    // use for loop to throught an array
    // and check conditioan if name at index location in the array
    // assign start to that array at i
    for(let i = 0; i < array.length; i++){
        if(name === array[i].name) {
            start = array[i];
        } else {
            // else push that name to the listName array
            listName.push(array[i].name);
        }
    }
    // if start is null, return the listName array
     if(start === null){
         return listName;
     }
     
     // create another holdes with final output
     var finalList = [];
     // now loop through an listName array
    for(var i = 0; i < listName.length; i++) {
        
    // use the conditional statement and test if index of listName === -1
        if(start.friends.indexOf(listName[i]) === -1) {
            finalList.push(listName[i]);
        }
    }
   return finalList;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//   /* global updateObject */
//     QUnit.test("updateObject() : Should take an object, a key and a value. 
//    Should update the property <key> on <object> with new <value>. If <key> does not exist on <object> create it.", function(assert){
//       var data = {a: "one", b: "two", "hokey": false};
//       assert.deepEqual(updateObject(data, "b", "three"), {a:"one", b:"three", hokey: false});
//       var data = {a: "one", b: "two", "hokey": false};
//       assert.deepEqual(updateObject(data, "ponies", "yes"), {a:"one", b:"two", hokey: false, ponies: "yes"});
//       var data = {a: "one", b: "two", "hokey": false};
//       assert.deepEqual(updateObject(data, "a", Infinity), {a:Infinity, b:"two", hokey: false});
//     });

function updateObject(object, key, value) {
    // use bracket notation to update value
    object[key] = value;
    //return and object
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

//   /* global removeProperties */
//     QUnit.test("removeProperties() : Should take an object and an array of strings. 
//Should remove any properties on <object> that are listed in <array>", function(assert){
//       var data = {a: "one", b: "two", "hokey": false};
//       removeProperties(data, ["a","hokey"]);
//       assert.deepEqual(data, {b: "two"});

//       var data = {a: "one", b: "two", "hokey": false};
//       removeProperties(data, ["b"])
//       assert.deepEqual(data, {a: "one", "hokey": false});

//       var data = {a: "one", b: "two", hokey: false};
//       removeProperties(data, []);
//       assert.deepEqual(data, {a: "one", b: "two", "hokey": false});
//     });

function removeProperties(object, array) {
    
       // use for loop to remove any property that are in the array
        for(let i = 0; i < array.length; i++) {
            delete object[array[i]];
        }


}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//   /* global dedup */
//     QUnit.test( "dedup() : Should take an array and return an array with all the duplicates removed", function( assert ) {
//       var arrayOne = [1,2,2,2,3,4,5,5,5,5,"a","b","b","b","c"];
//       var arrayTwo = ["hello", "hello", "hello", "hello", "hello", "world", "hello", "world", "world", "world"];
//       assert.deepEqual(dedup(arrayOne), [1,2,3,4,5,"a","b","c"]);
//       assert.deepEqual(dedup(arrayTwo), ["hello", "world"]);
//     });


function dedup(array) {
    // use Set, it allows you to print Unique values form any data
    return [...new Set(array)];

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}