/*
let Score = 75;

switch (true) {
  case Score >= 80:
    console.log(" Your Grade A");
    break;

  case Score >= 70:
    console.log(" Your Grade is B");
    break;

  case Score >= 60:
    console.log("Your Grade is C");
    break;

  case Score >= 50:
    console.log("Your Grade is D");
    break;

  default:
    console.log("Your Grade is E");
} 
*/
// It is always a best practice to use the if.else condition for cases regarding ranges. whiles switch is used for exact matches.

// Example of switch case for exact matches
let day = 3;

switch (day) {
  case 1:
    console.log("It's Monday");
    break;
  case 2:
    console.log("It's Tuesday");
    break;
  case 3:
    console.log("It's Wednesday");
    break;
  case 4:
    console.log("It's Thursday");
    break;
  case 5:
    console.log("It's Friday");
    break;
  case 6:
    console.log("It's Saturday");
    break;
  case 7:
    console.log("It's Sunday");
    break;
  default:
    console.log("Invalid day");
}
