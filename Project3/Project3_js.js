//computer's random secret number between 1-100
let secretNumber = Math.trunc(Math.random() * 100) + 1;

//get and define current score value
let current_score = Number(document.getElementById("current_score").textContent);

//function to display a default message
const displayMessage = function (message) {
    document.getElementById("current_message").textContent = message;
}


//getting user's input:
document.getElementById("checkButton").addEventListener("click", function () {

    const userNumber = Number(document.getElementById('inputNumber').value);


    //if invalid inputs (letters, null, number not in range
    if (isNaN(userNumber) || userNumber < 1 || userNumber > 100) {
        displayMessage("✋Invalid Input! # between 1-100 only!");
    }
    //if number not matched with secreat number
    else if (userNumber != secretNumber) {
        current_score = current_score - 1;
        document.getElementById("current_score").textContent = current_score;

        //defined new variable to display in guess history
        let historicNumber = document.getElementById("guess_recorded").textContent;

        //to add a comma after 1st number
        if (historicNumber === "") {
            document.getElementById("guess_recorded").textContent = historicNumber + " " + userNumber;

        }
        else {
            document.getElementById("guess_recorded").textContent = historicNumber + ", " + userNumber;
        }


        if (userNumber < secretNumber) {
            displayMessage("Too Low! 📉");
        }
        else if (userNumber > secretNumber) {
            displayMessage("Too High! 🚀");
        }

        if (current_score === 0) {
            displayMessage("Sorry, you lost!");
            document.getElementById("checkButton").disabled = true;
            document.getElementById("logo_image").src = "images/youlost.png";

        }
    }
    else {

        displayMessage("You win!!");

        document.getElementById("logo_image").src = "images/win.jpg";
        document.body.style.background = `linear-gradient(gold, pink)`;

        let historicNumber = document.getElementById("guess_recorded").textContent;
        document.getElementById("guess_recorded").textContent = historicNumber + "  " + userNumber;

        document.getElementById("winning_number").textContent = secretNumber;

        //to add a comma after each number in guess history
        if (historicNumber === "") {
            document.getElementById("guess_recorded").textContent = historicNumber + " " + userNumber;

        }
        else {
            document.getElementById("guess_recorded").textContent = document.getElementById("guess_recorded").textContent = historicNumber + " " + userNumber;
            + ", " + userNumber;
        }


        // if current score is greater than highest score then update highest score.
        let current = Number(document.getElementById("current_score").textContent);
        let max = Number(document.getElementById("highest_score").textContent);

        if (current > max) {

            document.getElementById("highest_score").textContent = current;
        }
    }
    document.getElementById("inputNumber").value = "";

});


document.getElementById("resetButton").addEventListener("click", function () {
    current_score = 10;
    document.getElementById("current_score").textContent = '10';
    document.getElementById("logo_image").src = "images/logo.jpg";
    document.getElementById("current_message").textContent = 'Start Guessing🤔...';
    document.getElementById("guess_recorded").textContent = "";
    document.getElementById("inputNumber").value = "";
    document.getElementById("winning_number").textContent = "";
    document.body.style.background = `linear-gradient(lightgreen, lightpink)`;
    secretNumber = Math.trunc(Math.random() * 100) + 1;

});






