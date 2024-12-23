// Task-01: Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". For numbers multiples of both three and five print "FizzBuzz".
function fizzBuzz() {
  let output = ""; // Initialize an empty string for output with line break
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      output += "FizzBuzz<br>";
    } else if (i % 5 === 0) {
      output += "Buzz<br>";
    } else if (i % 3 === 0) {
      output += "Fizz<br>";
    } else {
      output += i + "<br>";
    }
  }
  return output;
}
document.getElementById("task_01").innerHTML = fizzBuzz();



//Task-02: star pattern

function starPattern(rows) {
  let output = ""; // To store the stars
  for (let i = 1; i <= rows; i++) {
    let line = "";
    for (let j = 0; j < i; j++) {
      line += "* "; // Add stars to the line
    }
    output += line + "<br>"; // Add line break after each row
  }
  return output; // Return the pattern as a string
}
document.getElementById("task_02").innerHTML = starPattern(4);

// Task-03: ArmstrongNumber

// Function to check if a number is an Armstrong number
function isArmstrongNumber(num) {
  let sum = 0;
  let originalNum = num; // Save the original number for comparison

  while (num > 0) {
      let digit = num % 10; // Extract the last digit
      sum += Math.pow(digit, 3); // Add the cube of the digit
      num = Math.floor(num / 10); // Remove the last digit
  }

  return sum === originalNum; // Compare the sum with the original number
}

// Function to find all 3-digit Armstrong numbers
function findArmstrongNumbers() {
  let armstrongNumbers = [];

  for (let i = 100; i <= 999; i++) { // Iterate through all 3-digit numbers
      if (isArmstrongNumber(i)) {
          armstrongNumbers.push(i);
      }
  }

  return armstrongNumbers;
}

// Find and print all 3-digit Armstrong numbers
const armstrongNumbers = findArmstrongNumbers();
// console.log("The 3-digit Armstrong numbers are:", armstrongNumbers);
document.getElementById("task_03").innerHTML = findArmstrongNumbers();


//task-03: Happy numbers 


// Function to calculate the sum of squares of digits of a number
function sumOfSquares(num) {
  let sum = 0;
  while (num > 0) {
      let digit = num % 10; // Extract the last digit
      sum += digit * digit; // Add the square of the digit
      num = Math.floor(num / 10); // Remove the last digit
  }
  return sum;
}

// Function to determine if a number is a happy number
function isHappyNumber(num) {
  let seen = new Set(); // To detect cycles
  while (num !== 1 && !seen.has(num)) {
      seen.add(num); // Mark the number as seen
      num = sumOfSquares(num); // Calculate the next number
  }
  return num === 1; // If num reaches 1, it's happy
}

// Function to find the first N happy numbers
function findHappyNumbers(count) {
  let happyNumbers = [];
  let number = 1;

  while (happyNumbers.length < count) {
      if (isHappyNumber(number)) {
          happyNumbers.push(number);
      }
      number++;
  }

  return happyNumbers;
}

// Find and print the first 5 happy numbers
const first5HappyNumbers = findHappyNumbers(5);
document.getElementById("task_04").innerHTML = findArmstrongNumbers();
// console.log("The first 5 happy numbers are:", first5HappyNumbers);
