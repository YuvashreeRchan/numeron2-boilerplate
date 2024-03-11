// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
let number1;
let number2;

let intervalId;

function generateRandomNumber() 
{
    return Math.floor(Math.random() * 100) + 1;
}

function displayRandomNumbers() 
{
    number1 = generateRandomNumber();
    number2 = generateRandomNumber();
    document.getElementById("number1").innerText = number1;
    document.getElementById("number2").innerText = number2;

    operator = randomOperator();
    clearInterval(intervalId);
}

// Iteration 3: Creating variables required to make the game functional
let operator;
let result;
let score = 0;

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
let number3;
const num3Element = document.getElementById("number3");

// Iteration 5: Creating a randomize function to make the game functional
function randomOperator() {

    if (number1 < number2) {
        var temp = number1
        number1 = number2;
        number2 = temp;
    }

    const buttons = document.querySelectorAll("#buttons > img");
    const randomIndexNo = Math.floor(Math.random() * buttons.length);
    const operation = buttons[randomIndexNo].id;

    switch (operation) {
        case "plus":
            result = number1 + number2;
            break;
        case "minus":
            result = number1 - number2;
            break;
        case "mul":
            result = number1 * number2;
            break;
        case "divide":
            result = (number1 / number2);
            break;
        case "modulus":
            result = number1 % number2;
            break;
    }
    num3Element.innerText = result;
    return operation;
}

// Iteration 6: Making the Operators (button) functional

function checkResult(clickedButton) {
    if (operator === clickedButton) {
        score++;
        displayRandomNumbers();
    } else {
        endGame();
    }
}

const buttons = document.getElementById("buttons");
buttons.addEventListener("click", (event) => checkResult(event.target.id));

// Iteration 7: Making Timer functional
let timerElement = document.getElementById("timer");
let timeRemaining;

function startCountDown() {
    intervalId = setInterval(() => {
    timeRemaining--;
    timerElement.innerText = timeRemaining;
    if (timeRemaining === 0) 
    {
        endGame();
    }}, 1000);
}

function clearInterval() 
{
    timeRemaining = 20;
    timerElement.innerText = timeRemaining;
}

function endGame() {
    clearInterval();
    localStorage.setItem("score", score);
    window.location.href = "./gameover.html";
    }

displayRandomNumbers();
startCountDown();
