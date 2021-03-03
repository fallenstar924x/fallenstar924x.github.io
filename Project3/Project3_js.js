//computer's random secret number between 1-100
//let secretNumber = Math.trunc(Math.random() * 100) + 1;
let secretNumber = 20;

//function to display a default message
const displayMessage = function (message) {
    document.getElementById("current_message").textContent = message;
}

//set current score
let current_score = Number(document.getElementById("current_score").textContent);


//CLICK ON CHECK BUTTON function
document.getElementById("checkButton").addEventListener("click", function () {

    const userInputNumber = Number(document.getElementById("inputNumber").value);

    //if invalid inputs (not a number or number not in range)
    if (isNaN(userInputNumber) || userInputNumber < 1 || userInputNumber > 100) {
        displayMessage("✋Invalid Input! # between 1-100 only!");
    }

    //IF USER'S # IS NOT THE SAME AS SECRET NUMBER
    else if (userInputNumber != secretNumber) {
        current_score = current_score - 1;
        document.getElementById("current_score").textContent = current_score;


        //If number is too low or too high
        if (userInputNumber < secretNumber) {
            displayMessage("Too Low! 📉");
        }
        else if (userInputNumber > secretNumber) {
            displayMessage("Too High! 🚀");
        }

        //If player runs of attempts
        if (current_score === 0) {
            displayMessage("Sorry, you lost!");
            document.getElementById("checkButton").disabled = true;
            document.getElementById("logo_image").src = "images/youlost.png";
        }

        guessHistory(userInputNumber);

    }

    //IF USER's NUMBER MATCHES SECRET NUMBER
    else {

        displayMessage("You win!!");

        document.getElementById("logo_image").src = "images/win.jpg";
        document.body.style.background = `linear-gradient(gold, pink)`;

        guessHistory(userInputNumber);

        //show secret number after the guesses are displayed
        document.getElementById("secret_number").textContent = secretNumber;

        //if current score if higher then update this in the highest score element
        let highest_score = Number(document.getElementById("highest_score").textContent);

        if (current_score > highest_score) {

            document.getElementById("highest_score").textContent = current_score;
        }

    }
    //clear out the value in the textarea after each input
    document.getElementById("inputNumber").value = "";

});


//RESET BUTTON - reset everything back to the beginning
document.getElementById("resetButton").addEventListener("click", function () {
    current_score = 10;
    document.getElementById("current_score").textContent = current_score;
    document.getElementById("logo_image").src = "images/logo.jpg";
    document.getElementById("current_message").textContent = 'Start Guessing🤔...';
    document.getElementById("guess_history").textContent = "";
    document.getElementById("inputNumber").value = "";
    document.getElementById("secret_number").textContent = "";
    document.body.style.background = `linear-gradient(lightgreen, lightpink)`;
    document.getElementById("checkButton").disabled = false;
    //    secretNumber = Math.trunc(Math.random() * 100) + 1;

});


//GUESS HISTORY section
function guessHistory(userInputNumber) {
    let guess_history = document.getElementById("guess_history").textContent;

    document.getElementById("guess_history").textContent = guess_history + "  " + userInputNumber;

    //if element is empty then leave an empty space + the user's input number
    if (guess_history === "") {
        document.getElementById("guess_history").textContent = guess_history + " " + userInputNumber;

    }
    else {
        document.getElementById("guess_history").textContent = guess_history + ", " + userInputNumber;
    }

}