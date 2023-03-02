# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: Both parameters and arguments are sets of data used when working with functions.  An arugument is a value that is passed to a method when it is invoked by the user i.e. the argument is the data that you pass into the method. Concurrently, an parameter is a variable defined by a method that recieves a value when the method is called. An easy way to think about it is that parameters are a place holder or "fake" values used in a method, whereas a argument is regarded as real values to the function.

Researched answer :
from the book JavaScript from Beginner to Professional by Svekis, Percival, and Putten. "both terms are commonly used to mean the information that is passed into a function. A parameter is defined as the variable listed inside the parentheses of the function definition, the parameters declare the scope of the function.  Whereas with arguments, depending on the arguments you are calling with the function, the outcome of the function can change, which makes the function a very powerful and flexible buliding block." 

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: .map() takes two predefined parameters, the first parameter is the function which will be applied to each element, the function is a required parameter that must be present for the method to work properly.  The second parameter is optional callback that we can use if necessary called this. 


Researched answer: " The .map () method executes a callback function on each element in an array. It returns a new array made up of the return valuse from the callback function. The original array does not get altered, the returned array may contain different elements than the original array."- Codeacademy.com 
"Parameters: This method accepts two parameters as mentioned above and described below:
function(currentValue, index, arr): It is a required parameter and it runs on each element of the array. It contains three parameters which are listed below:
currentValue: It is a required parameter and it holds the value of the element.
index: It is an optional parameter and it holds the index of the element.
arr: It is an optional parameter and it holds the array.
thisValue: It is an optional parameter and is used to hold the value passed to the function. "
-geeksforgeeks.org 

3. What is the difference between map and filter?

Your answer: the .map method executes a callback function that iterrates over each element in an array and allow you to add values to an array.
Whereas as the . filter method executes a callback function that allows you pull specified elements from the array. 


Researched answer:
"Map and  Filter are Array methods which help to create new arrays in various ways. They are all 'higher order' functions because they take user-defined functions as parameters.

Map: returns an array of with pieces of data from the original array. In the callback function,  it returns the data you wish to be part of the new array via .map.

Filter: returns a subset of the original array based on custom criteria. For example, if you only want to return Vowels in an function, filter allow you to retreive those specific values. In your callback function, it will return a boolean value to determine whether or not each item will be included in the new array." 
https://thinkster.io/tutorials/100-front-end-interview-questions-challenge/map-vs-filter-vs-reduce


1. What is iteration?

Your answer: Iteration is basically a way for the system to count along an array and execute code for each element within the array or object.  Iteration allows us to do this. forEach and .map are two examples of iteration methods that we use when interacting with the javascript language. 

Researched answer: 
" within Javascript, we often use arrays which are list-like objects that have the ability to store many different types of data and peform different operations based on the data located inside. Arrays are a dynamic and flexible collection of code that can contain elements from strings, numbers, and objects. How do we work with such a dynamic code? since arrays are indexed object, we use Iteration methods to count and access it.  Iteration is the repetetion of an process, a way in which we can navigate an array or object and dynamically access and execute on an elements within an array. In JavaScript an iterator is an object which defines a sequence and potentially a return value upon its execution." https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators, https://www.educative.io/answers/javascript-iteration-methods


1. What is the difference between a function and a method?

Your answer : a method and a function are closely related. They are both programs that have parameters, both can perform some form of operation and both can pontentially return a value. The major difference between the two is that methods are specific functions that are tied to an particular object.  Sufficent to say: Functions stand alone like lone wolfs whereas methods have attachments that they are forever associated with, like a alumni at a school. 

Researched answer: " FUnctions can execute a set of instructions on data or variables and return the result. Functions are dynamic, and can be repeatedly used to improve effecieny when writing code. Methods, like our bulit-in methods not as dynamic in thier data structure. A method is like a function in that it is a set of instructions that execute upon a task, however they are heavyly reliant on being attached with an object."
https://www.codecademy.com/article/fwd-js-methods-functions



6. STRETCH: What is hoisting in JavaScript?
Your answer : I have no ideal what hoisting  in java script is to be honest . I will due research and get back to you with an sufficent answer. 


Researched answer:  Even after researching, I'm still unclear on what exactly hoisting in javascript is, so it's pretty challeging to put it in my own words. However  I did find a few defintions on the internet that I hope will suffice until I fill that gap within my knowledge base . I.e I don't know it know, but I'll get back to you when I find someone who does ! Hoisting
"JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code."  https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
"Hoisting is a concept that enables us to extract values of variables and functions even before initializing/assigning value without getting errors and this happens during the 1st phase (memory creation phase) of the Execution Context.

Features of Hoisting:

In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution. Basically, it gives us an advantage that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local. 
It allows us to call functions before even writing them in our code. "
https://www.geeksforgeeks.org/javascript-hoisting/

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Classes: "Classes in javascript encapsulate data and functions that are part of that class. If you create a class, you can later create objects using that class. Classes are essentially blueprints for object creation.
" from the book JavaScript from Beginner to Professional by Svekis, Percival, and Putten.
2. Spread operator: "The spread operator is a special operator. It consist of three dots used before a referenced expression or string, and it spreads out the arguments or elements of an or elements of an array.
let spread = [ "so", "much", "fun"]
let message =[ "javascript", "is", ...spread, "and", "very", "powerful"];
Return // ['javascript', 'is', 'so', 'much', 'fun' , 'and', 'very', 'powerful']
the element of the spread operator become individual elements in the new array." from the book JavaScript from Beginner to Professional by Svekis, Percival, and Putten.

3. React state: "React is an frontend library used to build beautiful and dynamic user interfaces. The state is a built-in react object that is used to contain data or information that can be changed over time. A state can be changed based on the users input or network changes. Everytime the state of an object changes, React renders the object to the browser" https://www.simplilearn.com/tutorials/reactjs-tutorial/reactjs-state#:~:text=DevelopmentExplore%20Program-,What%20Is%20'State'%20in%20ReactJS%3F,%2C%20the%20component%20re%2Drenders.

4. React props: "Props stand for properties. Props are arguments used to pass data to react components. Props are immutable i.e. unchangable- once they are set, props cannot be changed." https://www.w3schools.com/react/react_props.asp#:~:text=Props%20are%20arguments%20passed%20into,props%20stands%20for%20properties.

5. DOM events:
"DOM Events allow JavaScript to add event listener or event handlers to HTML elements. An event is an action that could be triggered as a result of the user action or system generated event. For example, a mouse click, loading of a web page, pressing a key, window resizes, and other interactions are called events."https://www.javatpoint.com/react-events#:~:text=For%20example%2C%20a%20mouse%20click,is%20known%20as%20Synthetic%20Events.