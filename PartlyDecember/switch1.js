let role = "admin";

switch (role) {
  case "Admin":
    console.log("You have Full access");
    break;
  case "Editing":
    console.log("You only have editing rights");
    break;
  default:
    console.log("You made an invalid input");
}
