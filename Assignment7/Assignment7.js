


let userinputNets1 = parseInt(prompt("Enter score #1 for Nets:"));
console.log(userinputNets1);

let userinputNets2 = parseInt(prompt("Enter score #2 for Nets:"));
console.log(userinputNets2);

let userinputNets3 = parseInt(prompt("Enter score #3 for Nets:"));
console.log(userinputNets3);

console.log("Nets 3 scores are: " + userinputNets1, "", userinputNets2, "", userinputNets3);

let averageNets = (userinputNets1 + userinputNets2 + userinputNets3) / 3;

console.log("Nets average score is: " + Math.round(averageNets));



const userinputKnicks1 = parseInt(prompt("Now enter score #1 for Knicks:"));
console.log(userinputKnicks1);

const userinputKnicks2 = parseInt(prompt("Enter score #2 for Knicks:"));
console.log(userinputKnicks2);

const userinputKnicks3 = parseInt(prompt("Enter score #2 for Knicks:"));
console.log(userinputKnicks3);

console.log("Knicks 3 scores are: " + userinputKnicks1, "", userinputKnicks2, "", userinputKnicks3);

let averageKnicks = (userinputKnicks1 + userinputKnicks2 + userinputKnicks3) / 3;

console.log("Knicks average score is: " + Math.round(averageKnicks));




if ((averageNets > averageKnicks) && ((userinputNets1 >= 100 || userinputNets2 >= 100 || userinputNets3 >= 100))) {
    console.log("Nets is the winner!");
}
else if ((averageKnicks > averageNets) && ((userinputKnicks1 >= 100 || userinputKnicks2 >= 100 || userinputKnicks3 >= 100))) {
    console.log("Knicks is the winner!");

}
else {
    console.log("Sorry! No one won");
}

