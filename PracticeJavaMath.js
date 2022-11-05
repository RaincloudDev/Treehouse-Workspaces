// declare program variables
var num1 = prompt("Please type a number");
var num2 = prompt("Please type another number");
var message = "<h1>Math with the numbers " + num1 + " and " + num2 + "</h1>";
var print = '';
//check stuff
if (num2 === 0) {
  alert('try again, please refresh the page, you broke me.')
  location.reload();
}

if (isNaN(num1) || isNaN(num2)){
  alert('Did it wrong, one of those is not a number!');
  location.reload();
}

else{
  print = 'Go for it';
  alert("Let's do some math!"); // announce the program
}






// collect numeric input

num1 = parseFloat(num1);

num2 = parseFloat(num2);

// build an HTML message

message += num1 + " + " + num2 + " = " + (num1 + num2);
message += "<br>";
message += num1 + " * " + num2 + " = " + (num1 * num2);
message += "<br>";
message += num1 + " / " + num2 + " = " + (num1 / num2);
message += "<br>";
message += num1 + " - " + num2 + " = " + (num1 - num2);
  
// write message to web page

if (print = 'Go for it'){
document.write(message);
}
