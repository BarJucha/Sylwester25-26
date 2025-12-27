// --- KONFIGURACJA I STAN ---
const rounds = FAMILIADA_DATA;

let state = {
    currentRoundIndex: 0,
    teamScores: { A: 0, B: 0 },
    currentPot: 0,          
    activeTeam: null,       // 'A' lub 'B'
    firstTeam: null,        // 'A' lub 'B' (kto zaczął grę właściwą)
    strikes: 0,             
    isStealPhase: false,    
    roundOver: false,       
    answersRevealed: 0,     
    totalAnswers: 0         
};

// --- INICJALIZACJA ---

function initGame() {
    renderRound();
}

function renderRound() {
    if (state.currentRoundIndex >= rounds.length) {
        document.getElementById('question-box').innerText = "KONIEC GRY!";
        document.getElementById('board').innerHTML = "";
        return;
    }

    const roundData = rounds[state.currentRoundIndex];
    
    state.currentPot = 0;
    state.strikes = 0;
    state.isStealPhase = false;
    state.roundOver = false;
    state.answersRevealed = 0;
    state.totalAnswers = roundData.answers.length;
    state.activeTeam = null; 
    state.firstTeam = null;

    document.getElementById('question-box').innerText = roundData.question;
    updatePotUI();
    document.getElementById('strikes-a').innerHTML = "";
    document.getElementById('strikes-b').innerHTML = "";
    updateTeamStyles();
    
    const board = document.getElementById('board');
    board.innerHTML = '';

    roundData.answers.forEach((ans, index) => {
        const card = document.createElement('div');
        card.className = 'answer-card';
        card.id = `card-${index}`;
        
        card.innerHTML = `
            <div class="card-number">${index + 1}</div>
            <div class="answer-text">${ans.text}</div>
            <div class="answer-points">${ans.points}</div>
        `;
        
        card.onclick = () => revealAnswer(index);
        board.appendChild(card);
    });
}

function selectTeam(teamId) {
    if (state.roundOver) return;
    if (state.isStealPhase) return; 
    if (state.strikes > 0 && state.activeTeam !== teamId) return; 

    state.activeTeam = teamId;
    state.firstTeam = teamId; 
    
    updateTeamStyles();
    
    if (state.answersRevealed === state.totalAnswers) {
        finishRound(state.activeTeam);
    }
}

function revealAnswer(index) {
    const roundData = rounds[state.currentRoundIndex];
    if (!roundData.answers[index]) return; 

    const card = document.getElementById(`card-${index}`);
    
    if (card.classList.contains('revealed') || card.classList.contains('revealed-no-points')) return;

    if (state.roundOver) {
        card.classList.add('revealed-no-points');
        return;
    }

    card.classList.add('revealed');
    const points = roundData.answers[index].points;
    state.currentPot += points;
    state.answersRevealed++;
    updatePotUI();

    if (state.isStealPhase && state.activeTeam) {
        finishRound(state.activeTeam);
        return;
    }

    // Jeśli odkryto wszystko...
    if (state.answersRevealed === state.totalAnswers) {
        // ...i mamy wybraną drużynę, to koniec.
        if (state.activeTeam) {
            finishRound(state.activeTeam);
        } else {
        }
        return;
    }
}

function addStrike() {
    if (state.roundOver) {
        showXOverlay();
        return;
    }

    if (!state.activeTeam) {
        alert("Wybierz drużynę, aby przyznać X!");
        return;
    }

    showXOverlay();
    state.strikes++;

    const strikesContainer = document.getElementById(`strikes-${state.activeTeam.toLowerCase()}`);
    strikesContainer.innerHTML += `<div class="strike-mark">X</div>`;

    if (state.isStealPhase) {
        finishRound(state.firstTeam);
        return;
    }

    if (state.strikes >= 3) {
        state.isStealPhase = true;
        const oppositeTeam = state.activeTeam === 'A' ? 'B' : 'A';
        state.activeTeam = oppositeTeam;
        updateTeamStyles();
    }
}

function finishRound(winningTeam) {
    if (!winningTeam) return;
    
    state.roundOver = true;
    state.teamScores[winningTeam] += state.currentPot;
    
    document.getElementById(`score-a`).innerText = state.teamScores.A;
    document.getElementById(`score-b`).innerText = state.teamScores.B;
    
    const winnerBox = document.getElementById(`team-${winningTeam.toLowerCase()}`);
    if(winnerBox) winnerBox.classList.add('round-winner');
    
    document.getElementById('round-score').style.color = "#555";
}

function updatePotUI() {
    document.getElementById('round-score').innerText = state.currentPot;
}

function updateTeamStyles() {
    document.getElementById('team-a').classList.remove('active');
    document.getElementById('team-b').classList.remove('active');

    if (state.activeTeam === 'A') document.getElementById('team-a').classList.add('active');
    if (state.activeTeam === 'B') document.getElementById('team-b').classList.add('active');
}

function showXOverlay() {
    const overlay = document.getElementById('wrong-overlay');
    overlay.classList.remove('hidden');
    setTimeout(() => {
        overlay.classList.add('hidden');
    }, 1000);
}

function nextRound() {
    state.currentRoundIndex++;
    document.getElementById('round-score').style.color = "#ff9800";
    document.getElementById('team-a').classList.remove('round-winner');
    document.getElementById('team-b').classList.remove('round-winner');
    renderRound();
}

document.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase();
    
    if (key >= '1' && key <= '6') {
        revealAnswer(parseInt(key) - 1);
    }
    
    if (key === 'x') {
        addStrike();
    }
});

initGame();