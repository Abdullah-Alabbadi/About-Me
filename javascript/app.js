"use strict";

alert("Welcome to my Information");

let welcome = prompt("What is your name");

alert("Your welcome " + welcome);

// question 5
let question1 = prompt(" Are you excited of my information ", " Yes or No ");
question1 = question1.toLowerCase();
switch (question1) {
  case "yes":
  case "y":
    alert(" Great ");
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
let question3 = prompt(" Are you love codeing ", " Yes or No ");
question3 = question3.toLowerCase();
switch (question3) {
  case "yes":
  case "y":
    alert(" Great ");
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

// question 5
let question5 = prompt(" Can we meet Today ", " Yes or No ");
question5 = question5.toLowerCase();
switch (question5) {
  case "yes":
  case "y":
    alert(" Great ");
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

alert("Thank you for your visting " + welcome);
