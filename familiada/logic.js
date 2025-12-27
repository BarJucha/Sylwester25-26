let currentRoundIndex = 0;
let currentRoundScore = 0;

// Odwołujemy się do zmiennej z pliku data.js w tym samym folderze
const rounds = FAMILIADA_DATA;

function renderRound() {
    // Zabezpieczenie przed końcem gry
    if (currentRoundIndex >= rounds.length) {
        document.getElementById('question-box').innerText = "KONIEC GRY!";
        document.getElementById('board').innerHTML = "";
        return;
    }

    const roundData = rounds[currentRoundIndex];
    const board = document.getElementById('board');
    
    document.getElementById('question-box').innerText = roundData.question;
    board.innerHTML = '';
    
    currentRoundScore = 0;
    updateScoreUI();

    roundData.answers.forEach((ans, index) => {
        const card = document.createElement('div');
        card.className = 'answer-card';
        card.innerHTML = `
            <div class="card-number">${index + 1}</div>
            <div class="answer-text">${ans.text}</div>
            <div class="answer-points">${ans.points}</div>
        `;

        card.onclick = () => {
            if (!card.classList.contains('revealed')) {
                card.classList.add('revealed');
                currentRoundScore += ans.points;
                updateScoreUI();
            }
        };
        board.appendChild(card);
    });
}

function updateScoreUI() {
    document.getElementById('round-score').innerText = currentRoundScore;
}

function nextRound() {
    currentRoundIndex++;
    renderRound();
}

// Inicjalizacja
renderRound();