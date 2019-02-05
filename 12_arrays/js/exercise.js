/**
 * Javascript Exercise: Data Types
 * Most of your answers should be stored in variables called q1, q2 etc.. and the variables printed to the console.


let q0 = 'something';
console.log("Question 0" + q0);

 */

/**
 * Question 1
 * Create an array of image sources and name it q1. Use the strings blue, green, red, and yellow as the array values.
 */

 let q1 =['blue', 'green', 'red', 'yellow'];

// console.log("Question 1: " + q1);

/**
 * Question 2
 * Using q1 from the last question, store the first element of the array in variable q2.
 */

let q2 = q1[0];
$('body').css("color", q2);
//
// console.log("Question 2: " + q2);

/**
 * Question 3
 * Get the length of the first array (number of elements in the array) and store it in variable q3
 */

// let q3= q1.length;
// console.log("Question 3: " + q3);

// /**
//  * Question 4
//  *  Using q1, store the last element of the array in variable q4. Hint: How can we get the number of elements in the array?
//  */

let q4= q1[q1.length-1];
$('body').css("background-color", q4);
// console.log("Question 4: " + q4);
//
// /**
//  * Question 5
//  *  Using the variables from questions 2 and 4, and $().css(), write code that would change:
//  *   the body's css 'color' to q2
//  *   the body's css 'background-color' to q4
//  * No need to console.log, you should see the results immediately
//  */
