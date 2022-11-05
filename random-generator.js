// Collect input from a user
let userNumber = prompt('Gimme dat digit: ');

// Convert the input to a number
 if (isNaN(+userNumber)){
  console.log('try again');
 } else{
  console.log('yeah!');
 }

// Use Math.random() and the user's number to generate a random number

let mathNumber = Math.floor(Math.random() * userNumber) + 1;
// Create a message displaying the random number
console.log(`a random digit between 1 and ${userNumber} is ${mathNumber}`);
