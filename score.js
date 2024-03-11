// Iteration 8: Making scoreboard functional
const playAgainBtn = document.getElementById("play-again-button");
const scoreBoard = document.getElementById("score-board");

scoreBoard.textContent = localStorage.getItem("score");

playAgainBtn.addEventListener("click", () => {
    window.location.href = "./game.html";
});