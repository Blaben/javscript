/*
Using a while loop, print numbers from 10 down to 1.

Ask the user for a number n and print the sum of numbers from 1 to n.

Keep asking the user to enter a password until they type "letmein" 
*/

// 1. Using a while loop, print numbers from 10 down to 1.
let x = 10;
while (x > 0) {
  console.log(x);
  x--;
}

// 2. Ask the user for a number n and print the sum of numbers from 1 to n.
let n = 7; // Example input
let sum = 0;
let i = 1;
while (i <= n) {
  sum += i;
  i++;
}
console.log(sum);
