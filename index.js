let timeLeft = document.querySelector(".time-left");
let questionContainer = document.getElementById("questionscontainer");
let nextBtn = document.getElementById("next");
let numofQuestions = document.querySelector(".questions");
let  displayContainer = document.getElementById("start-screen");
const scoreContainer = document.querySelector(".score-container");
let previousBtn = document.getElementById("previous");
const score = document.getElementById("user-score");
const loader = document.getElementById("loader");
const quizloading = document.getElementById("quizloading");
let questionsCount;
let scoreCount = 0;
let setTime;
let countDown;
let timerRunning = false; //set timer running using a boolean

function checkAnswer(userOption) {
    const userSolution = userOption.innerText; // Get the text of the selected option
    let question = document.getElementsByClassName("container-mid")[questionsCount];
    let options = question.querySelectorAll(".options-div");

    if (userSolution === questionsStorage[questionsCount].correct) {
        userOption.classList.add("correct"); // Mark the selected option as correct
        scoreCount++;
    } else {
        userOption.classList.add("incorrect");
        options.forEach((element) => {
            if (element.innerText === questionsStorage[questionsCount].correct) {
                element.classList.add("correct");
            }
        });
    }
    question.querySelector(".question").innerHTML = questionsStorage[questionsCount].Question;
}

function calcScore() {
    const maxQuestions = questionsStorage.length;
    return (scoreCount / maxQuestions) * 100;
}

const nextQuestion = (questionIndex) => {
    let quiz = document.querySelectorAll(".container-mid");
    quiz.forEach((card) => {
        card.classList.add("hide");
    });
    quiz[questionIndex].classList.remove("hide");
};

const checkAnswersOnTimeout = () => {
    const question = questionsStorage[questionsCount] - 1; //questionsstorage has  -1 index so = 99 when we bind to questionsCount questions count = 100
    const options = document.querySelectorAll(".container-mid")[questionsCount].querySelectorAll(".options-div");

    options.forEach((option) => {
        if (option.innerText === question.correct) {
            option.classList.add("correct");
            scoreCount++;
        }
    });
    displayContainer.classList.add("hide");
    scoreContainer.classList.remove("hide");

    const percentage = calcScore();
    score.innerHTML = "Your score is " + percentage.toFixed(2) + "%" + " out of 100%";
};

nextBtn.addEventListener("click", () => {
    if (questionsCount === questionsStorage.length - 1) {
        displayContainer.classList.add("hide");
        scoreContainer.classList.remove("hide");
        const percentage = calcScore();
        score.innerHTML = "Your score is " + percentage.toFixed(2) + "%" + " out of 100%"; 
    }else {
        questionsCount++;
        numofQuestions.innerHTML = questionsCount + 1 + " / " + questionsStorage.length + "Questions";
        nextQuestion(questionsCount);
    }
});

previousBtn.addEventListener("click", () => {
    if (questionsCount > 0) {
        questionsCount--;

        numofQuestions.innerHTML = questionsCount + 1 + " / " + questionsStorage.length + "Questions";
        previousQuestion(questionsCount);
    }
});

const previousQuestion = (questionIndex) => {
    let quiz = document.querySelectorAll(".container-mid");

    quiz.forEach((card) => {
        card.classList.add("hide");
    });
    quiz[questionIndex].classList.remove("hide");
};

function createQuiz() {
    questionsStorage.sort(() => Math.random() - 0.5);

    for (let i of questionsStorage) {
        i.options.sort(() => Math.random() -0.5);   // Create a div to contain the question and answer input
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");
        numofQuestions.innerHTML = 1 + " / " + questionsStorage.length + "Questions";
        let question_div = document.createElement("p");
        question_div.classList.add("question");
        question_div.innerHTML = i.Question;
        div.appendChild(question_div);
        questionContainer.appendChild(div);

        div.innerHTML += `
        <button class="options-div">${i.options[0]}</button>
        <button class="options-div">${i.options[1]}</button>
        <button class="options-div">${i.options[2]}</button>
        <button class="options-div">${i.options[3]}</button>`;
        const optionsDivs = div.querySelectorAll(".options-div");
        optionsDivs.forEach((button) => {
            button.addEventListener("click", () => {
                checkAnswer(button);
            });
        });
        questionContainer.appendChild(div);
    }
}

const toggleTimer = () => {
    if (timerRunning) {
        clearInterval(countDown);
        timerRunning = false;
    } else {
        countDown = setInterval(() => {
            setTime--;
            timeLeft.innerHTML = `${setTime}s left`;
            if (setTime === 0) {
                clearInterval(countDown);
                checkAnswersOnTimeout();
            }
        }, 1000);
        timerRunning = true;
    }
};

function initial() {
    questionsCount = 0;
    scoreCount = 0;
    createQuiz();
    nextQuestion(questionsCount);
    setTime =　7200; 
   
}

window.onload = () => {
    initBarCount();
    loader.style.display = "block";  // Show the loader initially
    // Set a timeout to hide the loader and show the displayContainer after 5 seconds
    setTimeout(() => {
        loader.style.display = "none";
        displayContainer.classList.remove("hidden");
        quizloading.classList.add("hide"); //classlist.add("hide") this adds the css style properties
        divTimeLeft.classList.add("hide"); 
        divCountDownBar.classList.add("hide"); 
        initial();
    }, 3000); 
};

function initBarCount(){
    var divTimeLeft = document.getElementById("divTimeLeft");
    var divCountDownBar = document.getElementById("divCountDownBar");
    var startTimer = setInterval(barCount, 11);
    function barCount(){
        if(divTimeLeft.clientWidth < divCountDownBar.clientWidth){
                    divTimeLeft.style.width = divTimeLeft.clientWidth + 5 + "px";
                }else{
                    divTimeLeft.style.width = divCountDownBar.clientWidth + "px";
                    clearInterval(startTimer);
                }
            }
}

const questionsStorage = [
    { id: "0", Question: "遊んじょ", options: [ "asonjao", "asonjyo", "asojyo", "asonjo"],   correct: "asonjyo",},
    { id: "1", Question: "前向きに",  options: [ "maemukini", "namaemukini", "naemukini", "maehikini"],  correct: "maemukini",},
    { id: "2", Question: "一生懸命",  options: [ "isshoukenmei", "isseikenmei", "isshokenmei", "ishoukenmei",] , correct: "isshoukenmei",},
    { id: "3", Question: "昼夜",  options: [ "hiruyoru", "chuuya", "hiroyoru", "chuuuya",] , correct: "chuuya",},
    { id: "4", Question: "豆乳", options: [ "gyunyuu", "gyunyu", "tounyuu", "tounyu",] , correct: "tounyuu",},
    { id: "5", Question: "雰囲気", options: [ "funeki", "funiki", "komaki", "kamiki",] , correct: "funiki",},
    { id: "6", Question: "目指して", options: [ "mesashite", "mezashite", "mesamashite", "mezamashite",] , correct: "mezashite",},
    { id: "7", Question: "出会った",  options: [ "deatta", "deatsuta", "detsuta", "deautsuta",] , correct: "deatsuta",},
    { id: "8", Question: "落とし物", options: [ "otoshimono", "otoshibutsu", "rotoshimono", "orotoshimono",] , correct: "otoshimono",},
    { id: "9", Question: "寄り添って",  options: [ "orisotte", "yorisotsute", "yorimotsute", "orimotte",] , correct: "yorisotsute",},
    { id: "10", Question: "胃ガン",  options: [ "ogan", "igan", "agan", "egan",] , correct: "igan",},
    { id: "11", Question: "頭痛",  options: [ "zutsuu", "atamaitai", "atamaitami", "atamatsukare",] , correct: "zutsuu",},
    { id: "12", Question: "輝き",   options: [ "いつがき", "かがやき", "たいき", "あまがき",] , correct: "kagayaki",},
    { id: "13", Question: "周り",  options: [ "mawari", "wari", "awari", "guruguru",] , correct: "mawari",},
    { id: "14", Question: "女神", options: [ "megami", "jogami", "shokami", "mekami",] , correct: "megami",},
    { id: "15", Question: "速度", options: [ "shokudo", "sokudo", "sukudo", "sudoku",] , correct: "sokudo",},
    { id: "16", Question: "有名",  options: [ "yuumei", "fuumei", "yumei", "unmei",] , correct: "yuumei",},
    { id: "17", Question: "孤高",  options: [ "kokou", "gogou", "koko", "koho",] , correct: "kokou",},
    { id: "18", Question: "薔薇",  options: [ "bara", "hara", "hare", "bata",] , correct: "bara",},
    { id: "19", Question: "踊る",  options: [ "odoru", "doruru", "doru", "oboru",] , correct: "odoru",},
    { id: "20", Question: "乙女",  options: [ "otome", "tome", "zome", "otoko",] , correct: "otome",},
    { id: "21", Question: "東南", options: [ "konan", "tounan", "ronan", "yonan",] , correct: "tounan",},
    { id: "22", Question: "行く先",  options: [ "ikusaki", "yukusaki", "ikusen", "ikusa",] , correct: "yukusaki",},
    { id: "23", Question: "灼眼", options: [ "sakugan", "shakugan", "shakune", "sakume",] , correct: "shakugan",},
    { id: "24", Question: "眼差し", options: [ "manashi", "manazashi", "manasushi", "manazushi",] , correct: "manazashi",},
    { id: "25", Question: "お土産", options: [ "omiyage", "oyage", "oyouge", "oyage",] , correct: "omiyage",},
    { id: "26", Question: "今度", options: [ "kondo", "konkai", "imado", "imakai",] , correct: "kondo",},
    { id: "27", Question: "呼ばる", options: [ "yobaru", "yaberu", "yameru", "yoraru",] , correct: "yobaru",},
    { id: "28", Question: "煌めく", options: [ "こめく", "きらめく", "さらめく", "こうめく",] , correct: "きらめく",},
    { id: "29", Question: "予感", options: [ "yokan", "bokan", "yotei", "rotei",] , correct: "yokan",},
    { id: "30", Question: "見守って", options: [ "mimotsute", "mimamotsute", "minomotsute", "mimatsute",] , correct: "mimamotsute",},
    { id: "31", Question: "開く",  options: [ "oku", "aku", "raku", "hiraku",] , correct: "hiraku",},
    { id: "32", Question: "得意", options: [ "tokui", "imi", "tokaku", "imai",] , correct: "tokui",},
    { id: "33", Question: "用事",  options: [ "yougoto", "yogoto", "souji", "youji",] , correct: "youji",},
    { id: "34", Question: "掃除",  options: [ "souji", "soji", "yoji", "youji",] , correct: "souji",},
　  { id: "35", Question: "吸わる",   options: [ "suwaru", "mewaru", "suweru", "meiwaru",] , correct: "suwaru",},
    { id: "36", Question: "怪しい",  options: [ "itoshi", "ayashi", "hayashi", "ayakashi",] , correct: "ayashi",},
    { id: "37", Question: "女子",  options: [ "じょし", "おんなのこ", "しょうこ", "しょうじょ",] , correct: "じょし",},
    { id: "38", Question: "付き合う", options: [ "すきあう", "つきあう", "つすきあう", "つつきあう",] , correct: "つきあう",},
    { id: "39", Question: "彼氏", options: [ "karera", "kareshi", "darera", "karashi",] , correct: "kareshi",},
    { id: "40", Question: "寿司", options: [ "zushi", "つし", "hareko", "sushi",] , correct: "sushi",},
    { id: "41", Question: "習い", options: [ "ならい", "はらい", "わらい", "やらい",] , correct: "ならい",},
    { id: "42", Question: "集める", options: [ "atsumeru", "hatsumeru", "katsumeru", "aoitsumeru",] , correct: "atsumeru",},
    { id: "43", Question: "意外", options: [ "igai", "ikai", "imigai", "imikai",] , correct: "igai",},
    { id: "44", Question: "売ってる", options: [ "utteru", "utsuteru", "yutteru", "yutsuteru",] , correct: "utteru",},
    { id: "45", Question: "部活", options: [ "bukatsu", "bakatsu", "busatsu", "basatsu",] , correct: "bukatsu",},
    { id: "46", Question: "生活", options: [ "seisatsu", "seikaku", "seikatsu", "isseisatsu",] , correct: "seikatsu",},
    { id: "47", Question: "月兎", options: [ "つきと", "みと", "つきの", "つつきの",] , correct: "つきと",},
    { id: "48", Question: "巨乳",  options: [ "きょんにゅう", "きょにゅう", "きょんにゅ", "きょにゅ",] , correct: "きょんにゅう",},
    { id: "49", Question: "牛乳", options: [ "ぎゅにゅう", "きゅにゅう", "ぎゅにゅ", "ぎゅうにゅう",] , correct: "ぎゅにゅう",},
    { id: "50", Question: "店内", options: [ "tenna", "misanai", "tenpai", "tennai",] , correct: "tennai",},
    { id: "51", Question: "青空", options: [ "aosora", "aozora", "midorisora", "harezora",] , correct: "aozora",},
　　{ id: "52", Question: "ご利用",  options: [ "goriyo", "goryou", "goryo", "goriyou",] , correct: "goriyou",},
    { id: "53", Question: "捨てる", options: [ "suteru", "utsuteru", "tsuteru", "sutsuteru",] , correct: "suteru",},
    { id: "54", Question: "白雪", options: [ "しらゆき", "しろゆき", "ひろゆき", "ひらゆき",] , correct: "しらゆき",},
    { id: "55", Question: "太もも", options: [ "ふともも", "いぬもも", "ぶたもも", "ふたもも",] , correct: "ふともも",},
    { id: "56", Question: "足もも", options: [ "はしもも", "あしもも", "はやしもも", "はやもも",] , correct: "あしもも",},
    { id: "57", Question: "足", options:[ "あし", "はし", "かし", "やし",] , correct: "あし",},
    { id: "58", Question: "走る", options: [ "hashiru", "ashiru", "hayashiru", "shiru",] , correct: "hashiru",},
    { id: "59", Question: "中指",  options: [ "nakayubi", "chuubi", "chuyubi", "chuuubi",] , correct: "nakayubi",},
    { id: "60", Question: "字",  options: [ "じ", "もじ", "ぶんじ", "かんじ",] , correct: "じ",},
    { id: "61", Question: "実は", options: [ "jitsuha", "kajitsuha", "atsuha", "jiha",] , correct: "jitsuha",},
    { id: "62", Question: "近い",  options: [ "chikai", "chiikai", "saiki", "chipai",] , correct: "chikai",},
    { id: "63", Question: "槍",  options: [ "yaru", "yari", "kari", "yareru",] , correct: "yari",},
    { id: "64", Question: "科学",  options: [ "りがく", "かがく", "かかく", "りょうがく",] , correct: "かがく",},
    { id: "65", Question: "身体",　options: [ "しんじたい", "しんたい", "しゅうたい", "しゅたい",] , correct: "しんたい",},
    { id: "66", Question: "挫ける", options: [ "くじける", "ゆじける", "かじける", "やらける",] , correct: "くじける",},
    { id: "67", Question: "愛しい", options: [ "あいしてしい", "あいしい", "あいし", "いとしい",] , correct: "いとしい",},
　  { id: "68", Question: "強がる", options: [ "つがる", "つよがる", "つつがる", "つつよがる",] , correct: "つよがる",},
    { id: "69", Question: "自信",  options: [ "jishin", "jishinji", "jibunshin", "bunshin",] , correct: "jishin",},
    { id: "70", Question: "霞める",  options: [ "kasumeru", "tsukameru", "ritsumeru", "natsumeru",] , correct: "kasumeru",},
    { id: "71", Question: "読書",   options: [ "どくしょ", "よみかん", "よこ", "よみしょ",] , correct: "どくしょ",},
    { id: "72", Question: "会えず", options: [ "あえず", "とれあえず", "とりあえず", "とらえず",] , correct: "あえず",},
    { id: "73", Question: "邪魔", options: [ "あくま", "じゃま", "じゃくま", "じゃあくま",] , correct: "じゃま",},
    { id: "74", Question: "生意気", options: [ "namaiki", "seiiki", "seiki", "seiiiki",] , correct: "namaiki",},
    { id: "75", Question: "清浄",  options: [ "せいじょ", "せいじょう", "せいこ", "せいこう",] , correct: "せいじょう",},
    { id: "76", Question: "見逃さないで", options: [ "みのながさないで", "みのがさないで", "みながさないで", "みにがさないで",] , correct: "みのがさないで",},
 　 { id: "77", Question: "流れた", options: [ "なかれた", "ながれた", "まがれた", "なれた",] , correct: "ながれた",},
    { id: "78", Question: "疲れた",　options: [ "つかれた", "すかれた", "づかれた", "つかられた",] , correct: "つかれた",},
    { id: "79", Question: "癒し", options: [ "はやし", "あやし", "いやし", "いし",] , correct: "いやし",},
    { id: "80", Question: "時計", options: [ "じとけい", "とけい", "じけい", "ときけい",] , correct: "とけい",},
    { id: "81", Question: "暗い",  options: [ "くらい", "やみ", "くるい", "くるい",] , correct: "くらい",},
    { id: "82", Question: "運命",  options: [ "うんぬい", "うんめい", "うんめ", "うんぬ",] , correct: "うんめい",},
 　 { id: "83", Question: "漫画家", options: [ "まんがっか", "まんがしゃ", "まんがっかしゃ", "まんがしゃ",] , correct: "まんがっか",},
    { id: "84", Question: "電気者",  options: [ "てんきしゃ", "でんきもの", "でんきしゃ", "てんきもの",] , correct: "でんきしゃ",},
    { id: "85", Question: "社会",  options: [ "がいしゃ", "かいしゃ", "かいしゃあ", "しゃかい",] , correct: "しゃかい",},
    { id: "86", Question: "大成功", options: [ "だいごせ", "だいせいこ", "だいこめん", "だいじょげん",] , correct: "だいせいこ",},
    { id: "87", Question: "親", options: [ "おや", "しん", "りょうしん", "はおはおや",] , correct: "おや",},
    { id: "88", Question: "母親", options: [ "はおはおや", "ははおや", "ははうえ", "ははしん",] , correct: "ははおや",},
    { id: "89", Question: "現金", options: [ "けんしん", "げんきん", "げんしん", "へんきん",] , correct: "げんきん",},
    { id: "90", Question: "要る", options: [ "いる", "わる", "ぼる", "のる",] , correct: "いる",},
    { id: "91", Question: "言葉", options:　[ "ことのあ", "ことは", "ことば", "ことのは",] , correct: "ことば",},
    { id: "92", Question: "滝", 　options:　[ "たき", "りゅう", "なみ", "なみだ",] , correct: "たき",},
    { id: "93", Question: "虎", 　options:　[ "とら", "じょうせい", "とげん", "げんと",] , correct: "とら",},
    { id: "94", Question: "貯金", options:　[ "ちょきん", "ちょろきん", "ちょうきいん", "ちょうきん",] , correct: "ちょきん",},
    { id: "95", Question: "給料",  options:　[ "きゅうりょう", "きゅりょ", "きゅうりょ", "きゅりょう",] , correct: "きゅうりょう",},
    { id: "96", Question: "町帰り",  options:　[ "miyakokaeri", "omachikaeri", "machikaeri", "choukaeri",] , correct: "choukaeri",},
　　{ id: "97", Question: "出発",  options:　[ "しゅっぱつ", "しゅぱつ", "しゃっぱつう", "しゅっばつ",] , correct: "しゅっぱつ",},
    { id: "98", Question: "連絡",  options:　[ "れんらく", "れんたく", "ねんたく", "ねんらく",] , correct: "れんらく",},
    { id: "99", Question: "重量",  options:　[ "じゅうりょう", "じゅりょ", "じゅりょう", "しゆうりょう",] , correct: "じゅうりょう",},
];
    
