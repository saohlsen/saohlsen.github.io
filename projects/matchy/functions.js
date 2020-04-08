/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// ## Step 1 - Search
//  1. Open up the file `functions.js` in your editor.
//  2. Implement a function declaration called `search` that:
//   - Takes a paramater representing an Array of `animals`.
//   - Takes a paramater representing a String, the name of an animal on which to perform a search.
//   - Looks through the `animals` Array, and returns the animal's Object if an animal with that name exists.
//   - Returns `null` if no animal with that name exists
//  3. Use the search bar at the top of the page to make sure your function works.



function search(animals, name) {
    
    // use for loop to cycle through lenght of an arrray of animals.
    for(var i = 0; i < animals.length; i++) {
        // apply conditional statment to look if the name exists in the array
        if (animals[i].name === name) {
            // if yes, return the object that holds that name
            return animals[i];
        } 
        // if not return null
    } return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// ## Step 2 - Replace
//  1. Write a function declaration called `replace` with a signature of `replace(animals, name, replacement) { //... } ` that:
//   - Takes 3 parameters, an Array of animals, a String representing  the name of an animal on which to perform a search, and an Object that represents the replacement animal.
//   - If an animal with that name exists within the `animals` Array, replace it's entire Object with the replacement Object.
//   - Otherwise do nothing.
//  2. Preview the `index.html` page to test it on the website.


function replace(animals, name, replacement) {
    
    // use for loop to cycle through length of an array of animal
    for (var i = 0; i < animals.length; i++) {
        
        // apply conditional statment to check if the name exists withing the animals array
        if (name === animals[i].name) {
            // if yes replace, replace its entire object
            // use splice method,:
            // 1st - i - index at which to start changing an array
            // 2nd - 1 - interger indicating number of elements to remove form an array, form starting porition
            // replacement - what to replace with 
            return animals.splice(i, 1, replacement);
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// ## Step 3 - Remove
//  1. Write a function declaration called `remove` with a signature of `remove(animals, name)` that:
//   - Takes 2 parameters, an Array of animals, and a name of an animal on which to perform a search.
//   - If an animal with that name exists within the `animals` Array, remove it.
//  2. Test that it works on the website.



function remove(animals, name) {
    
    // use for loop to loop thorough animals array
    
    for(var i = 0; i < animals.length; i++) {
        // apply conditional statement to check if name exists in the array of animals
        if(name === animals[i].name) {
            // if true, remove it, use slice method with only 2 idicators, start and hoh many elements to remove
         animals.splice(i, 1);
        }
    }
    
}






//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// ## Step 4 - Add
//  1. Write a function declaration called `add` with a signature of `add(animals, animal) { //... }` that:
//   - Takes 2 parameter, an Array of animals, and an Object representing a new animal to be added.
//   - Checks that the animal Object has a `name` property with a length > 0.
//   - Checks that the animal Object has a `species` property with a length > 0.
//   - Has a **unique** name, meaning no other animals have that name.
//   - Adds this new Object to the `animals` Array, **only** if all the other conditions pass.
//   - Make sure it works.


function add(animals, animal){
    
    //use for loop to cycle through lenght of an array
    
    for(var i = 0; i <= animals.length-1; i++ ){
        // apply conditional statement
        // if animals object has name with lenght > 0
        // or if animals object has species with lenght > 0
        // or name is unique 
        if(!(animals[i].name.length > 0) || !(animals[i].species.length > 0) || animal.name === animals[i].name) {
            // if false return false
            return null; 
        }
    }
    // if all conditions passes add new object to the anmal arrays 
    animals.push(animal);
}




/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
