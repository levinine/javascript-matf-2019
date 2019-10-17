var status = "active";

switch (status) {
  case "active":
    console.log("User is active!");
    break;
  case "inactive":
    console.log("User is inactive");
    break;
  case "blocked":
    console.log("User is blocked.");
    break;
  default:
    console.log("User status is unknown.");
}
