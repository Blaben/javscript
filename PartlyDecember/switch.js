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
// It is always a best practice to use the if.else condition for cases regarding ranges. whiles switch is used for exact matches.
