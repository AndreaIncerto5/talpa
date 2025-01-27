const startBtn = document.querySelector('#startBtn');
const scoreDisplay = document.querySelector('#score');
const grid = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let score = 0;
let gameInterval;
let activeButton;
let timer;

const cells = grid.querySelectorAll('.cell'); 

function startGame() {
    score = 0;
    scoreDisplay.textContent = score;
    resultDisplay.textContent = '';
    startBtn.disabled = true;

    timer = 30; 
    gameInterval = setInterval(gameTick, 1000);
    activateRandomButton();
}

function gameTick() {
    timer--;
    if (timer <= 0) {
        clearInterval(gameInterval);
        endGame();
    }
}

function handleCellClick(cell) {
    if (cell === activeButton) {
        score++;
        scoreDisplay.textContent = score;
        deactivateButton();
        activateRandomButton();
    }
}

function activateRandomButton() {
    const randomCell = cells[Math.floor(Math.random() * cells.length)];
    activeButton = randomCell;
    activeButton.classList.add('active');
}

function deactivateButton() {
    if (activeButton) {
        activeButton.classList.remove('active');
    }
}

function endGame() {
    resultDisplay.textContent = `Tempo scaduto! Il tuo punteggio finale è: ${score}`;
    startBtn.disabled = false;
    startBtn.textContent = 'Ricomincia';
}

startBtn.addEventListener('click', () => {
    if (startBtn.textContent === 'Inizia Gioco') {
        startGame();
    } else {
        startGame();
    }
});


cells.forEach(cell => {
    cell.addEventListener('click', () => handleCellClick(cell));
});
