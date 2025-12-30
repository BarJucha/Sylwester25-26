const QUIZ_DATA = {
    "sport": [
        {
            text: "Ile minut trwa mecz piłki nożnej (bez doliczonego czasu)?",
            type: "open", // Pytanie otwarte - brak wariantów
            img: null
        },
        {
            text: "W którym roku Polska była gospodarzem Euro?",
            type: "closed",
            img: null,
            options: [
                { text: "2008", isCorrect: false },
                { text: "2012", isCorrect: true },
                { text: "2016", isCorrect: false },
                { text: "2020", isCorrect: false }
            ]
        }
    ],
    "popkultura": [
        {
            text: "Jak nazywa się ten aktor?",
            type: "closed",
            img: "actor.jpg", // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "Brad Pitt", isCorrect: true },
                { text: "Tom Cruise", isCorrect: false },
                { text: "Johnny Depp", isCorrect: false }
            ]
        }
    ],
    "wiedza": [
        {
            text: "Stolica Australii to...",
            type: "closed",
            options: [
                { text: "Sydney", isCorrect: false },
                { text: "Melbourne", isCorrect: false },
                { text: "Canberra", isCorrect: true }
            ]
        }
    ],
    "rozne": [
        {
            text: "Wymień 3 składniki pizzy Margherita.",
            type: "open"
        }
    ]
};