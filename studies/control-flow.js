
/*
* CONTROL FLOW:
*
* 0. Control Flow.
* It is set order in which the computer completes statements by asking true or 
* false questions. 
* Statements are JacaScript sentances or commands, terminated wth semicolon. 
*/

// Conditional Statement IF - Else if - Else
/*
**** IF ***
The if statement executes a statement if the condition is true, and stops the flow.
Conditional statement will always need to start with If. 


**** ELSE IF ****
But if condition is false, another statement can be executed - Else if - if true, flow stops. 
We can have multiple else if statements. 

**** ELSE ****
If else if condition is false, another statement can be executed using the else statement.
It can only run if all prior conditions are false.
Else can be a default statement to any of the block code.

****Syntaax for if-else if-else chain


if(condition ) {
  what we want to do;
}  else if (condition) {
    What we want to do if else if is true;
}    else {
      Default action we want to do;
}


The 'If'condition will determine if code that is in {} will run or not. 
If code is true, it will run and it will stop execution.
But if condition is false it will move to 'Else if' or 'Else' statement.
We can have 0 or as many else if statements as we need,
but only one 'If' and 'else' statement, 'else' statement is a default statement
and will run when all previous condition are false

*/



// IF Flow
var store = 'open';
if (store === 'open') {
  console.log('Let\'s got shopping.');    // prints => Let's g shopping.
}

// IF - Else if - Else Flow
var language = "Spanish";
if (language === 'English') {           // condition is in ()
  console.log('I speak English.');      // action to be performed  
} else if (language === 'German') {
  console.log('I speak German.');
} else if (language === 'Polish') {
  console.log ('I speak Polish.')
} else {
  console.log('I only speak English.')    // prints => I only speak English. 
}

// If and Else flow only
var hungry = true;
if (hungry === false) {
  console.log('Don\'t want to eat now');
} else {
  console.log('I need to eat now!')   // prints => I need to eat now. 
}

// Switch
/*
* It is similar statement to conditional, where we can execute many many code blocks. 
*
*/

// Switch statement flow

/* We would use switch statement when we have long chain of condition, it will help 
* to keep clean order. Below syntax, each code block must be followed by break,
* and needs default statement that will run when all previous conditions are false.
* 
*switch(my expression) {
*  case a:
*    // code block we want to run
*    break;
*  case b:
*    // code block we want to run
*    break;
*  default:
*    // code block we want to run
*}
*/


var dress = 'pink';
switch(dress) {
  case 'green':
    console.log('She has green dress.'); // code block
    break;
  case 'red':
    console.log('She has red dress.');  // code block
    break;
  case 'black':
    console.log('She has black dress.');  // code block 
    break;  
  default:
    console.log('She needs to buy dress.');
    // prints => She needs to buy new dress, reads default condition as all before are false.
    
}
