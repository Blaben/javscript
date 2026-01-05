# Notes about Loops

i made this notes.md file to put down the little i know about loops

# What a loop is

A loop lets you run the same block of code multiple times without rewriting it. You use loops when something repeats, like going through a list, counting numbers, or retrying an action.

# Common types of loops (JavaScript)

## for loop

Best when you know how many times you want to run something.

example:
for (let i = 0; i < 5; i++) {
console.log(i);
}

Explaing What’s happening:

let i = 0 → starting point
i < 5 → condition to keep running
i++ → update after each run

## While loop

This type of loop, loops through a block of code as long as the condition is true.

It works best when you dont know how many times you want the loop to run

# Types of While loop

- While loop
- Do while loop

### While loop

Syntax
while (condition) {
// code block to be executed
}

example:
while (i < 10) {
text += "The number is " + i;
i++;
}

### Do while loop

This is a variant of the while loop. what it does is that, it runs once (whether the condition is true or false) before it checks the condition if it's true and then it will repeat the loop as long as the condition is true.

Syntax
do {
// code block to be executed
}
while (condition);

#### Note

The do while runs at least once, even if the condition is false from the start.

This is because the code block is executed before the condition is tested:

example:
let i = 5;

do {
  console.log(i);
  i++;
} while (i < 5);