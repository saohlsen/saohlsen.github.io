/*
* OPERATORS:
*
* 0. Operators are expressed by symbols that are used to perform an action, 
to assign or compare values. 
* They allow to create a single value form other one or more values.
*/
// 1.  Binary Operator
// Needs 2 oprands one before and one after the operator

var myBinaryOperator =  2 + 3;
console.log(myBinaryOperator); // prints => 5

// 2. Unary Operator
// Needs single operands, eather before or after the operatot.

var y = 6;
y++;
console.log(y); // => prints => 7


// 3. Assignment Operators 
/*
* It is used to assigned value to variables.

*   =	 
*   +=	
*   -=
*   *=	
*   /=	
*   %=	
*   **=	
*/

var age = 22; 
console.log(age); // prints => 22

var num = 22;
num += 5;
console.log(num);  // prints => 27

var num2 = 25;
num2 %= 5;
console.log(num2)  // prints => 0


// 4. Comparison operators 
/*
* Used in conditional statements to determine if equal or not between variables
or value 
*
* ==	equal to
* ===	equal value and equal type
* !=	not equal
* !==	not equal value or not equal type
* >	greater than
* <	less than
* >=	greater than or equal to
* <=	less than or equal to
* ?	ternary operator
*/
var x = 2;
var y = 2;
x === y;     // prints => true
x == '2';    // prints => true
x === '2';   // prints => false
x > y;       // prints => false




// 4.  Arithmetic Operators

/* Arithmetic operators are used to perform arithmetic on numbers/variables

*     + 	Addition
*     - 	Subtraction
*     * 	Multiplication
*     / 	Division
*     % 	Modulus
*    ++ 	Increment
*    -- 	Decrement
*/

var a = 3;
++a;       // prints => 4
--a;       // prints => 3
a * 2;     // prints => 6


// 5. Logical Operator 

/* Logical Operators are used to determine the LOGIC between values.
* &&	logical and
* ||	logical or
* !	logical not
*/


true || false;      // prints => true
false && false;     // prints => false
false == !true;      // prints => true



// 6. Teranary 
/* The JavaScript ternary operator is the only operator that takes three operands.
*The condition is an expression that evaluates to a Boolean value, either true or false. 
*If the condition is true , the ternary operator returns expression_1 , 
otherwise it returns the expression_2
*/

// Syntax
// condition ? value_if_true : value_if_false

true ? true : false;  // prints => true
true ? false : false; // prints => false


