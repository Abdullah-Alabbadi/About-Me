"use strict";

alert("Welcome to my Information");

let guestname = prompt("What is your name");

alert("Your welcome " + guestname);


let score = 0;
// question 1
let question1 = prompt(" Are you excited of my information ", " Yes or No ");
question1 = question1.toLowerCase();
switch (question1) {
  case "yes":
  case "y":
    alert(" Great ");
    score++
    break;

  case "no":
  case "n":
    alert(" Ok As you like :) ");
    break;

  case "":
    alert("Please enter an answer next time thank you :) ");

    alert(" Thank you ");

    break;
}

// question 2
let question2 = prompt(" Are you excited of your future ", " Yes or No ");
question2 = question2.toLowerCase();
switch (question2) {
  case "yes":
  case "y":
    alert(" Great ");
    score++
    break;

  case "no":
  case "n":
    alert(" Ok As you like :) ");
    break;

  case "":
    alert("Please enter an answer next time thank you :) ");

    alert(" Thank you ");
    break;
}

// question 3
let question3 = prompt(" Are you love coding ", " Yes or No ");
question3 = question3.toLowerCase();
switch (question3) {
  case "yes":
  case "y":
    alert(" Great ");
    score++
    break;

  case "no":
  case "n":
    alert(" Ok As you like :) ");
    break;

  case "":
    alert("Please enter an answer next time thank you :) ");

    alert(" Thank you ");
    break;
}

// question 4
let question4 = prompt(" Are you older than 22  ", " Yes or No ");
question4 = question4.toLowerCase();
switch (question4) {
  case "yes":
  case "y":
    alert(" Great ");
    score++
    break;

  case "no":
  case "n":
    alert(" That's cool ");
    break;

  case "":
    alert("Please enter an answer next time thank you :) ");

    alert(" Thank you ");
    break;
}

// question 5
let question5 = prompt(" Can we meet Today ", " Yes or No ");
question5 = question5.toLowerCase();
switch (question5) {
  case "yes":
  case "y":
    alert(" Great ");
    score++
    break;

  case "no":
  case "n":
    alert(" Ok As you like :) ");
    break;

  case "":
    alert("Please enter an answer next time thank you :) ");

    alert(" Thank you ");
    break;
}

// question 6
let question6 = prompt("How many user vist my web site do you think until now? ", " Make sure to insert Number only ");

for (let i = 3; i > 0; i--) {
  question6 = parseInt(question6);

  if (question6 === 50) {
    score++;
    alert('Great your answer is correct' + ' your final score until now is ' + score);


    break;

  }
  else if (question6 < 40) {
    alert('Too low! you have ' + i + ' attempts left');
    question6 = prompt('Try to repeat your answer with a better guess ');
    if (i == 1) {
      alert('Sorry your answe not correct but still good dont worry ' + ' your final score on my information is ' + score);

    }
  }
  else if (question6 > 60) {
    alert('Too high! you have ' + i + ' attempts left');
    question6 = prompt('Try to repeat your answer with a better guess ');
    if (i == 1) {
      // alert('Sorry your answer not correct but still good do not worry' + ' your final score on my information is ' + score);

    }
  }

  else if (question6 > 40) {
    alert('So close! you have ' + i + ' attempts');
    question6 = prompt('Try to repeat your answer with a better guess ');
    if (i == 1) {
      alert('Sorry your answer not correct but still good do not worry' + ' your final score on my information is ' + score);

    }
  }
  else if (question6 < 60) {
    alert('So close! you have ' + i + ' attempts');
    question6 = prompt('Try to repeat your answer with a better guess ');
    if (i == 1) {
      alert('Sorry your answer not correct but still good do not worry' + ' your final score on my information is ' + score);

    }
  }
}


let Bestofme = ['sport', 'traveling', 'hanging out', 'coding'];
let answer = prompt('Can you guess some of my personal interests?', 'love life, playing');
answer = answer.toLowerCase();
for (let i = 5; i > 0; i--) {

  if (answer == Bestofme[0]) {
    score++;
    alert('You do it congratulation, your answer right, you pick one of my interest correctly' + ' your final score on my information is ' + score);

    break;


  }
  else if (answer == Bestofme[1]) {
    score++;
    alert('You do it congratulation, your answer right, you pick one of my interest correctly' + ' your final score on my information is ' + score);

    break;

  }
  else if (answer == Bestofme[2]) {
    score++;
    alert('You do it congratulation, your answer right, you pick one of my interest correctly' + ' your final score on my information is ' + score);

    break;

  }

  else if (answer == Bestofme[3]) {
    score++;
    alert('You do it congratulation, your answer right, you pick one of my interest correctly' + ' your final score on my information is ' + score);

    break;

  }
  else {

    alert('So close! you have ' + i + ' attempts');
  }
}


alert("Thank you for your time " + guestname);
