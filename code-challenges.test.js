// ASSESSMENT 2: Coding Practical Questions with Jest

const { valueToNode } = require("@babel/types")
const { number, string, array } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest
// describe("greeter", () => {
//   it("returns a generic greeting", () => {
//     expect(greeter()).toEqual("Hello, LEARN student!")
//   })
// })

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.
describe("multBy3", () => {
  it("takes an array of numbers and returns an array with all of the numbers multiplied by 3", () => {
    const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

    expect(multBy3(numbersArray1)).toEqual(([18, 21, 24, 27, 30]))
    expect(multBy3(numbersArray2)).toEqual(([72, 81, 90, 99, 108]))
  })
})
//  ReferenceError: multBy3 is not defined

// b) Create the function that makes the test pass.
// parameter will be an array of numbers called array
// Iterate on array using .map method
// take current value multiply by 3
// return array 
 const multBy3 = (array) => {
    return array.map(value => value * 3)
 }
//  PASS  ./code-challenges.test.js
//   multBy3
//   ✓ takes an array of numbers and returns an array with all of the numbers multiplied by 3 (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total


// --------------------1)

// // a) Create a test with expect statements for each of the variables provided.
describe("divisbleBy3", () => {
    it("takes an object as an argument and returns with a statement on if the value inside it is evenly divisible by the number 3", () => {
        const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"
expect(divisbleBy3(object1)).toEqual("15 is divisible by three"),
expect(divisbleBy3(object2)).toEqual ("0 is divisible by three"),
expect(divisbleBy3(object3)).toEqual("-7 is not divisible by three")

    })
    })
    // ReferenceError: divisbleBy3 is not defined




// b) Create the function that makes the test pass.
// psuedocode :create a function named divisbleBy3 that takes in an object as an argument and number as a value. 
// input will be an object , the parameter will be named division. 
// iterate on object via string interpolation to %3 ===0 to determine if the objects value is divisible by 3.
// expected output  return a statment stating "15 is divisible by three","0 is divisible by three" and "-7 is not divisible by three"
// it took me about 4 hours to complete this assessment challenge question. I believe I overcomplicated the syntax in my head and struggled to properly express what I meant to accomplish during the process. In the future I will use my psuedocode as more of a guideline to keep me on the right path. 

const object1 = { number: 15 }
const object2 = { number: 0 }
const object3 = { number: -7 }

const divisbleBy3 = (division) => {
  
  if (division.number % 3 === 0) {
      return `${division.number} is divisible by three` }
     else if (division.number  % 3 === 0 ){
     return `${division.number}} is divisible by three` }
     else if  (division.number  % 3 !== 0 ) {
     return `${division.number} is not divisible by three` }
     else {
        return "enter numerical value"
     }
    }

     
//     { number: 15 }
// console.log
//   { number: 0 }
// console.log
//   { number: -7 }
// PASS  ./code-challenges.test.js
// divisbleBy3
//   ✓ takes an object as an argument and returns with a statement on if the value inside it is evenly divisible by the number 3 (22 ms)

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.354 s, estimated 1 s
// Ran all test suites.
    

 

    
    





// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.
describe("nounFinder1", () => {
      it("takes in an array of words and returns an array with all the words capitalized", () => { 
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

    
        expect(nounfinder1(randomNouns1)).toEqual( ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(nounfinder1(randomNouns2)).toEqual( ["Temperature", "Database", "Chopsticks", "Mango"])
      })
    })


// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
// ● nounFinder › takes in an array of words and returns an array with all the words capitalized
// ReferenceError: nounFinder is not defined

// b) Create the function that makes the test pass.
// Psuedocode: create a function named Nounfinder1 and Nounfinder2
// parameter will be an array named array
// Input : we want to input an array of strings
//  Output: we expect to return an array of strings with all of the words capitalized within. 
// create a function that takes in an array of words and returns array with all the words capitalized
const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// // declare a function that takes in an array
const Nounfinder1 = (array) => {
    //  return the array output from the map action
    return array.map ( (value) => {
        // with each value access the first index and capitalize the letter then concatenate the remainder of the word
        return value[0].toUppercase() + value.conCat(1)
    } )
}
// I keep getting the     ReferenceError: nounfinder1 is not defined, I've tried a variety of different syntax's to tackle this problem and I believe I'm over thinking the process. I understand the overall concept of testing and creating higher order functions, however I'm struggling with implementation.  I would like for someone to go over the logic behind this process a bit more, perhaps in this weeks office hours.  I've ran the test about 10 different times over the last 3 hours, so at this point I will opt to move on from this problem and tackle another . 


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.
 describe("firstVowels", () => {
    it("logs the index of the first vowel", ()=> {
        const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

      expect(firstVowels(vowelTester1.indexOf(1))).toEqual(1)
      expect(firstVowels(vowelTester2.indexOf(0))).toEqual(0)
      expect(firstVowels(vowelTester3.indexOf(2))).toEqual(2)
  } )
 })
//  ReferenceError: firstVowels is not defined

// b) Create the function that makes the test pass.
// psuedocode: // parameter will be an string
// Input : we want to input strings
//  Output: we expect to return an an index value for the associated strings.
//  I want to find the index for "l" in learn , "a" for academy and "a" in challenges
// I have a hunch that I can use the .indexOf method to retrive the vowels. 
// const firstVowels = () => {
	
// 		// Original string
//         const vowelTester1 = "learn";
	
// 		// Finding index of occurrence of 'l'
// 		var index = vowelTester1.indexOf('l');
		
// 	}
	



// const firstVowels = (value, array) => {
//     let index = -1;
//     array.forEach((i) => {
//       if (item === value) {
//          index = i;
//     }
//   });
//   return index;
//  }

  
// after two hours of staring at my screen and trying various combinations of syntax in my function, I haven't been able to create a function that can make the test pass successfully. Having a lot of difficulty in the overall structure and formatting of the higer end functions/objects. I'm really struggling without the help of a partner to help me double check and process my code. I feel like I'm severly overcomplicating this assignment.  Based on my psuedocode, I have a good ideal of what I want to accomplish with this test but I don't know how to quite put it together without guidance. Kind of like working on a math formula, I just don't get what pieces fit together to get the desired outcome. 
    


    
