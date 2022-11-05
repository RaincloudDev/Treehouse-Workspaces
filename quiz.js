/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
let oneAnswer = '';
let twoAnswer = 'false';
let threeAnswer = 'false';
let fourAnswer = 'false';
let fiveAnswer = 'false';

// 2. Store the rank of a player
var rank = 0;
let crown = 'red';

// 3. Select the <main> HTML element
var printer = document.getElementById('main');



/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/


oneAnswer = prompt('What is your dogs name');
if (oneAnswer.toUpperCase() === 'RILEY') {
    rank += 1;
    console.log(rank);
}

twoAnswer = prompt('What is my creator\'s name?');
if (twoAnswer.toUpperCase() === 'CHRIS') {
    rank += 1;
    console.log(rank);
}
threeAnswer= prompt('What is a Jasper\'s name?');
if (threeAnswer.toUpperCase() === 'JASPER') {
    rank += 1;
    console.log(rank);
}
fourAnswer= prompt('How many licks to get to the center of a tootsie pop');
if (fourAnswer.toUpperCase() === 'THE WORLD MAY NEVER KNOW') {
    rank += 1;
  console.log(rank);
}
fiveAnswer= prompt('How am I counting?');
if (fiveAnswer.toUpperCase() === 'BY USING \+=') {
    rank += 1;
  console.log(rank);
  console.log(rank);
}

/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

if (rank > 4){
  crown = 'GOLD';
}else if (rank === 4 || rank === 3){
  crown = 'SILVER';
}else if (rank === 2 || rank === 1){
  crown = 'BRONZE';
}else{
  crown = 'NONE';
}

// 6. Output results to the <main> element
document.querySelector('main').innerHTML= `<h1>Correct Number Of Answers : ${rank}</h1><h3>Your Crown: ${crown}</h3>`;
