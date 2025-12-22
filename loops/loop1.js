// let Age = [20, 18, 20, 25, 22, 28];

// for (let i = 0; i < Age.length; i++) {
//   console.log(Age[i]);
// }

// Use a for loop to print numbers from 10 to 1.

for (let x = 10; x > 0; x--) {
  console.log(x);
}

//use a while loop to print even numbers from 2 to 20

let y = 2;
while (y <= 20) {
  console.log(y);
  y += 2;
}

// using a for loop to print even numbers from 2 to 20

//   console.log(z);
// }

// Create an array of 5 names and print each name using for...of.

// let name = ["James", "Beatrice", "Pepso", "Lanbert", "Zara"];

// for (let names of name) {
//   console.log(names);
// }

let tea_items = ["milk", "sugar", "tea leaves", "water", "ginger"];

for (let tea of tea_items) {
  console.log(tea[2]);
}
