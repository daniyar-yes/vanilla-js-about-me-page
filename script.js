//JS as a language (theory)

// variables - storage, cup (for a liquid - liquid is your value)
// variable is a named allocated space in memory
// name of variable is it's address in memory (for us)

// IMPORTANT: you cannot use JS keywords as variable names
// there are many special words reserved as keywords in JS the language
// if you need to 'remember' something in your code
// put it in a variable
// 2 logical steps: 
// 1. declare your variable with a name
// 2. assign value to that ariable by it's name
// = is used to put value inside the variable
// = is not 'equals' in JS / programming
// == this is equal (math)

// keywords in JS to declare variables:
// let, const, var
// let - for something that is meant to be changed
// const - for something that is meant to remain unchanged
// var - for GLOBAL (scope) VARIABLE ONLY

// task: create 2 variables using 'let'
// create 2 variable using 'const'
// output all 4 in the console (4 console.log(varName) commands)
// then try updating the values in all 4
// see the errror in trying to update const
// remove the error (remove attempt to change const)
// show the consoles before and after 'let' variables changed.

// where the variable is lcoated in code affects 
// if the variable exists (when the attempt to read happened)

let number1 = 100;





let number2 = 200;



// data types in JS
// Primitives (simple data types)

// string (line of text/number characters)
// NOTE: char length does not translate to width in px

let templateLiteralString = 'literal'
let stringExample = 'some text'
let stringExample2 = "some other text"
let stringExample3 = `some text with backticks and 12312321 numbers`
let stringExample4 = `some string with template ${templateLiteralString}`


// numbers
// in JS there is only one main type for numbers - number
// but there is also a BigInt type in JS for Big Integer numbers

let intNumberExample = 100;
let floatNumberExample = 3.14;

// NaN - not a number
// NaN is also a number

// -0 === 0
// true
// +0 === 0
// true
// -0 === +0
// true
// Infinity
// 1 / -0
// -Infinity
// Object.is(-0,+0)
// false
// Object.is(-0,0)
// false
// Object.is(0,0)
// true
// Object.is(0,+0)
// true

// boolean - logical data type, saying 'yes' or 'no', flags
let booleanValue = true;
let booleanValue2 = false;

// 1 ~ true
// 0 ~ false
// binary true/false, 0/1, high-level/low-level, on/off, flag up / flag down
// non empty? true
// empty? false
// has length? true
// has no length? false

// truthy / falsy values when we get to Comparison and Type Conversion

// undefined (exists, but don't have a value)
let newVariable1;


// null - like nothing, but intentional nothing
// when you don't want to leave the value 'undefined',
// but you don't know what to put or want to put nothing


// Compound/complex data types
// {} objects

const jobObject = {
    jobName: '',
    jobDescription: ''
}
// [] arrays

let myArray = [1,2,'apple', true, false, '12', 12]



myArray.push('thirteen')
myArray.push(14)
myArray.push(true)
myArray.push(false)






// functions
// object in JS (array, string, etc. -> data structures in JS)
// basic operations: assignment of value, comparison
// logical branching / flow control (if / else) statement
// once again, FUNCTIONS FUNCTION FUNCTIONS because REACT is all about JS FUNCTIONS


// JS in connection to the actual coding / frontend development / running in browser (practical side of JS)

// JSX (html in JS)
// event listeners / handlers
// query selectors
// EVENT LOOP
// BROWSER ITSELF (how it treats / reads / runs JS)



// event listeners, functions, binding elements to functions

const myButton = document.querySelector('#testing-btn');

const myName = 'Daniyar';

// const num1 = document event target from input1
// const num2 = document event target from input2

function addTwoNumbers (num1, num2) {
    console.log('have called function')
    // also update the target value of a span id="result-of-addition"
    return num1 + num2;
}
myButton.addEventListener('click', addTwoNumbers)