
// Function to check if a number is an Armstrong number
function isArmstrongNumber(num) {
    let sum = 0;
    let temp = num;
  
    while (temp > 0) {
        let digit = temp % 10; // Extract the last digit
        sum += Math.pow(digit, 3); // Add the cube of the digit
        temp = Math.floor(temp / 10); // Remove the last digit
    }
    return sum === num; // Check if the sum equals the original number
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
console.log("The 3-digit Armstrong numbers are:", armstrongNumbers);
