const QUIZ_DATA = {
    "sport": [
        // ================= SPORT – EASY =================
{
    text: "Ile złotych medali na IO w Paryżu w 2024 zdobyła Polska?",
    type: "closed",
    options: [
        { text: "0", isCorrect: false },
        { text: "1", isCorrect: true },
        { text: "2", isCorrect: false },
        { text: "4", isCorrect: false }
    ]
},
{
    text: "Czy Polska wygrała kiedykolwiek mistrzostwo świata w piłce ręcznej?",
    type: "closed",
    options: [
        { text: "Tak", isCorrect: false },
        { text: "Nie", isCorrect: true }
    ]
},
{
    text: "Gdzie odbywało się Euro 2016?",
    type: "closed",
    options: [
        { text: "Niemcy", isCorrect: false },
        { text: "Rosja", isCorrect: false },
        { text: "Francja", isCorrect: true },
        { text: "Włochy", isCorrect: false }
    ]
},
{
    text: "Która reprezentacja ma najwięcej mistrzostw świata w piłce nożnej?",
    type: "closed",
    options: [
        { text: "Niemcy", isCorrect: false },
        { text: "Urugwaj", isCorrect: false },
        { text: "Francja", isCorrect: false },
        { text: "Brazylia", isCorrect: true }
    ]
},
   {
    text: "Ile trwa kwarta w NBA?",
    type: "closed",
    options: [
        { text: "10 minut", isCorrect: false },
        { text: "12 minut", isCorrect: true },
        { text: "15 minut", isCorrect: false },
        { text: "18 minut", isCorrect: false }
    ]
},     
{
    text: "Jak nazywa się najsłynniejszy turniej tenisowy rozgrywany na trawie?",
    type: "closed",
    options: [
        { text: "Australian Open", isCorrect: false },
        { text: "Wimbledon", isCorrect: true },
        { text: "US Open", isCorrect: false },
        { text: "French Open", isCorrect: false }
    ]
},
{
    text: "Ilu zawodników jednej drużyny jest jednocześnie na parkiecie w koszykówce?",
    type: "closed",
    options: [
        { text: "4", isCorrect: false },
        { text: "5", isCorrect: true },
        { text: "6", isCorrect: false },
        { text: "7", isCorrect: false }
    ]
},
{
    text: "Który z tych sportowców zdobył co najmniej 2 złota olimpijskie",
    type: "closed",
    options: [
        { text: "Irena Szewińska", isCorrect: true },
        { text: "Adam Małysz", isCorrect: false },
        { text: "Paweł Fajdek", isCorrect: false },
        { text: "Michał Kubiak", isCorrect: false }
    ]
},
        {
    text: "Wymień 3 sporty w których używa sie rakiet?",
    type: "open",
    
},
        {
    text: "Wymień rywali grupowych Polski z Euro 2016",
    type: "open",
    
},
        {
    text: "Opisz format mundialu w 2026 roku",
    type: "open",
    
},
{
    text: "Jak wygląda drabinka reprezentacji Polski w barażach",
    type: "open",
    
},   
{
    text: "Które miejsce Polska druzyna siatkarska na IO w Paryżu 2024?",
    type: "open",
    
},
        {
    text: "Gdzie odbyły się letnie IO od roku 2000?",
    type: "open",
    
},
        {
    text: "Ile osób ma docelowo pomieścic Spotify Camp Nou",
    type: "open",
    
},
        {
    text: "Wymień top 4 strzelców w historii reprezentacji Polski",
    type: "open",
    
},
         {
    text: "Tylko raz w historii zdarzyło sie że obrońca tytułu misztrz świata przegrał na następnym turnieju różnicą 4 bramek, jaki był to mecz? ",
    type: "open",
    
},
         {
    text: "Wymień 10 zdobywców Ballon d'or?",
    type: "open",
    
},
// ================= SPORT – MEDIUM =================
{
    text: "Ile mistrzostw NBA zdobył Michael Jordan?",
    type: "closed",
    options: [
        { text: "4", isCorrect: false },
        { text: "5", isCorrect: false },
        { text: "6", isCorrect: true },
        { text: "7", isCorrect: false }
    ]
},
        {
    text: "Ile turniejówk wielkoszlemowych wygrała Iga Swiatek",
    type: "closed",
    options: [
        { text: "2", isCorrect: false },
        { text: "3", isCorrect: false },
        { text: "4", isCorrect: false },
        { text: "6", isCorrect: true }
    ]
},
        {
    text: "Ile razy Adam Małysz został mistrzem olimpijskim?",
    type: "closed",
    options: [
        { text: "1", isCorrect: false },
        { text: "2", isCorrect: false },
        { text: "3", isCorrect: false },
        { text: "0", isCorrect: true }
    ]
},
        {
    text: "Z kim Mariusz Pudzianowski debiutował w mma?",
    type: "closed",
    options: [
        { text: "Mrcin Najman", isCorrect: true },
        { text: "Bob Sapp", isCorrect: false },
        { text: "Andrzej Gołota", isCorrect: false },
        { text: "Paweł Nastula", isCorrect: false }
    ]
},
        {
    text: "Ile złotych medali olimpijskich ma Kamil Stoch?",
    type: "closed",
    options: [
        { text: "2", isCorrect: false },
        { text: "0", isCorrect: false },
        { text: "3", isCorrect: true },
        { text: "4", isCorrect: false }
    ]
},
        {
    text: "Kto jest aktualnym mistzem Polski w siatkówce?",
    type: "closed",
    options: [
        { text: "JSW Jastrzębski Węgiel", isCorrect: false },
        { text: "Bogdanka LUK Lublin", isCorrect: true },
        { text: "Asseco Resovia Rzeszów", isCorrect: false },
        { text: "PGE Projekt Warszawa", isCorrect: false }
    ]
},
{
    text: "Usain Bolt ustanowił rekord świata na 100 m – jaki to był czas?",
    type: "closed",
    options: [
        { text: "9.54", isCorrect: false },
        { text: "9.58", isCorrect: true },
        { text: "9.67", isCorrect: false },
        { text: "9.79", isCorrect: false }
    ]
},
{
    text: "Kto powiedział: „Float like a butterfly, sting like a bee.”?",
    type: "closed",
    options: [
        { text: "Mike Tyson", isCorrect: false },
        { text: "Jackson Young", isCorrect: false },
        { text: "Muhammad Ali", isCorrect: true },
        { text: "Demetrious Johnson", isCorrect: false }
    ]
},
{
    text: "Do kogo przypisuje się określenie „Black Mamba Mentality”?",
    type: "closed",
    options: [
        { text: "Mike Tyson", isCorrect: false },
        { text: "Kobe Bryant", isCorrect: true },
        { text: "Deontay Wilder", isCorrect: false },
        { text: "Jon Jones", isCorrect: false }
    ]
},
        {
    text: "Kto to powiedział 'I'm not here to take part, I'm here to take over",
    type: "closed",
    options: [
        { text: "Conor McGregor", isCorrect: false },
        { text: "Michael Jordan", isCorrect: false },
        { text: "Zlatan Ibrahimović", isCorrect: true },
        { text: "Roger Federer", isCorrect: false }
    ]
},
        {
    text: "Ilu Polaków w historii UFC było mistrzem?",
    type: "closed",
    options: [
        { text: "0", isCorrect: false },
        { text: "2", isCorrect: true },
        { text: "1", isCorrect: false },
        { text: "3", isCorrect: false }
    ]
},
        {
    text: "Kto to powiedział 'Kaziu jak sie zdeenerwujesz, to daj, ja strzelę'",
    type: "closed",
    options: [
        { text: "Grzegorz Lato", isCorrect: false },
        { text: "Zbigniew Boniek", isCorrect: true },
        { text: "Euzebiusz Smolarek", isCorrect: false },
        { text: "Krzysztof Stelmach", isCorrect: false }
    ]
},
        {
    text: "Kto to powiedział 'Saturday, Sunday you are going down'?",
    type: "closed",
    options: [
        { text: "Anthony Joshua", isCorrect: false },
        { text: "Deontay Wilde", isCorrect: false },
        { text: "Artur Szpilka", isCorrect: true },
        { text: "Conor McGregor", isCorrect: false }
    ]
},
        {
    text: "Który z tych piłkarzy był zamieszany w aferze korupcyjnej związana z ustawianiem meczy?",
    type: "closed",
    options: [
        { text: "Łukasz Piszczek", isCorrect: true },
        { text: "Kamil Grosicki", isCorrect: false },
        { text: "Sławomir Peszko", isCorrect: false },
        { text: "Jerzy Dudek", isCorrect: false }
    ]
},

// ================= SPORT – HARD =================
{
    text: "Kto strzelił najwięcej bramek w historii mundiali (i ile)?",
    type: "closed",
    options: [
        { text: "Ronaldo Nazario ", isCorrect: false },
        { text: "Miroslav Klose ", isCorrect: true },
        { text: "Lionel Messi  ", isCorrect: false },
        { text: "Gerd Müller ", isCorrect: false }
    ]
},
{
    text: "Który sportowiec ma najwięcej złotych medali olimpijskich w historii?",
    type: "closed",
    options: [
        { text: "Marit Bjørgen", isCorrect: false },
        { text: "Larisa Latynina", isCorrect: false },
        { text: "Mark Spitz", isCorrect: false },
        { text: "Michael Phelps ", isCorrect: true }
    ]
},
        {
    text: "Kto zdobył najwięcej złotych medali w historii polskich startów olimpijskich ( i ile)?",
    type: "closed",
    options: [
        { text: "Robert Korzeniowski", isCorrect: true },
        { text: "Irena Szewińska", isCorrect: false },
        { text: "Kmail Stoch", isCorrect: false },
        { text: "Anita Włodarczyk", isCorrect: false }
    ]
},
   {
    text: "Który z tych zawodników jest aktualnie najwyżej w rankingu UFC iktóre miejsce zajmuje?",
    type: "closed",
    options: [
        { text: "Marcin Tybura", isCorrect: false },
        { text: "Mateusz Gamrot", isCorrect: false },
        { text: "Jan Błachowicz", isCorrect: true },
        { text: "Michał Oleksiejczuk", isCorrect: false }
    ]
},
        {
    text: "Tylko raz w historii MŚ 3 z 4 ćwierćfianłów zakończyły sie rzutami karnymi, który to mundial?",
    type: "closed",
    options: [
        { text: "Meksyk 1986", isCorrect: true },
        { text: "Włochy 1990", isCorrect: false },
        { text: "Brazylia 2014", isCorrect: false },
        { text: "Niemcy 2006", isCorrect: false }
    ]
},
        {
    text: "Która grupa składa się tylko z mistzrów KSW",
    type: "closed",
    options: [
        { text: "Karol Bedorf, Scott Askham", isCorrect: false },
        { text: "Michał Materla, Mariusz Pudzianowski, Tomasz Narkun", isCorrect: false },
        { text: "Jan Błachowicz, Adrian Bartosiński, Marcin Różalski", isCorrect: true },
        { text: "Phil de Fries, Andrzej Grzebyk, Borys Mańkowski", isCorrect: false }
    ]
},
        {
    text: "Jaki pierwszy piłkarz dostał zółtą katkę na 3 różnych mundialach?",
    type: "closed",
    options: [
        { text: "Cristiano Ronaldo", isCorrect: false },
        { text: "Diego Maradona", isCorrect: false },
        { text: "Lione Messi", isCorrect: false },
        { text: "Zbigniew Boniek", isCorrect: true },
        { text: "Nikt nie dostał żółtej kartki na 3 różnych mundialach", isCorrect: false }
    ]
},
{
    text: "Który zawodnik NBA zdobył 100 punktów w jednym meczu?",
    type: "closed",
    options: [
        { text: "Michael Jordan", isCorrect: false },
        { text: "LeBron James", isCorrect: false },
        { text: "Kobe Bryant", isCorrect: false },
        { text: "Wilt Chamberlain", isCorrect: true }
    ]
},
        {
    text: "Która z tych historii jest fałszywa",
    type: "closed",
    options: [
        { text: "mecz o superpuchar Polski za sezon 2023/24 odbył się 2 kwietnia 2025 roku", isCorrect: false },
        { text: "grupa kiboli zaatakowała wiceprezesa Sandecji Nowej Sącz - pobili do nieprzytomności i na koniec wbili widelec w dłoń", isCorrect: false },
        { text: "kibic odry Opole “wypraszał” (bijąc, opluwając, wyzywając) kibiców czarnoskórych twierdząc że na jego obiekcie nie ma miejsca dla takich osób", isCorrect: false },
        { text: "elity PZPN i politycy prawicowi pod wpływem alkoholu wspólnie w kółku śpiewali Chryzantemy złociste", isCorrect: true }
    ]
},
{
    text: "W którym roku Polska zdobyła złoty medal olimpijski w piłce nożnej?",
    type: "closed",
    options: [
        { text: "1972", isCorrect: true },
        { text: "1976", isCorrect: false },
        { text: "1980", isCorrect: false },
        { text: "Polska nigdy nie zdobyła", isCorrect: false }
    ]
},
        {
    text: "Jest to najczęstsza podstawowa 11 Fc Barcelony z sezonu 2016/2017, jakich zawodników brakuję?",
    type: "open",
     img:  "barca1617"      
},
        {
    text: "Reprezentacja Polski na pierwszy mecz euro 2016 kogo brakuję?",
    type: "open",
    img: "pol2016"
},
        {
    text: "W którym roku Polska zdobyła złoty medal olimpijski w piłce nożnej?",
    type: "closed",
    options: [
        { text: "1972", isCorrect: true },
        { text: "1976", isCorrect: false },
        { text: "1980", isCorrect: false },
        { text: "Polska nigdy nie zdobyła", isCorrect: false }
    ]
},
        {
    text: "W którym roku Polska zdobyła złoty medal olimpijski w piłce nożnej?",
    type: "closed",
    options: [
        { text: "1972", isCorrect: true },
        { text: "1976", isCorrect: false },
        { text: "1980", isCorrect: false },
        { text: "Polska nigdy nie zdobyła", isCorrect: false }
    ]
},
        {
    text: "W którym roku Polska zdobyła złoty medal olimpijski w piłce nożnej?",
    type: "closed",
    options: [
        { text: "1972", isCorrect: true },
        { text: "1976", isCorrect: false },
        { text: "1980", isCorrect: false },
        { text: "Polska nigdy nie zdobyła", isCorrect: false }
    ]
},
{
    text: "Czy jakikolwiek Polak złamał barierę 10 sekund na 100 m?",
    type: "closed",
    options: [
        { text: "Tak", isCorrect: false },
        { text: "Nie", isCorrect: true }
    ]
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
            text: "Jak nazywa sie wioska z której pochodzi Naruto?",
            type: "closed",
            img: "actor.jpg", // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "Sunagakure", isCorrect: false },
                { text: "Kirigakure", isCorrect: false },
                { text: "Konohagakure", isCorrect: true },
                { text: "Iwagakure", isCorrect: false }
            ]
        },
         {
            text: "Który z bohaterów „Death Note” jako pierwszy dowiaduje się o istnieniu shinigami?",
            type: "closed",
            img: "actor.jpg", // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "L", isCorrect: false },
                { text: "Near", isCorrect: false },
                { text: "Misa", isCorrect: false },
                { text: "Light Yagami", isCorrect: true }
            ]
        },
        {
            text: "Który z bohaterów Dragon Balla nie jest Saiyaninem?",
            type: "closed",
            img: "actor.jpg", // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "Vegeta", isCorrect: false },
                { text: "Gohan", isCorrect: false },
                { text: "Trunks", isCorrect: false },
                { text: "Piccolo", isCorrect: true }
            ]
        },
        {
            text: "Jednooką sową był",
            type: "closed",
            img: "actor.jpg", // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "Yamori", isCorrect: false },
                { text: "Eto", isCorrect: true },
                { text: "Tatara", isCorrect: false },
                { text: "Yoshimura", isCorrect: false }
            ]
        },
        {
            text: "Charakterystyczne cechy typu ukaku?",
            type: "closed",
            img: "actor.jpg", // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "szybkość, zwinność", isCorrect: false },
                { text: "siła, obrona", isCorrect: false },
                { text: "obrona, zwinność", isCorrect: true },
                { text: "wytrzymałość, szybkość", isCorrect: false }
            ]
        },
        {
            text: "Kto był dawcą narządów Kanekiego?",
            type: "closed",
            img: "actor.jpg", // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "Touka ", isCorrect: false },
                { text: "Ojciec", isCorrect: false },
                { text: "Rize", isCorrect: true },
                { text: "Hide", isCorrect: false }
            ]
        },
        {
            text: "Kto powiedział 'Co jest 1000 minus 7'?",
            type: "closed",
            img: "actor.jpg", // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "Kaneki", isCorrect: false },
                { text: "Tsukiyama", isCorrect: false },
                { text: "Jason", isCorrect: true },
                { text: "Juuzou", isCorrect: false }
            ]
        },
        {
            text: "Przeciw komu Hinata grał swój pierwszy mecz w liceum?",
            type: "closed",
            img: "actor.jpg", // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "aoba johsai", isCorrect: true },
                { text: "date tech", isCorrect: false },
                { text: "nekoma", isCorrect: false },
                { text: "fukurodani", isCorrect: false }
            ]
        },
        {
            text: "Który z tych graczy nie był uznawany za top 5 ace?",
            type: "closed",
            img: "actor.jpg", // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "Sakusa Kiyoomi", isCorrect: false },
                { text: "Bokuto Kotaro", isCorrect: false },
                { text: "Wakatsu Kiryuu", isCorrect: false },
                { text: "Goshiki Tsutomu", isCorrect: true }
            ]
        },
        {
            text: "Jakie jest prawdziwe imie Tytana Bestii? ",
            type: "closed",
            img: "actor.jpg", // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "Bertolt", isCorrect: false },
                { text: "Zeke Yeager", isCorrect: true },
                { text: "Reiner", isCorrect: false },
                { text: "Marcel", isCorrect: false }
            ]
        },
        {
            text: "Kto pierwszy odkrył prawdę o pochodzeniu tytanów i muru w Shiganshine?",
            type: "closed",
            img: "actor.jpg", // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "Armin Ariert", isCorrect: false },
                { text: "Eren Yeager", isCorrect: false },
                { text: "Hange Zoe", isCorrect: true },
                { text: "Levi Ackerman", isCorrect: false }
            ]
        },
        {
            text: "Kto byłpierwszym Upper Moon którego Tanjiro pokonał w walce?",
            type: "closed",
            img: "actor.jpg", // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "Akaza", isCorrect: false },
                { text: "Rui", isCorrect: true },
                { text: "Daki", isCorrect: false },
                { text: "Enmu", isCorrect: false }
            ]
        },
        {
            text: "Który z Hashirów ma zdolność wstrzykiwania trucizny do ciała demonów zamiast ciecia ich na śmierć?",
            type: "closed",
            img: "actor.jpg", // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "Mitsuri Kanroji", isCorrect: false },
                { text: "Obanai Iguro", isCorrect: false },
                { text: "Shinobu Kocho", isCorrect: true },
                { text: "Gyomei Himejima", isCorrect: false }
            ]
        },
        {
            text: "Jak nazywa sie tehcnika Zoro, w której uzywa wszystkich trzech mieczy jednocześnie?",
            type: "closed",
            img: "actor.jpg", // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "Santoryu", isCorrect: true },
                { text: "Nitoryu", isCorrect: false },
                { text: "Ichiryu", isCorrect: false },
                { text: "Shitoryu", isCorrect: false }
            ]
        },
        {
            text: "Który antagonista Wano był odpowiedzialny za zamordowanie Kozuki Odena",
            type: "closed",
            img: "actor.jpg", // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "Kaido", isCorrect: false },
                { text: "Orochi", isCorrect: true },
                { text: "Big Mom", isCorrect: false },
                { text: "Blackbeard", isCorrect: false }
            ]
        },
        {
            text: "Jak nazywa sie sekretna technika Gear, której uzywa Luffy podczas walki w Dressrosie?",
            type: "closed",
            img: "actor.jpg", // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "Gear Fourth: Boundman", isCorrect: true },
                { text: "Gear Third: Tankman", isCorrect: false },
                { text: "Gear Fifth: Snake Man", isCorrect: false },
                { text: "Gear Second: Jet", isCorrect: false }
            ]
        },
        {
            text: "Jakiej rangi jest Jinchul Woo?",
            type: "closed",
            img: "actor.jpg", // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "C", isCorrect: false },
                { text: "B", isCorrect: false },
                { text: "A", isCorrect: true },
                { text: "S", isCorrect: false }
            ]
        },
        {
            text: "Ilu japońskich łowców zgineło na wyspie Jeju",
            type: "closed",
            img: "actor.jpg", // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "6", isCorrect: false },
                { text: "7", isCorrect: true },
                { text: "8", isCorrect: false },
                { text: "9", isCorrect: false }
            ]
        },
        {
            text: "Anime of the year 2025?",
            type: "closed",
            img: "actor.jpg", // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "Dan da Dan", isCorrect: false },
                { text: "Solo leveling", isCorrect: true },
                { text: "Frieren Beyond Journey's End", isCorrect: false },
                { text: "The Apothecary Diaries", isCorrect: false }
            ]
        },
        {
            text: "Best animation of 2025?",
            type: "closed",
            img: "actor.jpg", // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "Kaiju no.8", isCorrect: false },
                { text: "Solo leveling", isCorrect: false },
                { text: "Demon slayer: Kimetsuno Yaiba Hashira Training Arc", isCorrect: true },
                { text: "Delicious in Dungeon", isCorrect: false }
            ]
        },
        {
            text: "Best main character of 2025?",
            type: "closed",
            img: "actor.jpg", // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "Maomao", isCorrect: false },
                { text: "Momo", isCorrect: false },
                { text: "Frieren", isCorrect: false },
                { text: "Sung Jinwoo", isCorrect: true }
            ]
        },
        {
            text: "W 'Deszcz na betonie' Taco Hemingway wspomina o jakim mieście?",
            type: "closed",
            img: "actor.jpg", // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "Warszawa", isCorrect: true },
                { text: "Kraków", isCorrect: false },
                { text: "Gdańsk", isCorrect: false },
                { text: "Wrocław", isCorrect: false }
            ]
        },
        {
            text: "Który z tych albumów ma najwiekszą sprzedaż w historii?",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "Romantic Psycho - Quebonafide", isCorrect: false },
                { text: "Boso - Zakopower", isCorrect: false },
                { text: "Po piąte...a niech gadają - Ich Troje", isCorrect: false },
                { text: "Nic Nie Boli, Tak Jak Życie - Budka Suflera", isCorrect: true }
            ]
        },
        {
            text: "Jaki był najpopularniejszy polski utwór na spotify w 2025 roku?",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "Pezet, Auer - Dom nad Wodą", isCorrect: true },
                { text: "Sentino, BNP - CASABLANCA", isCorrect: false },
                { text: "Sobel, francis - CAŁE LATO", isCorrect: false },
                { text: "Sobel, francis, Deemz - KOCHASZ?", isCorrect: false }
            ]
        },
        {
            text: "Kto jest autorem piosenki 'Chwile jak te'",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "Elektryczne Gitary", isCorrect: false },
                { text: "Kamil Bednarek", isCorrect: true },
                { text: "Michał Szczygieł", isCorrect: false },
                { text: "Happysad", isCorrect: false }
            ]
        },
        {
            text: "Kto jest autorem 'Kawałek do tańca'?",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "Elektryczne Gitary", isCorrect: false },
                { text: "Poparzeni Kawą trzy", isCorrect: true },
                { text: "Dżem", isCorrect: false },
                { text: "Wilki", isCorrect: false }
            ]
        },
        {
            text: "Ułóż w kolejności który z tych artystów był najczęściej słuchany w Polsce na spotify: Taco, Oki, Mata, Francis, Sobel",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "", isCorrect: false },
                { text: "", isCorrect: false },
                { text: "", isCorrect: false },
                { text: "", isCorrect: false }
            ]
        },
        {
            text: "Która z tych gier miała największą pulę nagród w 2025 roku?",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "CS2", isCorrect: true },
                { text: "Dota 2", isCorrect: false },
                { text: "League of Legends", isCorrect: false },
                { text: "Starcraft 2", isCorrect: false }
            ]
        },
        {
            text: "Esport World Cup 2025 miał największą pulę nagród jako turniej w 2025, ile?",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "50 mln $", isCorrect: false },
                { text: "70 mln $", isCorrect: true },
                { text: "100 mln $", isCorrect: false },
                { text: "200 mln $", isCorrect: false }
            ]
        },
        {
            text: "Wymień 5 różnych druzyn które wygrały worldsy",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "", isCorrect: false },
                { text: "", isCorrect: false },
                { text: "", isCorrect: false },
                { text: "", isCorrect: false }
            ]
        },
        {
            text: "Wymień 8 różnych drużyn które wygrały majora",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "", isCorrect: false },
                { text: "", isCorrect: false },
                { text: "", isCorrect: false },
                { text: "", isCorrect: false }
            ]
        },
        {
            text: "Jaka była polska 'złota piątka'?",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "", isCorrect: false },
                { text: "", isCorrect: false },
                { text: "", isCorrect: false },
                { text: "", isCorrect: false }
            ]
        },
        {
            text: "Ile razy Los Ratones wygrało EMEA Masters?",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "0", isCorrect: false },
                { text: "1", isCorrect: false },
                { text: "2", isCorrect: false },
                { text: "3", isCorrect: true }
            ]
        },
        {
            text: "Ile razy Jankos wygrał LEC?",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "5", isCorrect: true },
                { text: "4", isCorrect: false },
                { text: "8", isCorrect: false },
                { text: "6", isCorrect: false }
            ]
        },
        {
            text: "W której grze można spotkać frakcję 'Nigt City'",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "GTA V", isCorrect: false },
                { text: "Cyberpunk 2077", isCorrect: true },
                { text: "Watch Dogs", isCorrect: false },
                { text: "Deus Ex", isCorrect: false }
            ]
        },
        {
            text: "Która gra jako pierwsza wygrała nagrode 'Game of the Year' na The Game Awards",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "The Witcher 3", isCorrect: false },
                { text: "Dragon Age: Inquisition", isCorrect: true },
                { text: "Skyrim", isCorrect: false },
                { text: "GTA V", isCorrect: false }
            ]
        },
        {
            text: "W którym secie TFT byli astronauci?",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "3", isCorrect: true },
                { text: "4", isCorrect: false },
                { text: "5", isCorrect: false },
                { text: "6", isCorrect: false }
            ]
        },
        {
            text: "Kupiłem: SG 553, Kevlar z hełmem, CZ75-Auto, granat zaczepny, granat błyskowy i wabik. Ile wydałem? ",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "5150", isCorrect: false },
                { text: "5050", isCorrect: true },
                { text: "4950", isCorrect: false },
                { text: "5250", isCorrect: false }
            ]
        },
        {
            text: "Kupiłem: SCAR-20, Rewolwer R8, Zeus x27, granat zapalający,PP-bizon. Ile wydałem? ",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "7700", isCorrect: true },
                { text: "7900", isCorrect: false },
                { text: "8200", isCorrect: false },
                { text: "8700", isCorrect: false }
            ]
        },
        {
            text: "Kiedy wyszła pierwsza gra z serii Mario Kart",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "1992", isCorrect: true },
                { text: "1994", isCorrect: false },
                { text: "1990", isCorrect: false },
                { text: "1995", isCorrect: false }
            ]
        },
        {
            text: "Kiedy wyszła gra Dead by Daylight?",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "2016", isCorrect: true },
                { text: "2015", isCorrect: false },
                { text: "2014", isCorrect: false },
                { text: "2013", isCorrect: false }
            ]
        },
        {
            text: "Który z poniższych morderców w Dead by Baylight ma zdolność 'Phantom Strike' pozwalająca natychmiastowe przybliżenie sie do przetrwałego?",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "The Trapper", isCorrect: false },
                { text: "The Oni", isCorrect: true },
                { text: "The Hillbilly", isCorrect: false },
                { text: "The Wraith", isCorrect: false }
            ]
        },
        {
            text: "Kiedy była oficjalna premiera pełnej wersji Minecraft?",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "2009", isCorrect: false },
                { text: "2010", isCorrect: false },
                { text: "2008", isCorrect: false },
                { text: "2011", isCorrect: true }
            ]
        },
        {
            text: "Który mob może przyzywac inne moby tego samego typu w trakcie walki, ale tylko w biomie 'Swamp'",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "Witch", isCorrect: true },
                { text: "Slime", isCorrect: false },
                { text: "Zombie Villager", isCorrect: false },
                { text: "Pillager", isCorrect: false }
            ]
        },
        {
            text: "Na którym roku Harry Potter po raz pierwszy uzywa Patronusa?",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "na 2 roku", isCorrect: false },
                { text: "na 3 roku", isCorrect: true },
                { text: "na 4 roku", isCorrect: false },
                { text: "na 5 roku", isCorrect: false }
            ]
        },
        {
            text: "Jak nazywała sie pierwsza planeta którą Obi-Wan Kenobi odwiedza w 'Nowej Nadziei'?",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "Tatooine", isCorrect: true },
                { text: "Alderaan", isCorrect: false },
                { text: "Naboo", isCorrect: false },
                { text: "Coruscant", isCorrect: false }
            ]
        },
        {
            text: "Który Sith był mistrzem Dartha Maula?",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "Darth Vader", isCorrect: false },
                { text: "Darth Sidious ", isCorrect: true },
                { text: "Count Dooku", isCorrect: false },
                { text: "Kylo Ren", isCorrect: false }
            ]
        },
        {
            text: "Ile było horkruksów (i jakie to były)?",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "5", isCorrect: false },
                { text: "6", isCorrect: false },
                { text: "7", isCorrect: true },
                { text: "8", isCorrect: false }
            ]
        },
        {
            text: "Który krasnolud wyrusza z Druzyna Pierścienia?",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "Gimli", isCorrect: true },
                { text: "Dwalin", isCorrect: false },
                { text: "Balin", isCorrect: false },
                { text: "Bombur", isCorrect: false }
            ]
        },
        {
            text: "Kto zabił Neda Starka?",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "Jaime Lannister", isCorrect: false },
                { text: "Gregor Clegane", isCorrect: false },
                { text: "Ilyn Payne", isCorrect: true },
                { text: "Joffrey Baratheon", isCorrect: false }
            ]
        },
        {
            text: "Jak nazywa sie statek w filmie '2001: Odyseja kosmiczna'?",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "Nostromo", isCorrect: false },
                { text: "Discovery One", isCorrect: true },
                { text: "Enterprise", isCorrect: false },
                { text: "Event Horizon", isCorrect: false }
            ]
        },
        {
            text: "I'm gonna make him an offer he can't refuse  - gdzie padły te słowa",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "Scarface", isCorrect: false },
                { text: "The Godfather", isCorrect: true },
                { text: "Goodfellas", isCorrect: false },
                { text: "Casino", isCorrect: false }
            ]
        },
        {
            text: "Keep your friends close, but your enemies close - gdzie padły te słowa?",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "The Godfather: Part II", isCorrect: true },
                { text: "The Godfather", isCorrect: false },
                { text: "Casino", isCorrect: false },
                { text: "Scarface", isCorrect: false }
            ]
        },
        {
            text: "They call ita a Royale with cheese -  gdzie padły te słowa?",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "Reservoir Dogs", isCorrect: false },
                { text: "Pulp Fiction", isCorrect: true },
                { text: "Jackie Brown", isCorrect: false },
                { text: "Kill Bill", isCorrect: false }
            ]
        },
        {
            text: "I'm the king of the world! - gdzie padły te słowa?",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "Pearl Harbor", isCorrect: false },
                { text: "Titanic", isCorrect: true },
                { text: "The Perfect Storm", isCorrect: false },
                { text: "Master an Commander", isCorrect: false }
            ]
        },
        {
            text: "Za co był skazany Andy Dufresne?",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "", isCorrect: false },
                { text: "", isCorrect: false },
                { text: "", isCorrect: false },
                { text: "", isCorrect: false }
            ]
        },
        {
            text: "Który kolor pigułki wybiera Neo aby odkryc prawde?",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "czaerwona", isCorrect: true },
                { text: "niebieskie", isCorrect: false }
                
            ]
        },
        {
            text: "Jak nazywa sie sztuczna inteligencja kontrolująca Matrix?",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "Skynet", isCorrect: false },
                { text: "Hal 9000", isCorrect: false },
                { text: "The Architect", isCorrect: true },
                { text: "VIKI", isCorrect: false }
            ]
        },
        {
            text: "Jka nazywa sie przyjaciółka i miłośc Forresta?",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "Jenny", isCorrect: true },
                { text: "Susan", isCorrect: false },
                { text: "Mary", isCorrect: false },
                { text: "Rose", isCorrect: false }
            ]
        },
        {
            text: "Jak Forrest okresla życie w jednej ze swoich metafor",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "Jak pudełko czekoladek", isCorrect: true },
                { text: "jak gra w szachy", isCorrect: false },
                { text: "jak wyścig samochodowy", isCorrect: false },
                { text: "Jka rzeka", isCorrect: false }
            ]
        },
        {
            text: "Kto w MCU stwierdził że nie może przywrócic życia jednej osoby, nie niszcząc życia wielu innych?",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "Doctor Strange", isCorrect: false },
                { text: "Vision", isCorrect: false },
                { text: "Thanos", isCorrect: true },
                { text: "Tony Stark", isCorrect: false }
            ]
        },
        {
            text: "Który członek rodu Cullenów potrafi manipulowac emocjami?",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "Alice", isCorrect: false },
                { text: "Carlisle", isCorrect: false },
                { text: "Jasper", isCorrect: true },
                { text: "Emmett", isCorrect: false }
            ]
        },
        {
            text: "Jak nazywa sie miasto, do którego przeprowadza sie Bella Swan?",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "Port Angeles", isCorrect: false },
                { text: "Seattle", isCorrect: false },
                { text: "Forks", isCorrect: true },
                { text: "Olympia", isCorrect: false }
            ]
        },
        {
            text: "Która postac łamie zasade 'nie zakochuj się' jako pierwsza?",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "Tokio", isCorrect: false },
                { text: "Nairobi", isCorrect: false },
                { text: "Profesor", isCorrect: false },
                { text: "Berlin", isCorrect: true }
            ]
        },
        {
            text: "Dlaczego brama do Upside Down nie zamyka sie całkowicie po sezonie 2?",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "Dustin ją ponownie otwiera", isCorrect: false },
                { text: "Mind Flayer zachowuje połączenie z Willem", isCorrect: true },
                { text: "Eleven traci moce", isCorrect: false },
                { text: "Brama jest naturalnym zjawiskiem", isCorrect: false }
            ]
        },
        {
            text: "Dlaczego numer 001 mógł zginąc juz w pierwszej grze, a jednak nie ginie?",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "Został ocalony przez Gi-huna", isCorrect: false },
                { text: "Gra była ustawiona pod niego", isCorrect: false },
                { text: "Jego broń nie była aktywna", isCorrect: true },
                { text: "Miał fałszywa tożsamość", isCorrect: false }
            ]
        },
        {
            text: "Dlaczego Beth Harmon przestaje używać tabletek w kluczowym momencie kariery?",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "zostaje zakazane", isCorrect: false },
                { text: "Kończą sie ", isCorrect: false },
                { text: "uświadamia sobie, ze ograniczają jej kreatywność", isCorrect: true },
                { text: "namawia ja trener", isCorrect: false }
            ]
        },
        {
            text: "Dlaczego Gus Fring ufa Walterowi pomimo oczywistego zagrozenia?",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "jest naiwny", isCorrect: false },
                { text: "Walter jest najlepszym chemikiem", isCorrect: false },
                { text: "Gus widzi w nim swoje odbicie", isCorrect: true },
                { text: "Mike go przekonuje", isCorrect: false }
            ]
        },
        {
            text: "Ile koncertów w Polsc miał Michael Jackson",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "1", isCorrect: true },
                { text: "2", isCorrect: false },
                { text: "6", isCorrect: false },
                { text: "0", isCorrect: false }
            ]
        },
        {
            text: "Który artysta jest założycielem wytwórni OVO Sound?",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "Kanye West", isCorrect: false },
                { text: "The Weekend", isCorrect: false },
                { text: "Drake", isCorrect: true },
                { text: "Travis Scott", isCorrect: false }
            ]
        },
        {
            text: "Który raper zdobył Pulitzera za album DAMN.?",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "Kendrick Lamar", isCorrect: true },
                { text: "Nas", isCorrect: false },
                { text: "Jay-Z", isCorrect: false },
                { text: "Kanye West", isCorrect: false }
            ]
        },
        {
            text: "Który raper zginął w 1996 roku w Las Vegas",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "The Notorious B.I.G.", isCorrect: false },
                { text: "Nipsey Hussle", isCorrect: false },
                { text: "Pop Smoke", isCorrect: false },
                { text: "2Pac", isCorrect: true }
            ]
        },
        {
            text: "Album 'To Pimp a Butterfly' wydał",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "J.Cole", isCorrect: false },
                { text: "Kendrick Lamar", isCorrect: true },
                { text: "Childdish Gambino", isCorrect: false },
                { text: "Tyler, The Creator", isCorrect: false }
            ]
        },
        {
            text: "Kto to powiedział: 'I'm not a businessman, I'm a business, man'?",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "Nas", isCorrect: false },
                { text: "Jay-Z", isCorrect: true },
                { text: "Diddy", isCorrect: false },
                { text: "50 Cent", isCorrect: false }
            ]
        },
        {
            text: "Kto to powiedział: 'I won't be a rock star. Iwill be a legend.'?",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "John Lennon", isCorrect: false },
                { text: "Freddie Mercury", isCorrect: true },
                { text: "Stevie Wonder", isCorrect: false },
                { text: "David Bowie", isCorrect: false }
            ]
        },
        {
            text: "Kto to powiedział 'I don't do drugs. Iam drugs",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "Salvador Dali", isCorrect: true },
                { text: "Michael Jackson", isCorrect: false },
                { text: "Stevie Wonder", isCorrect: false },
                { text: "Jay-Z", isCorrect: false }
            ]
        },
        {
            text: "Kto to powiedział 'Jesteśmy bardziej popularni niż Jezus' ?",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "Mick Jagger", isCorrect: false },
                { text: "John Lennon", isCorrect: true },
                { text: "Freddie Mercury", isCorrect: false },
                { text: "David Bowie", isCorrect: false }
            ]
        },
        {
            text: "Uzupełnij tekst piosenki: Budujemy nasz dom na piasku\nCena ...\nKupiliśmy prawie wszystko\nAle ....\nChce pozbierać znowu myśli\n.... naszych serc\nWidzieć ile szczęścia w sobie\nKryje każda mała rzecz?\nCieszmy się z małych rzeczy, bo\nWzór ......",
            type: "open",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            
        },
        {
            text: "Co/kto to jest?",
            type: "open",
            img: "beatles.png", // Wrzuć plik actor.jpg do folderu images!
            
        },
        {
            text: "Jak nazywa sie wioska z której pochodzi Naruto?",
            type: "closed",
            img: null, // Wrzuć plik actor.jpg do folderu images!
            options: [
                { text: "Sunagakure", isCorrect: false },
                { text: "Kirigakure", isCorrect: false },
                { text: "Konohagakure", isCorrect: true },
                { text: "Iwagakure", isCorrect: false }
            ]
        },
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
        },
        {
    text: "Wymień sąsiadów Polski.",
    type: "open",
},
{
    text: "Wymień wszystkie kontynenty.",
    type: "open",
},
{
    text: "Uporządkuj kontynenty od największego do najmniejszego.",
    type: "open",
},
    {
        text: "Które z tych miast jest stolicą Szkocji?",
        type: "closed",
        options: [
            { text: "Glasgow", isCorrect: false },
            { text: "Edynburg", isCorrect: true },
            { text: "Hearts", isCorrect: false },
            { text: "Cardiff", isCorrect: false }
        ]
    },
    {
        text: "Ile jest stanów w Stanach Zjednoczonych?",
        type: "closed",
        options: [
            { text: "51", isCorrect: false },
            { text: "48", isCorrect: false },
            { text: "50", isCorrect: true },
            { text: "52", isCorrect: false }
        ]
    },
    {
        text: "Która z tych gleb jest najżyźniejsza?",
        type: "closed",
        options: [
            { text: "Mady", isCorrect: false },
            { text: "Gleby bielicowe", isCorrect: false },
            { text: "Gleby torfowe", isCorrect: false },
            { text: "Czarnoziemy", isCorrect: true }
        ]
    },
    {
        text: "Która z tych gleb występuje najczęściej w Polsce?",
        type: "closed",
        options: [
            { text: "Gleby brunatne", isCorrect: true },
            { text: "Gleby bielicowe", isCorrect: false },
            { text: "Rędziny", isCorrect: false },
            { text: "Gleby torfowe", isCorrect: false }
        ]
    },
    {
        text: "Który z tych krajów ma największą powierzchnię?",
        type: "closed",
        options: [
            { text: "Indie", isCorrect: true },
            { text: "Argentyna", isCorrect: false },
            { text: "Algieria", isCorrect: false },
            { text: "Meksyk", isCorrect: false }
        ]
    },
    {
        text: "Który z tych krajów ma największą powierzchnię?",
        type: "closed",
        options: [
            { text: "Gruzja", isCorrect: false },
            { text: "Litwa", isCorrect: false },
            { text: "Łotwa", isCorrect: false },
            { text: "Serbia", isCorrect: true }
        ]
    },
    {
        text: "Która suma państw ma największą powierzchnię?",
        type: "closed",
        options: [
            { text: "Madagaskar, Kamerun, Szwecja", isCorrect: false },
            { text: "Iran, Ekwador, Grecja", isCorrect: true },
            { text: "Włochy, Irak, Norwegia", isCorrect: false },
            { text: "Chile, Turcja, Słowacja", isCorrect: false }
        ]
    },
    {
        text: "Ile jest województw w Polsce?",
        type: "closed",
        options: [
            { text: "14", isCorrect: false },
            { text: "17", isCorrect: false },
            { text: "49", isCorrect: false },
            { text: "16", isCorrect: true }
        ]
    },
    {
        text: "Ile jest powiatów w Polsce?",
        type: "closed",
        options: [
            { text: "86", isCorrect: false },
            { text: "114", isCorrect: false },
            { text: "157", isCorrect: false },
            { text: "380", isCorrect: true }
        ]
    },
    {
        text: "Które z tych miast ma największą populację?",
        type: "closed",
        options: [
            { text: "Bydgoszcz", isCorrect: false },
            { text: "Lublin", isCorrect: false },
            { text: "Łódź", isCorrect: true },
            { text: "Szczecin", isCorrect: false }
        ]
    },
    {
        text: "Ile jest miast w Polsce powyżej 500 tysięcy mieszkańców?",
        type: "closed",
        options: [
            { text: "2", isCorrect: false },
            { text: "3", isCorrect: false },
            { text: "4", isCorrect: false },
            { text: "5", isCorrect: true }
        ]
    },
    {
        text: "Które morze jest najbardziej zasolone?",
        type: "closed",
        options: [
            { text: "Morze Śródziemne", isCorrect: false },
            { text: "Morze Czerwone", isCorrect: false },
            { text: "Morze Martwe", isCorrect: true },
            { text: "Morze Bałtyckie", isCorrect: false }
        ]
    },
{
        "text": "Które państwo ma NAJWIĘCEJ sąsiadów lądowych?",
        "type": "closed",
        "options": [
            { "text": "Rosja", "isCorrect": false },
            { "text": "Chiny", "isCorrect": true },
            { "text": "Brazylia", "isCorrect": false },
            { "text": "Niemcy", "isCorrect": false }
        ]
    },
    {
        "text": "Jak nazywa się cieśnina oddzielająca Azję od Ameryki Północnej?",
        "type": "closed",
        "options": [
            { "text": "Magellana", "isCorrect": false },
            { "text": "Gibraltarska", "isCorrect": false },
            { "text": "Beringa", "isCorrect": true },
            { "text": "Drake’a", "isCorrect": false }
        ]
    },
    {
        "text": "Która z tych rzek jest najdłuższa?",
        "type": "closed",
        "options": [
            { "text": "Parana", "isCorrect": false },
            { "text": "Jangcy", "isCorrect": true },
            { "text": "Kongo", "isCorrect": false },
            { "text": "Amur", "isCorrect": false }
        ]
    },
    {
        "text": "Która forma terenu powstaje w wyniku działalności lodowca?",
        "type": "closed",
        "options": [
            { "text": "Delta", "isCorrect": false },
            { "text": "Meander", "isCorrect": false },
            { "text": "Morena", "isCorrect": true },
            { "text": "Wąwóz", "isCorrect": false }
        ]
    },
    {
        "text": "Który wskaźnik najlepiej opisuje poziom rozwoju społeczno-gospodarczego państwa?",
        "type": "closed",
        "options": [
            { "text": "PKB", "isCorrect": false },
            { "text": "Gęstość zaludnienia", "isCorrect": false },
            { "text": "Przyrost naturalny", "isCorrect": false },
            { "text": "HDI", "isCorrect": true }
        ]
    },
    {
        "text": "Który region Polski ma najwyższy udział energii z węgla brunatnego?",
        "type": "closed",
        "options": [
            { "text": "Górny Śląsk", "isCorrect": false },
            { "text": "Bełchatów", "isCorrect": true },
            { "text": "Zagłębie Lubelskie", "isCorrect": false },
            { "text": "Podkarpacie", "isCorrect": false }
        ]
    },
    {
        "text": "Jaka jest najczęściej używana metoda do wydobywania węgla kamiennego?",
        "type": "closed",
        "options": [
            { "text": "głębinowa", "isCorrect": true },
            { "text": "odkrywkowa", "isCorrect": false },
            { "text": "otworowa", "isCorrect": false }
        ]
    },
    {
        "text": "Który z tych krajów ma największe złoża diamentów?",
        "type": "closed",
        "options": [
            { "text": "Chiny", "isCorrect": false },
            { "text": "Botswana", "isCorrect": true },
            { "text": "RPA", "isCorrect": false },
            { "text": "Brazylia", "isCorrect": false }
        ]
    },
   
    {
        "text": "Który kraj posiada największe potwierdzone złoża ropy naftowej na świecie?",
        "type": "closed",
        "options": [
            { "text": "Arabia Saudyjska", "isCorrect": false },
            { "text": "Rosja", "isCorrect": false },
            { "text": "Wenezuela", "isCorrect": true },
            { "text": "USA", "isCorrect": false }
        ]
    },
      {
        "text": "W którym roku Polska przyjęła chrzest?",
        "type": "closed",
        "options": [
            { "text": "966", "isCorrect": true },
            { "text": "1000", "isCorrect": false },
            { "text": "1025", "isCorrect": false },
            { "text": "1410", "isCorrect": false }
        ]
    },
    {
        "text": "Kto był pierwszym królem Polski?",
        "type": "closed",
        "options": [
            { "text": "Mieszko I", "isCorrect": false },
            { "text": "Bolesław Chrobry", "isCorrect": true },
            { "text": "Mieszko II", "isCorrect": false },
            { "text": "Władysław Łokietek", "isCorrect": false }
        ]
    },
    {
        "text": "Kto był wodzem wojsk polskich pod Wiedniem w 1683 roku?",
        "type": "closed",
        "options": [
            { "text": "Stefan Batory", "isCorrect": false },
            { "text": "Jan Kazimierz", "isCorrect": false },
            { "text": "Jan III Sobieski", "isCorrect": true },
            { "text": "August II Mocny", "isCorrect": false }
        ]
    },
    {
        "text": "Jak nazywał się ostatni król Polski?",
        "type": "closed",
        "options": [
            { "text": "August III Sas", "isCorrect": false },
            { "text": "Stanisław August Poniatowski", "isCorrect": true },
            { "text": "Stanisław Leszczyński", "isCorrect": false },
            { "text": "Władysław IV Waza", "isCorrect": false }
        ]
    },
    {
        "text": "Kiedy została uchwalona konstytucja 3 maja?",
        "type": "closed",
        "options": [
            { "text": "1787", "isCorrect": false },
            { "text": "1791", "isCorrect": true },
            { "text": "1793", "isCorrect": false },
            { "text": "1794", "isCorrect": false }
        ]
    },
    {
        "text": "Co było bezpośrednią przyczyną wybuchu I wojny światowej?",
        "type": "closed",
        "options": [
            { "text": "Rewolucja w Rosji", "isCorrect": false },
            { "text": "Atak na Pearl Harbor", "isCorrect": false },
            { "text": "Zamach w Sarajewie", "isCorrect": true },
            { "text": "Traktat wersalski", "isCorrect": false }
        ]
    },
    {
        "text": "Jak nazywał się plan odbudowy Europy po II wojnie światowej?",
        "type": "closed",
        "options": [
            { "text": "Plan Dawesa", "isCorrect": false },
            { "text": "Plan Schumana", "isCorrect": false },
            { "text": "Plan Marshalla", "isCorrect": true },
            { "text": "Plan Mołotowa", "isCorrect": false }
        ]
    },
    {
        "text": "Jak nazywał się traktat kończący I wojnę światową?",
        "type": "closed",
        "options": [
            { "text": "Traktat paryski", "isCorrect": false },
            { "text": "Traktat wersalski", "isCorrect": true },
            { "text": "Traktat wiedeński", "isCorrect": false },
            { "text": "Traktat ryski", "isCorrect": false }
        ]
    },
    {
        "text": "Który król przeniósł stolicę Polski z Krakowa do Warszawy?",
        "type": "closed",
        "options": [
            { "text": "Zygmunt Stary", "isCorrect": false },
            { "text": "Zygmunt III Waza", "isCorrect": true },
            { "text": "Jan III Sobieski", "isCorrect": false },
            { "text": "Stanisław August Poniatowski", "isCorrect": false }
        ]
    },
    {
        "text": "Kiedy została ustanowiona obecna konstytucja?",
        "type": "closed",
        "options": [
            { "text": "1989", "isCorrect": false },
            { "text": "1990", "isCorrect": false },
            { "text": "1993", "isCorrect": false },
            { "text": "1997", "isCorrect": true }
        ]
    },
    {
        "text": "Kiedy został wprowadzony stan wojenny?",
        "type": "closed",
        "options": [
            { "text": "13 grudnia 1981", "isCorrect": true },
            { "text": "4 grudnia 1983", "isCorrect": false },
            { "text": "22 lipca 1983", "isCorrect": false },
            { "text": "15 grudnia 1980", "isCorrect": false }
        ]
    },
    {
        "text": "Wymień wszystkich prezydentów III RP.",
        "type": "open"
    },
     {
        "text": "Kiedy odbyła się bitwa znana jako “Cud na Wisłą” i opisz?",
        "type": "closed",
        "options": [
            { "text": "1918", "isCorrect": false },
            { "text": "1920", "isCorrect": true },
            { "text": "1921", "isCorrect": false },
            { "text": "1940", "isCorrect": false }
        ]
    },
    {
        "text": "Kiedy wybuchło powstanie styczniowe?",
        "type": "closed",
        "options": [
            { "text": "1816", "isCorrect": false },
            { "text": "1830", "isCorrect": false },
            { "text": "1831", "isCorrect": false },
            { "text": "1863", "isCorrect": true }
        ]
    },
    {
        "text": "Kiedy Adolf Hitler został kanclerzem Niemiec?",
        "type": "closed",
        "options": [
            { "text": "1930", "isCorrect": false },
            { "text": "1933", "isCorrect": true },
            { "text": "1929", "isCorrect": false },
            { "text": "1935", "isCorrect": false }
        ]
    },
    {
        "text": "Co zapoczątkowało Wielki Kryzys (przyczyna i kiedy)?",
        "type": "open"
    },
    {
        "text": "Kiedy Polska weszła do NATO?",
        "type": "closed",
        "options": [
            { "text": "1997", "isCorrect": false },
            { "text": "2004", "isCorrect": true },
            { "text": "1999", "isCorrect": false },
            { "text": "1990", "isCorrect": false }
        ]
    },
    {
        "text": "Kiedy Lech Wałęsa otrzymał nagrodę Nobla?",
        "type": "closed",
        "options": [
            { "text": "1983", "isCorrect": false },
            { "text": "1989", "isCorrect": true },
            { "text": "1990", "isCorrect": false },
            { "text": "1987", "isCorrect": false }
        ]
    },
    {
        "text": "Na które japońskie miasta zrzucono bomby atomowe w 1945 roku?",
        "type": "closed",
        "options": [
            { "text": "Hiroshima i Osaka", "isCorrect": false },
            { "text": "Hiroshima i Nagasaki", "isCorrect": true },
            { "text": "Nagasaki i Nagoya", "isCorrect": false },
            { "text": "Hiroshima i Fukuoka", "isCorrect": false }
        ]
    },
    {
        "text": "Kto napisał „Pan Tadeusz”?",
        "type": "closed",
        "options": [
            { "text": "Adam Asnyk", "isCorrect": false },
            { "text": "Adam Mickiewicz", "isCorrect": true },
            { "text": "Juliusz Słowacki", "isCorrect": false },
            { "text": "Henryk Sienkiewicz", "isCorrect": false }
        ]
    },
    {
        "text": "Jakie są części mowy?",
        "type": "closed",
        "options": [
            { "text": "Rzeczownik, czasownik, przymiotnik", "isCorrect": true },
            { "text": "Litera, wyraz, zdanie", "isCorrect": false },
            { "text": "Akapit, rozdział, książka", "isCorrect": false },
            { "text": "Zdanie, akapit, wyraz", "isCorrect": false }
        ]
    },
    {
        "text": "Jak nazywa się główny bohater „Quo Vadis”?",
        "type": "closed",
        "options": [
            { "text": "Petroniusz", "isCorrect": false },
            { "text": "Marek Winicjusz", "isCorrect": true },
            { "text": "Ligia", "isCorrect": false },
            { "text": "Neron", "isCorrect": false }
        ]
    },
    {
        "text": "Co to jest antonim?",
        "type": "closed",
        "options": [
            { "text": "Wyraz o podobnym znaczeniu", "isCorrect": false },
            { "text": "Wyraz o przeciwnym znaczeniu", "isCorrect": true },
            { "text": "Wyraz obcy", "isCorrect": false },
            { "text": "Wyraz złożony", "isCorrect": false }
        ]
    },
    {
        "text": "Kto napisał „Lalkę”?",
        "type": "closed",
        "options": [
            { "text": "Bolesław Prus", "isCorrect": true },
            { "text": "Henryk Sienkiewicz", "isCorrect": false },
            { "text": "Stefan Żeromski", "isCorrect": false },
            { "text": "Eliza Orzeszkowa", "isCorrect": false }
        ]
    },
    {
        "text": "Co to jest inwersja w języku polskim?",
        "type": "closed",
        "options": [
            { "text": "Przerwa w wierszu", "isCorrect": false },
            { "text": "Zmiana naturalnego szyku wyrazów w zdaniu", "isCorrect": true },
            { "text": "Rym końcowy", "isCorrect": false },
            { "text": "Powtórzenie słowa", "isCorrect": false }
        ]
    },
    {
        "text": "Co to jest anafora w poezji?",
        "type": "closed",
        "options": [
            { "text": "Rym wewnętrzny", "isCorrect": false },
            { "text": "Powtórzenie tego samego słowa lub frazy na początku wersów", "isCorrect": true },
            { "text": "Powtórzenie rymów w zwrotkach", "isCorrect": false },
            { "text": "Rodzaj strofy", "isCorrect": false }
        ]
    },
    {
        "text": "Kto napisał „Balladynę”?",
        "type": "closed",
        "options": [
            { "text": "Adam Mickiewicz", "isCorrect": false },
            { "text": "Juliusz Słowacki", "isCorrect": true },
            { "text": "Stefan Żeromski", "isCorrect": false },
            { "text": "Bolesław Prus", "isCorrect": false }
        ]
    },
    {
        "text": "Który termin oznacza odmianę czasownika przez osoby, liczby i czasy?",
        "type": "closed",
        "options": [
            { "text": "Deklinacja", "isCorrect": false },
            { "text": "Koniugacja", "isCorrect": true },
            { "text": "Fleksja", "isCorrect": false },
            { "text": "Fleksja nominalna", "isCorrect": false }
        ]
    },
    {
        "text": "W „Zbrodni i karze” Fiodora Dostojewskiego, Raskolnikow popełnia zabójstwo:",
        "type": "closed",
        "options": [
            { "text": "W akcie gniewu wobec przypadkowej osoby", "isCorrect": false },
            { "text": "Na starej lichwiarce i jej siostrze", "isCorrect": true },
            { "text": "Na swoim nauczycielu", "isCorrect": false },
            { "text": "Na sędzim", "isCorrect": false }
        ]
    },
        {
        "text": "Jak nazywa się motyw literacki przewodni w „Makbecie” Williama Shakespeare’a?",
        "type": "closed",
        "options": [
            { "text": "Miłość i zdrada", "isCorrect": false },
            { "text": "Wina i ambicja prowadząca do zguby", "isCorrect": true },
            { "text": "Wolność jednostki", "isCorrect": false },
            { "text": "Walka dobra ze złem", "isCorrect": false }
        ]
    },
    {
        "text": "Kto w powieści symbolizuje ideę „dyktatury moralnej” i stara się wpłynąć na Barykę?",
        "type": "closed",
        "options": [
            { "text": "Seweryn Baryka", "isCorrect": false },
            { "text": "Profesor Gajowiec", "isCorrect": true },
            { "text": "Jadwiga", "isCorrect": false },
            { "text": "Ryszard Olczak", "isCorrect": false }
        ]
    },
    {
        "text": "Co symbolizuje „Wielki Brat” w powieści Orwella?",
        "type": "closed",
        "options": [
            { "text": "Wszechobecne reklamy manipulujące społeczeństwem", "isCorrect": false },
            { "text": "Przywódcę demokratycznego rządu", "isCorrect": false },
            { "text": "Wszechobecną inwigilację i totalitarną władzę", "isCorrect": true },
            { "text": "Bohatera rewolucji przeciwko Partii", "isCorrect": false }
        ]
    },
    {
        "text": "Co symbolizuje postać Oleńki Billewiczówny w powieści?",
        "type": "closed",
        "options": [
            { "text": "Sprawiedliwość", "isCorrect": false },
            { "text": "Cnotę i ideał patriotyzmu", "isCorrect": true },
            { "text": "Chciwość i ambicję", "isCorrect": false },
            { "text": "Bezwzględną zemstę", "isCorrect": false }
        ]
    },
    {
        "text": "Który bóg rzymski był odpowiednikiem greckiego Hermesa?",
        "type": "closed",
        "options": [
            { "text": "Mars", "isCorrect": false },
            { "text": "Merkury", "isCorrect": true },
            { "text": "Jowisz", "isCorrect": false },
            { "text": "Neptun", "isCorrect": false }
        ]
    },
    {
        "text": "Która bogini była uważana za patronkę mądrości, wojny sprawiedliwej i rzemiosła?",
        "type": "closed",
        "options": [
            { "text": "Artemida", "isCorrect": false },
            { "text": "Afrodyta", "isCorrect": false },
            { "text": "Hera", "isCorrect": false },
            { "text": "Atena", "isCorrect": true }
        ]
    },
    {
        "text": "Która z greckich muz była patronką historii i poezji epickiej?",
        "type": "closed",
        "options": [
            { "text": "Kaliope", "isCorrect": true },
            { "text": "Klio", "isCorrect": false },
            { "text": "Urania", "isCorrect": false },
            { "text": "Talia", "isCorrect": false }
        ]
    },
    {
        "text": "Jak nazywa się jednostka siły w układzie SI?",
        "type": "closed",
        "options": [
            { "text": "Newton", "isCorrect": true },
            { "text": "Dżul", "isCorrect": false },
            { "text": "Pascal", "isCorrect": false },
            { "text": "Watt", "isCorrect": false }
        ]
    },
    {
        "text": "Co mierzymy w jednostkach Amperów?",
        "type": "closed",
        "options": [
            { "text": "Napięcie", "isCorrect": false },
            { "text": "Natężenie prądu", "isCorrect": true },
            { "text": "Opór elektryczny", "isCorrect": false },
            { "text": "Moc", "isCorrect": false }
        ]
    },
    {
        "text": "Jak nazywa się proces przechodzenia cieczy w gaz?",
        "type": "closed",
        "options": [
            { "text": "Krzepnięcie", "isCorrect": false },
            { "text": "Skraplanie", "isCorrect": false },
            { "text": "Parowanie", "isCorrect": true },
            { "text": "Sublimacja", "isCorrect": false }
        ]
    },
    {
        "text": "Co to jest atom?",
        "type": "closed",
        "options": [
            { "text": "Wiązka elektronów", "isCorrect": false },
            { "text": "Najmniejsza cząstka pierwiastka chemicznego", "isCorrect": true },
            { "text": "Związek chemiczny", "isCorrect": false },
            { "text": "Proton", "isCorrect": false }
        ]
    },
    {
        "text": "Który związek chemiczny jest zasadą mocną?",
        "type": "closed",
        "options": [
            { "text": "HCl", "isCorrect": false },
            { "text": "NaOH", "isCorrect": true },
            { "text": "CH₃COOH", "isCorrect": false },
            { "text": "H₂SO₄", "isCorrect": false }
        ]
    },
    {
        "text": "Jak nazywa się wykres zależności ciśnienia gazu od jego objętości w stałej temperaturze?",
        "type": "closed",
        "options": [
            { "text": "Wykres izotermiczny", "isCorrect": true },
            { "text": "Wykres izobaryczny", "isCorrect": false },
            { "text": "Wykres izochoryczny", "isCorrect": false },
            { "text": "Wykres izentalpiczny", "isCorrect": false }
        ]
    },
    {
        "text": "Jaka jest wartość 1 mola wodoru w gramach?",
        "type": "closed",
        "options": [
            { "text": "0,5 g", "isCorrect": false },
            { "text": "1 g", "isCorrect": true },
            { "text": "2 g", "isCorrect": false },
            { "text": "16 g", "isCorrect": false }
        ]
    },
    {
        "text": "Jak nazywa się reakcja, w której atomy wymieniają się miejscami w cząsteczce?",
        "type": "closed",
        "options": [
            { "text": "Redukcja", "isCorrect": false },
            { "text": "Oksydacja", "isCorrect": false },
            { "text": "Reakcja substytucji", "isCorrect": true },
            { "text": "Reakcja addycji", "isCorrect": false }
        ]
    },
    {
        "text": "II prawo Newtona mówi, że siła działająca na ciało jest równa:",
        "type": "closed",
        "options": [
            { "text": "masie ciała pomnożonej przez jego prędkość", "isCorrect": false },
            { "text": "masie ciała pomnożonej przez jego przyspieszenie", "isCorrect": true },
            { "text": "zmianie energii kinetycznej ciała", "isCorrect": false },
            { "text": "sile tarcia działającej na ciało", "isCorrect": false }
        ]
    },
    {
        "text": "Które zjawisko fizyczne opisuje wzrost prędkości cząsteczek gazu przy podgrzewaniu?",
        "type": "closed",
        "options": [
            { "text": "Dyfuzję", "isCorrect": false },
            { "text": "Ruch cieplny cząsteczek", "isCorrect": true },
            { "text": "Prawo Archimedesa", "isCorrect": false },
            { "text": "Zjawisko fotoelektryczne", "isCorrect": false }
        ]
    },
    {
        "text": "Prawo Hooke’a opisuje zależność między:",
        "type": "closed",
        "options": [
            { "text": "siłą a masą ciała", "isCorrect": false },
            { "text": "napięciem a oporem", "isCorrect": false },
            { "text": "odkształceniem sprężyny a siłą działającą na sprężynę", "isCorrect": true },
            { "text": "temperaturą a ciśnieniem", "isCorrect": false }
        ]
    },
    {
        "text": "Ciało pozostaje w spoczynku, dopóki nie zadziała na nie siła. To jest:",
        "type": "closed",
        "options": [
            { "text": "II prawo Newtona", "isCorrect": false },
            { "text": "I prawo Newtona", "isCorrect": true },
            { "text": "III prawo Newtona", "isCorrect": false },
            { "text": "Prawo Archimedesa", "isCorrect": false }
        ]
    },
    {
        "text": "III prawo Newtona stwierdza, że:",
        "type": "closed",
        "options": [
            { "text": "każda akcja powoduje równą i przeciwną reakcję", "isCorrect": true },
            { "text": "siła wypadkowa jest proporcjonalna do przyspieszenia", "isCorrect": false },
            { "text": "ciało pozostaje w spoczynku, jeśli nie działa siła", "isCorrect": false },
            { "text": "prędkość ciała jest stała w próżni", "isCorrect": false }
        ]
    },
    {
        "text": "Podaj wzór na prędkość.",
        "type": "open"
    },
    {
        "text": "Jaki jest wzór na sól kuchenną?",
        "type": "closed",
        "options": [
            { "text": "KCl", "isCorrect": false },
            { "text": "NaCl", "isCorrect": true },
            { "text": "MgCl₂", "isCorrect": false },
            { "text": "CaCl₂", "isCorrect": false }
        ]
    },
        
    ],
    "rozne": [
        {
            text: "Wymień 3 składniki pizzy Margherita.",
            type: "open"
        },
        {
        "text": "Jak długo trwa lot światła z Słońca do Ziemi?",
        "type": "closed",
        "options": [
            { "text": "8 sekund", "isCorrect": false },
            { "text": "8 minut", "isCorrect": true },
            { "text": "1 godzina", "isCorrect": false },
            { "text": "24 godziny", "isCorrect": false }
        ]
    },
    {
        "text": "Ile procent powierzchni Ziemi zajmuje woda?",
        "type": "closed",
        "options": [
            { "text": "52%", "isCorrect": false },
            { "text": "60%", "isCorrect": false },
            { "text": "65%", "isCorrect": false },
            { "text": "71%", "isCorrect": true }
        ]
    },
    {
        "text": "Który kraj wynalazł papier?",
        "type": "closed",
        "options": [
            { "text": "Egipt", "isCorrect": false },
            { "text": "Chiny", "isCorrect": true },
            { "text": "Grecja", "isCorrect": false },
            { "text": "Indie", "isCorrect": false }
        ]
    },
    {
        "text": "Które zwierzę potrafi spać stojąc?",
        "type": "closed",
        "options": [
            { "text": "Kot", "isCorrect": false },
            { "text": "Pies", "isCorrect": false },
            { "text": "Koń", "isCorrect": true },
            { "text": "Królik", "isCorrect": false }
        ]
    },
    {
        "text": "Który pierwiastek chemiczny odpowiada za zielony kolor roślin w procesie fotosyntezy?",
        "type": "closed",
        "options": [
            { "text": "Żelazo", "isCorrect": false },
            { "text": "Magnez", "isCorrect": true },
            { "text": "Wapń", "isCorrect": false },
            { "text": "Potas", "isCorrect": false }
        ]
    },
    {
        "text": "Które zwierzę potrafi przetrwać bez jedzenia nawet kilka lat?",
        "type": "closed",
        "options": [
            { "text": "bóbr", "isCorrect": false },
            { "text": "Słoń", "isCorrect": false },
            { "text": "Tardigrad", "isCorrect": true },
            { "text": "Kot", "isCorrect": false }
        ]
    },
    {
        "text": "Jaki jest najstarszy znany zapis muzyczny na świecie?",
        "type": "closed",
        "options": [
            { "text": "Utwór Bacha", "isCorrect": false },
            { "text": "Hymn do Nikkala", "isCorrect": true },
            { "text": "„Oda do radości”", "isCorrect": false },
            { "text": "Pieśni Homera", "isCorrect": false }
        ]
    },
    {
        "text": "Która planeta w Układzie Słonecznym może mieć deszcz ze szkła?",
        "type": "closed",
        "options": [
            { "text": "Wenus", "isCorrect": false },
            { "text": "Neptun", "isCorrect": true },
            { "text": "Mars", "isCorrect": false },
            { "text": "Merkury", "isCorrect": false }
        ]
    },
    {
        "text": "Czy istnieje zwierzę bez mózgu?",
        "type": "open"
    },
    {
        "text": "Jaka jest największa zwierzęca ryba na świecie?",
        "type": "closed",
        "options": [
            { "text": "Rekin biały", "isCorrect": false },
            { "text": "Marlin", "isCorrect": false },
            { "text": "Rekin wielorybi", "isCorrect": true },
            { "text": "Płaszczka", "isCorrect": false }
        ]
    },
    {
        "text": "Jakie zwierzę żyje najdłużej?",
        "type": "closed",
        "options": [
            { "text": "Żółw Aldabra", "isCorrect": false },
            { "text": "Wieloryb grenlandzki", "isCorrect": true },
            { "text": "Rekin", "isCorrect": false },
            { "text": "Słoń afrykański", "isCorrect": false }
        ]
    },
    {
        "text": "Najdłuższy czas utrzymania oddechu pod wodą przez człowieka wynosi:",
        "type": "closed",
        "options": [
            { "text": "16 min 49 s", "isCorrect": false },
            { "text": "21 min 8 s", "isCorrect": false },
            { "text": "24 min 37 s", "isCorrect": true },
            { "text": "35 min 4 s", "isCorrect": false }
        ]
    },
    {
        "text": "Największa liczba hot-dogów zjedzonych w 10 minut przez jedną osobę to:",
        "type": "closed",
        "options": [
            { "text": "47", "isCorrect": false },
            { "text": "61", "isCorrect": false },
            { "text": "76", "isCorrect": true },
            { "text": "89", "isCorrect": false }
        ]
    },
    {
        "text": "Najdłuższe skakanie przez człowieka na jednej nodze wyniosło:",
        "type": "closed",
        "options": [
            { "text": "1,8 km", "isCorrect": false },
            { "text": "34,3 km", "isCorrect": false },
            { "text": "17,7 km", "isCorrect": true },
            { "text": "46,7 km", "isCorrect": false }
        ]
    },
    {
        "text": "Najdłuższe żucie gumy przez jedną osobę trwało:",
        "type": "closed",
        "options": [
            { "text": "9 lat", "isCorrect": true },
            { "text": "8 mies", "isCorrect": false },
            { "text": "4 lata 6 mies", "isCorrect": false },
            { "text": "17 mies", "isCorrect": false }
        ]
    },
        {
        "text": "Najdłuższa pizza świata miała:",
        "type": "closed",
        "options": [
            { "text": "680 m", "isCorrect": false },
            { "text": "3,71 km", "isCorrect": false },
            { "text": "1,58 km", "isCorrect": false },
            { "text": "1,93 km", "isCorrect": true }
        ]
    },
    {
        "text": "Najwięcej spinaczy przyklejonych do twarzy w jednej minucie:",
        "type": "closed",
        "options": [
            { "text": "53", "isCorrect": true },
            { "text": "86", "isCorrect": false },
            { "text": "109", "isCorrect": false },
            { "text": "170", "isCorrect": false }
        ]
    },
    {
        "text": "Kto powiedział „Człowiek jest miarą wszechrzeczy”?",
        "type": "closed",
        "options": [
            { "text": "Platon", "isCorrect": false },
            { "text": "Protagoras", "isCorrect": true },
            { "text": "Arystoteles", "isCorrect": false },
            { "text": "Sokrates", "isCorrect": false }
        ]
    },
    {
        "text": "Czym zajmuje się filozofia etyki?",
        "type": "closed",
        "options": [
            { "text": "Badaniem zachowań zwierząt", "isCorrect": false },
            { "text": "Badaniem moralności i zasad postępowania", "isCorrect": true },
            { "text": "Analizą neuronów w mózgu", "isCorrect": false },
            { "text": "Badaniem historii filozofii", "isCorrect": false }
        ]
    },
    {
        "text": "Która koncepcja w psychologii opisuje tzw. „poczucie własnej skuteczności”?",
        "type": "closed",
        "options": [
            { "text": "Teoria potrzeb Maslowa", "isCorrect": false },
            { "text": "Teoria Bandury", "isCorrect": true },
            { "text": "Psychoanaliza Freuda", "isCorrect": false },
            { "text": "Behawioryzm Skinnera", "isCorrect": false }
        ]
    },
    {
        "text": "Filozofia egzystencjalna koncentruje się przede wszystkim na:",
        "type": "closed",
        "options": [
            { "text": "Naturze wszechświata", "isCorrect": false },
            { "text": "Matematycznych prawach", "isCorrect": false },
            { "text": "Sensie życia, wolności i odpowiedzialności jednostki", "isCorrect": true },
            { "text": "Zasobach naturalnych", "isCorrect": false }
        ]
    },
    {
        "text": "Czym zajmuje się psychologia poznawcza?",
        "type": "closed",
        "options": [
            { "text": "Badaniem snów", "isCorrect": false },
            { "text": "Badaniem procesów myślowych, uwagi i pamięci", "isCorrect": true },
            { "text": "Badaniem zachowań zwierząt", "isCorrect": false },
            { "text": "Analizą osobowości", "isCorrect": false }
        ]
    },
    {
        "text": "Co w psychologii oznacza termin „dysonans poznawczy”?",
        "type": "closed",
        "options": [
            { "text": "Stan głębokiego snu", "isCorrect": false },
            { "text": "Konflikt między przekonaniami a zachowaniami", "isCorrect": true },
            { "text": "Brak pamięci krótkotrwałej", "isCorrect": false },
            { "text": "Nadmierne pobudzenie emocjonalne", "isCorrect": false }
        ]
    },
    {
        "text": "Który filozof twierdził, że „człowiek jest z natury istotą polityczną”?",
        "type": "closed",
        "options": [
            { "text": "Sokrates", "isCorrect": false },
            { "text": "Platon", "isCorrect": false },
            { "text": "Arystoteles", "isCorrect": true },
            { "text": "Epikur", "isCorrect": false }
        ]
    },
    {
        "text": "Eksperyment Milgrama dotyczył:",
        "type": "closed",
        "options": [
            { "text": "Rozwoju dziecka", "isCorrect": false },
            { "text": "Zjawiska placebo", "isCorrect": false },
            { "text": "Pamięci i uwagi", "isCorrect": false },
            { "text": "Posłuszeństwa wobec autorytetu", "isCorrect": true }
        ]
    },
    {
        "text": "Efekt Zeigarnik mówi o tym, że:",
        "type": "closed",
        "options": [
            { "text": "Pamiętamy najlepiej zdarzenia przyjemne", "isCorrect": false },
            { "text": "Lepiej pamiętamy zadania niedokończone niż zakończone", "isCorrect": true },
            { "text": "Ludzie reagują szybciej na bodźce negatywne", "isCorrect": false },
            { "text": "Pamięć krótkotrwała jest silniejsza niż długotrwała", "isCorrect": false }
        ]
    },
    {
        "text": "Kto jest autorem pojęcia „nadczłowiek”?",
        "type": "closed",
        "options": [
            { "text": "Friedrich Nietzsche", "isCorrect": true },
            { "text": "Kant", "isCorrect": false },
            { "text": "Hegel", "isCorrect": false },
            { "text": "Schopenhauer", "isCorrect": false }
        ]
    },
    {
        "text": "Który nurt filozoficzny podkreśla znaczenie doświadczenia zmysłowego jako źródła wiedzy?",
        "type": "closed",
        "options": [
            { "text": "Stoicyzm", "isCorrect": false },
            { "text": "Empiryzm", "isCorrect": true },
            { "text": "Racjonalizm", "isCorrect": false },
            { "text": "Egzystencjalizm", "isCorrect": false }
        ]
    },
    {
        "text": "Jakie owoce używa się do przygotowania tradycyjnego francuskiego tarty Tatin?",
        "type": "closed",
        "options": [
            { "text": "Truskawki", "isCorrect": false },
            { "text": "Jabłka", "isCorrect": true },
            { "text": "Gruszki", "isCorrect": false },
            { "text": "Maliny", "isCorrect": false }
        ]
    },
    {
        "text": "Co jest podstawowym składnikiem hummusu?",
        "type": "closed",
        "options": [
            { "text": "Soczewica", "isCorrect": false },
            { "text": "Fasola", "isCorrect": false },
            { "text": "Ciecierzyca", "isCorrect": true },
            { "text": "Kukurydza", "isCorrect": false }
        ]
    },
    {
        "text": "Które z poniższych przypraw jest najbardziej charakterystyczne dla kuchni indyjskiej?",
        "type": "closed",
        "options": [
            { "text": "Oregano", "isCorrect": false },
            { "text": "Bazylia", "isCorrect": false },
            { "text": "Kurkuma", "isCorrect": true },
            { "text": "Tymianek", "isCorrect": false }
        ]
    },
    {
        "text": "Z jakiego kraju pochodzi sushi?",
        "type": "closed",
        "options": [
            { "text": "Chiny", "isCorrect": false },
            { "text": "Japonia", "isCorrect": true },
            { "text": "Korea", "isCorrect": false },
            { "text": "Tajlandia", "isCorrect": false }
        ]
    },
    {
        "text": "Który napój pochodzi z Etiopii i jest tradycyjnie spożywany podczas ceremonii?",
        "type": "closed",
        "options": [
            { "text": "Herbata", "isCorrect": false },
            { "text": "Piwo", "isCorrect": false },
            { "text": "Kawa", "isCorrect": true },
            { "text": "Sok z granatu", "isCorrect": false }
        ]
    },
    {
        "text": "Jakie mięso używa się do przygotowania tradycyjnego węgierskiego gulaszu?",
        "type": "closed",
        "options": [
            { "text": "Wieprzowina", "isCorrect": false },
            { "text": "Kurczak", "isCorrect": false },
            { "text": "Wołowina", "isCorrect": true },
            { "text": "Jagnięcina", "isCorrect": false }
        ]
    },
    {
        "text": "Z którego kraju pochodzi tradycyjne danie „paella”?",
        "type": "closed",
        "options": [
            { "text": "Portugalia", "isCorrect": false },
            { "text": "Hiszpania", "isCorrect": true },
            { "text": "Włochy", "isCorrect": false },
            { "text": "Grecja", "isCorrect": false }
        ]
    },
    {
        "text": "Co jest głównym składnikiem francuskiego ratatouille?",
        "type": "closed",
        "options": [
            { "text": "Ziemniaki", "isCorrect": false },
            { "text": "Bakłażan", "isCorrect": true },
            { "text": "Ryż", "isCorrect": false },
            { "text": "Kukurydza", "isCorrect": false }
        ]
    },
    {
        "text": "Jakie przyprawy są głównymi składnikami włoskiej mieszanki „herbes de Provence”?",
        "type": "closed",
        "options": [
            { "text": "Papryka i kurkuma", "isCorrect": false },
            { "text": "Tymianek, rozmaryn, oregano", "isCorrect": true },
            { "text": "Kolendra i cynamon", "isCorrect": false },
            { "text": "Koper i bazylia", "isCorrect": false }
        ]
    },
    {
        "text": "Kto był pierwszym przewodniczącym Związku Radzieckiego?",
        "type": "closed",
        "options": [
            { "text": "Leonid Breżniew", "isCorrect": false },
            { "text": "Włodzimierz Lenin", "isCorrect": true },
            { "text": "Józef Stalin", "isCorrect": false },
            { "text": "Nikita Chruszczow", "isCorrect": false }
        ]
    },
    {
        "text": "W którym roku Barack Obama został wybrany na prezydenta USA po raz pierwszy?",
        "type": "closed",
        "options": [
            { "text": "2006", "isCorrect": false },
            { "text": "2008", "isCorrect": true },
            { "text": "2010", "isCorrect": false },
            { "text": "2012", "isCorrect": false }
        ]
    },
    {
        "text": "Które państwo jako pierwsze zalegalizowało małżeństwa osób tej samej płci?",
        "type": "closed",
        "options": [
            { "text": "Kanada", "isCorrect": false },
            { "text": "Holandia", "isCorrect": true },
            { "text": "Szwecja", "isCorrect": false },
            { "text": "Belgia", "isCorrect": false }
        ]
    },
    {
        "text": "Który afrykański kraj był pierwszym niepodległym państwem po dekolonizacji w XX wieku?",
        "type": "closed",
        "options": [
            { "text": "Nigeria", "isCorrect": false },
            { "text": "Liberia", "isCorrect": true },
            { "text": "Ghana", "isCorrect": false },
            { "text": "Kenia", "isCorrect": false }
        ]
    },
    {
        "text": "Kogo decyzje zabiły najwięcej ludzi?",
        "type": "open"
    },
    {
        "text": "Kto został wybrany kanclerzem Niemiec po Angeli Merkel w 2021 roku?",
        "type": "closed",
        "options": [
            { "text": "Gerhard Schröder", "isCorrect": false },
            { "text": "Olaf Scholz", "isCorrect": true },
            { "text": "Frank-Walter Steinmeier", "isCorrect": false },
            { "text": "Markus Söder", "isCorrect": false }
        ]
    },
    {
        "text": "Kiedy Polska ratyfikowała Traktat Lizboński?",
        "type": "closed",
        "options": [
            { "text": "2005", "isCorrect": false },
            { "text": "2007", "isCorrect": true },
            { "text": "2009", "isCorrect": false },
            { "text": "2010", "isCorrect": false }
        ]
    }
    ]
};
