
//Variables are used to hold data

//var myFirstVariable = "Hello World";
//let myFirstVariable = null;

//A variable that DOESN'T change once you have assigned a value.
const myFirstVariable = 10;

// Datatypes
1000;
"String";
'String'; 
'<p>This looks like HTML, but it is a string in JavaScript</p>';
true;
false;

// Arrays & Objects
// Arrays are Objects, BUT objects are not arrays!
let myArray = [];

// Array of 10 unknown (length of the Array)
let myArray2 = new Array(10);

myArray[0] = 'hello'
myArray[10000] = 'goodbye';

let myObject = {};
let myObject2 = new Object();

// Comparison Operators
// == compares and converts values if different
// === compares values AND datatypes
// < or <=
// > or >=
// != or !==

// mathematical Operators

// +, -, /, *, %

// Logical Operators
// && AND
// || OR

// 2 % 4 = 0; Evan number
// 3 % 4 = 1; Odd number

// if Statements
 if(false) {}

 if (false) {} else {}

 // else if will ONLY run if the PREVIOUS conditions was false
 if(false) {} else if (false) {}

 // both if statements will run regardless of each other's condition.
 if (false) {}
 if (false) {}

 // Loops

// Similar as if statement but once done, runs it again if the condition is true.
 while (false) {}

 do {} while (false);

 for (let i = 0; i < 10; i++) {};

 // Functions

 let actualPINumber = Math.PI;

 function myFunction() {

 }
 myFunction();

 let a = 100;
 let b = a;
 let c = b;
 let d = c;

 var z = myFunction;
 var y = z;
 var x = y;

 // Test if we can pass function definitions when we use "Traditional" function definition.
 x();
// Perameters
 function myFunction2(myFirstPerameter) {
    myFirstPerameter;

    
 }
// Arguments
 myFunction2("Hello World!");
 myFunction2("Goodbye World!");

 console.log("This script has finished!");








