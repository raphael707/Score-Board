const p1Button = document.querySelector("#p1-button");
const p2Button = document.querySelector("#p2-button");
const p1Display = document.querySelector("#p1-score");
const p2Display = document.querySelector("#p2-score");
const resetButton = document.querySelector("#reset");
const scoreOption = document.querySelector("#winScore");

let p1Score = 0;
let p2Score = 0;
let winScore = 5;
let GameOver = false;

//Function Button Player 1
p1Button.addEventListener("click", function () {
    if(!GameOver) {
        p1Score += 1;
        if (p1Score === winScore) {
            GameOver = true;
        }
        p1Display.textContent = p1Score;  
    }
});

//Function Button Player 2
p2Button.addEventListener("click", function () {
    if(!GameOver) {
        p2Score += 1;
        if (p2Score === winScore) {
            GameOver=true;
        }
        p2Display.textContent = p2Score;  
    }
});

//Function Reset Button
function reset() {
    GameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;

}

resetButton.addEventListener('click', reset);

scoreOption.addEventListener('change', function () {
    winScore = parseInt(this.value);
    reset();
});