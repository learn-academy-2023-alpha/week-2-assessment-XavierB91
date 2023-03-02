// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

// const cohort = "Alpha 2023"
// console.log(cohort.split(""))

// a) Your answer: The returning array should be ['a', 'l', 'p', 'a', ' ', '2', '0' , '2', '3']
// b) Verify and explain:  output : 'A', 'l', 'p', 'h',
//   'a', ' ', '2', '0',
//   '2', '3'
// ] the built-in javascript method .split will transform the string of "alpha2023" into singular characters with thier own quotation marks. .split iterates over the array counting each character as a seperate entity using the quotation marks as the indicator as to where to make the change.  In javascript, arrays and strings have similar properties due to this we can be fleixble with our code and manipulate certain properties of the array and string data type to get the desired result.  I called upon the . split method to execute the code and divide the string "alpha2023 " into an ordered list of substrings which are returned to me within an array ['a', 'l', 'p', 'a', ' ', '2', '0' , '2', '3']. 

// --------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------
// --------------------2) What will this log?

// const greeter = (name) => {
//    `Hello, ${name}!`
// }
// console.log(greeter("LEARN Student"))

// a) Your answer: the predicted out will be the string " Hello Learn Student"
// b) Verify and explain:  The output was undefined.
//  I believe this is due to  lack of return statement within the function. The function fails to give back a result when I call upon it, because the return value is not specified/ designated . The return keyword ends function execution and returns the specified value to the location where it was called.  In functions we can give back an result  when we specify a return value.  The function greeter was unable to give back the proper result. After adding the return value, and completing the function, I recieved " Hello, LEARN Student !" as the output . 
 //  revised function 
//  const greeter = (name) => {
//   return `Hello, ${name}!`
// }
// console.log(greeter("LEARN Student"))

// --------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------
// --------------------3) What will this log?

// const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: The expect output will be [8,10,12,14,16]
// b) Verify and explain: output: [ 8, 10, 12, 14, 16 ] the .map method executes a callback function on each element located within the array. It returns a new array made up of the return vaules from the callback function. a callback function is a function that is passes into another function as an argument: .map((number) => number * 2). In the above problem, we used the .map method to add the original values mulitplied by 2 into a new array. Since the values are a number data type we can perform multiplication and other arthmetic operations on it. 

// --------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------

// --------------------4) What will this log?

// const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: Expected output : [11,13,,15]
// b) Verify and explain: output: [ 11, 13, 15 ] the filter method executes a callback function on each element inside of the array. The call back function for each of the elements must return with either an true or false. A call back function is a function that is passed into another function as an argument. The returned array is a new array with any elements for which the callback function returns true.  We wanted to log only odd numbers, so we asked the function to filter out only the odds by checking if any of the numbers was not divisble by 2 ..filter((number) => number % 2 !== 0) An odd number is any number that is not evenly divisible by 2. An even number is any number that is evenly divisible by 2, hence we received the above array. 


// --------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------


// --------------------5) What will this log?

// const myCodingSkills = {
//   languages: ["JavaScript", "Ruby"],
//   frameworks: ["React", "Ruby on Rails"],
//   databases: "PostgreSQL",
//   versionControl: "GitHub"
// }
// console.log(myCodingSkills.languages[0])

// a) Your answer: Expected outcome "javascript"
// b) Verify and explain: objects and arrays are often combined when working in Javascript, arrays are are considered a special type of object because they have indexed properties. The object myCodingskills contains the array  ["JavaScript", "Ruby"], within it. Because "javascript" is the first value located with in the array it is given the number 0 as the first element index. The element( "javascript") can be called upon by using the array name(myCodingSkills) the name of the property (languages), and the index surronded by square brackets[0] 
