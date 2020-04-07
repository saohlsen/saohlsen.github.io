// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
   // create object that holds parapeters form makeContact function with assigned value
   var oContact = { id: id, nameFirst: nameFirst, nameLast: nameLast };
   // return an object
    return oContact; 
    

} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
     
     //create array literal
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        
        // create addContact API, that value is function that passes an object that is pushed into an array literal
        addContact: function(object) {
            contacts.push(object);
        },
        // create findCOntact API, that holds function which passes fullName as par
        // ii fullName exists, return and that contact at index location 
        findContact: function(fullName) {
            for(var i = 0; i < contacts.length; i++) {
                if(fullName === contacts[i]['nameFirst'] + " " + contacts[i]['nameLast']) {
                    return contacts[i];
                }
            }
        },
        // create API removeContacts, holds function that is passing object
        // use shift methos to remove object form contacts array
        removeContact: function(object) {
            contacts.shift(object);
        },
    
        // create API that prints all contact
        //use for loop, to loop throuh contacts array, and push all contact into created array that will hold them
        printAllContactNames: function() {
          var allAPI= [];
            for(var i = 0; i < contacts.length; i++) {
              allAPI.push(contacts[i]['nameFirst'] + ' ' + contacts[i]['nameLast'] + '\n');
            
        }
        
        // return an array, use join method and trim to rwmove white space
        return allAPI.join('').trim(contacts.length-1);
    }
};
}


// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
