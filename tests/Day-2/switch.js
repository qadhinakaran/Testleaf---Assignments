let testType = "Regression";

switch(testType){
    case "smoke":
        console.log("Running Smoke Tests...");
        break;
    case "sanity":
        console.log("Running Sanity Tests...")
        break;
    case "Regression":
        console.log("Running Regression Tests...");
        break;
    default:
        console.log("Running Default Smoke Tests...");

}