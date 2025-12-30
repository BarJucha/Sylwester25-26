// STAN GRY
let state = {
    teams: [], // [{ name: "A", score: 0 }, ...]
    usedQuestions: { // Przechowuje indeksy zużytych pytań
        "sport": [],
        "popkultura": [],
        "wiedza": [],
        "rozne": []
    }
};

// --- 1. SETUP I START ---

function addTeamInput() {
    const container = document.getElementById('setup-inputs');
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = `Nazwa Drużyny ${container.children.length + 1}`;
    input.className = 'setup-input';
    input.style.cssText = "padding: 10px; margin: 5px; font-size: 1.2em;";
    container.appendChild(input);
}

function startGame() {
    // Pobierz nazwy drużyn
    const inputs = document.querySelectorAll('.setup-input');
    let hasTeams = false;
    
    state.teams = [];
    inputs.forEach(inp => {
        if(inp.value.trim() !== "") {
            state.teams.push({ name: inp.value, score: 0 });
            hasTeams = true;
        }
    });

    if (!hasTeams) {
        alert("Podaj nazwę przynajmniej jednej drużyny!");
        return;
    }

    // Ukryj setup, pokaż grę
    document.getElementById('setup-screen').classList.add('hidden');
    renderSidebar();
    checkCategoriesStatus();
}

// --- 2. RENDEROWANIE SIDEBARA (WYNIKI) ---

function renderSidebar(isEditing = false) {
    const container = document.getElementById('teams-container');
    container.innerHTML = '';

    state.teams.forEach((team, index) => {
        const card = document.createElement('div');
        card.className = 'team-card';
        
        // Input jest zawsze widoczny, domyślnie 0.
        // Po "Zatwierdź punkty" dodajemy wartość inputa do score i zerujemy input.
        card.innerHTML = `
            <div class="team-name">${team.name}</div>
            <div class="team-total">Suma: ${team.score}</div>
            <label style="font-size: 0.8em; color: #aaa;">Dopisz punkty:</label><br>
            <input type="number" id="input-team-${index}" class="point-input" value="0">
        `;
        
        container.appendChild(card);
    });
}

// --- 3. WYBÓR KATEGORII ---

function checkCategoriesStatus() {
    // Sprawdza, czy w kategoriach są jeszcze pytania. Jeśli nie - blokuje przycisk.
    // Jeśli wszystkie puste - KONIEC GRY.
    
    let activeCategories = 0;
    const cats = ['sport', 'popkultura', 'wiedza', 'rozne'];

    cats.forEach(cat => {
        const total = QUIZ_DATA[cat] ? QUIZ_DATA[cat].length : 0;
        const used = state.usedQuestions[cat].length;
        
        // Znajdź przycisk
        // Uwaga: Szukam po onclicku stringa - prosta metoda
        const btns = document.querySelectorAll('.cat-btn');
        btns.forEach(btn => {
            if(btn.getAttribute('onclick').includes(`'${cat}'`)) {
                if (used >= total) {
                    btn.disabled = true;
                    btn.innerText = "BRAK PYTAŃ";
                } else {
                    btn.disabled = false;
                    activeCategories++;
                }
            }
        });
    });

    if (activeCategories === 0) {
        endGame();
    }
}

function selectCategory(category) {
    const allQuestions = QUIZ_DATA[category];
    if (!allQuestions) return;

    // Losowanie pytania, którego jeszcze nie było
    let availableIndexes = [];
    allQuestions.forEach((_, idx) => {
        if (!state.usedQuestions[category].includes(idx)) {
            availableIndexes.push(idx);
        }
    });

    if (availableIndexes.length === 0) return; // Zabezpieczenie

    const randomIndex = availableIndexes[Math.floor(Math.random() * availableIndexes.length)];
    
    // Oznacz jako użyte
    state.usedQuestions[category].push(randomIndex);
    
    // Uruchom pytanie
    renderQuestion(allQuestions[randomIndex], category);
}

// --- 4. RENDEROWANIE PYTANIA ---

function renderQuestion(question, categoryName) {
    // Przełącz widok
    document.getElementById('category-screen').classList.add('hidden');
    document.getElementById('question-screen').classList.remove('hidden');

    document.getElementById('cat-label').innerText = categoryName.toUpperCase();
    document.getElementById('question-text').innerText = question.text;

    // Obrazek
    const imgEl = document.getElementById('question-img');
    if (question.img) {
        imgEl.src = `images/${question.img}`; // Zakładam folder images wewnątrz quiz
        imgEl.classList.remove('hidden');
    } else {
        imgEl.classList.add('hidden');
    }

    // Odpowiedzi
    const optsContainer = document.getElementById('options-container');
    optsContainer.innerHTML = '';

    if (question.type === 'closed' && question.options) {
        question.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerText = opt.text;
            btn.onclick = () => {
                if (opt.isCorrect) {
                    btn.classList.add('correct');
                } else {
                    btn.classList.add('wrong');
                }
            };
            optsContainer.appendChild(btn);
        });
    }
    // Jeśli question.type === 'open', kontener pozostaje pusty (zgodnie z życzeniem)
}

// --- 5. ZATWIERDZANIE PUNKTÓW ---

function finishRound() {
    // 1. Pobierz wartości z inputów i dodaj do sumy
    state.teams.forEach((team, index) => {
        const input = document.getElementById(`input-team-${index}`);
        const pointsToAdd = parseInt(input.value) || 0; // Jeśli puste to 0
        team.score += pointsToAdd;
    });

    // 2. Odśwież sidebar (zresetuje inputy do 0 i zaktualizuje sumy)
    renderSidebar();

    // 3. Wróć do kategorii
    document.getElementById('question-screen').classList.add('hidden');
    document.getElementById('category-screen').classList.remove('hidden');
    
    // 4. Sprawdź czy koniec gry
    checkCategoriesStatus();
}

// --- 6. KONIEC GRY ---

function endGame() {
    document.getElementById('setup-screen').classList.add('hidden');
    document.getElementById('category-screen').classList.add('hidden');
    document.getElementById('question-screen').classList.add('hidden');
    document.getElementById('sidebar').classList.add('hidden'); // Ukryj sidebar na koniec
    
    const endScreen = document.getElementById('end-screen');
    endScreen.classList.remove('hidden');

    // Sortowanie wyników
    const sortedTeams = [...state.teams].sort((a, b) => b.score - a.score);

    const list = document.getElementById('podium-list');
    list.innerHTML = '';

    sortedTeams.forEach((team, index) => {
        const li = document.createElement('li');
        li.className = 'podium-item';
        
        if (index === 0) {
            li.innerHTML = `🏆 MIEJSCE 1: <span class="winner">${team.name}</span> (${team.score} pkt)`;
        } else {
            li.innerHTML = `${index + 1}. ${team.name} ${team.score} pkt`;
        }
        
        list.appendChild(li);
    });
}