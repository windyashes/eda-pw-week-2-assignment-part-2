// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We create a variable called 'name' and give it a string value of 'Dane'
// We then check if the variable is equal to 'Mary' without type conversion. If it is, we log to console 'Hi, Mary!'
// Otherwise, we log to the console 'How do you do?'
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We create a variable called 'secret'
// We create a variable called 'code' and set it to the number 123
// We then check if code is equal to the number 123
// If it is, the variable secret is set to the string 'super' and code is set to itself multiplied by 2.
// We then move on to a different if statement, that checks if the variable code is more than 250
// If it is, the variable secret is set to the string 'duper'
// At the end of the code, the variable secret is logged to the console.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We create a variable called 'isStudent' and set it to the boolean value of true
// We then create a variable called 'age' and set it to the number 34
// Next, we create a variable called 'zip' and set it to the number 55407
/* We create a conditional that checks if isStudent is set to the boolean value true AND zip is greater than 80000
    If it is, we log to console 'You're a student on the West Coast!'
    If it isn't, we then check if isStudent is set to the boolean value false OR the variable age is less than 30
      If it is, we log to console 'What are your hobbies?'
      If it isn't, we check if isStudent is equal to the boolean value true
        If it is, we log to console 'Welcome to Prime!'
        If it isn't, we log to console 'How about the weather?'
*/

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - The variable colorOne is supposed to be set to 'blue' and colorTwo is supposed to be set to 'red'
// Should be:
// let colorOne = 'blue';
// let colorOne = 'red';
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  // FIX - The code below only sets colorOne to 'purple',but it needs to set colorTwo to 'purple' as well.
  // Needs an addition of colorTwo = 'purple';
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
// FIX - time is supposed to be a variable, not a constant.
// Should be let time = 4;
const time = 4;

// FIX - This conditional is only checking if one thing or the other is true. It needs to be checking if they are both true at the same time.
// Should be if(temp > 39 && time >= 4) {
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
// FIX - minAge is supposed to be variable, not constant.
// Should be let minAge = 21;
const minAge = 21;

// FIX - the conditional below will prove true even when someone who is 21 tries to enter. It needs to be less than instead of less than or equal to so that the age 21 can be allowed entry.
// Should be if(minAge < age) {
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

