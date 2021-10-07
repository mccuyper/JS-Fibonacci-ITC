Milestone 1 - Fibonacci
 
Features
Create a simple website that present the following text: “The Fibonacci of X is Y” (The Fibonacci sequence starts with 0, 1, 1, 2, 3, 5, 8 and so forth, so the Fibonacci of  1 is 1, the Fibonacci of 2 is also 1), where X & Y are numbers declared in your JS code (should present numbers instead)
X and Y should be declared as JS variables. Both X and Y should be added to the HTML with JavaScript (meaning, do not write the value of X and Y directly in your HTML code, use Javascript to do that)
What is a Fibonacci number
 
Milestone 2
 
Features
Instead of hardcoding Y (the result of the Fibonacci of X), calculate it with a for loop
The calculation should be wrapped in a function, that gets X as an argument, and returns Y
After the function, you should call the function, and assign the returned value in your HTML to present to the user

 
 
Milestone 3
 
Features
Create an input (with number type) element and a button next to that calculates fibonacci.
Follow this figma design (it is based on bootstrap, so use bootstrap): ITC Fibonacci Project Design  (For this milestone, only the first row of screens is relevant)
Add a click event listener to the button, that executes a function that takes the number value in the created input, calculates it’s Fibonacci value and presents it to the user
Recommended googling: ‘HTML Input element’ and ‘get value in javascript of an input element’


Milestone 4

Features
Run the following local server: fibonacci-server (read the readme!)
Create a function that calls this server on this address: http://localhost:5050/fibonacci/:number, where :number is a parameter passed to the server to be calculated
The response is the calculated fibonacci, present it to the user.
Calling the server should replace your implementation of calculating fibonacci


Milestone 5

Features
Present a loader to the user when a call is made to the server (indicating the server is calculating)
Present an error to the user if the input number is more than 50, and do not send a server request
Try passing the number 42 to the server. The server will send back an error, present this error to the user. (read fetch() docs to see how to identify if the server sent an error)
Follow the second row of screens in the figma design

Milestone 6

Features
Create a function that calls the server with this url: http://localhost:5050/getFibonacciResults 
Call this function when the screen loads. You will get a list of fibonacci calculations that you previously submitted to the server
Present the list to the user under the calculator
The list should be updated every time the user makes a new calculation (suggestion: create a function the takes the data from the server response, and creates the html list to present to the user, and call this function after the user makes a new calculation)
Follow the third row of screens in the figma design
