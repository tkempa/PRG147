let textList = ["universe", "test", "television", "reality", "ordinary", "light", "place", "afford", "lady",
    "heavy", "tank", "easy", "writing", "hall", "birth", "primary", "active", "cream", "left", "spoon", "fun",
    "guide", "involve", "overall", "mean", "involved", "tell", "length", "bank", "beach", "hear", "manner",
    "admit", "solution", "signal", "go", "heat", "judge", "player", "others", "effective", "display", "size",
    "impact", "identify", "reveal", "session", "head", "appeal", "run", "scientist", "novel", "hotel", "evening",
    "review", "economic", "fish", "board", "build", "dust", "river", "might", "real", "game", "solve", "art",
    "accept", "pack", "employer", "piece", "earn", "democracy", "surround", "coffee", "talent", "tooth", "matter",
    "ice", "principle", "practice", "forest", "serious", "popular", "show", "issue", "portion", "folk", "pill",
    "enormous", "hand", "advance", "poverty", "computer", "basketball", "jacket", "weather", "stop", "travel",
    "quiet", "fish", "producer", "prepare", "shed", "might", "mind", "prospect", "teaspoon", "driver", "victory",
    "congress", "entire", "bill", "contain", "wash", "mean", "interaction", "display", "spirit", "see", "exchange",
    "glance", "top", "comparison", "staff", "discussion", "begin", "strike", "follow", "order", "stare", "progress",
    "title", "era", "location", "bright", "sick", "twin", "fail", "deal", "set", "term", "suggest", "organization",
    "column", "quality", "version", "numerous", "book", "manager", "inform", "wish", "month", "boat", "order",
    "effect", "read", "score", "warm", "skit", "topic", "resident", "taste", "powerful", "art", "distance", "nice",
    "aware", "proud", "potato", "peace", "apply", "seek", "rock", "moral", "resolution", "release", "press", "close",
    "cut", "strength", "level", "initial", "leg", "hill", "page", "plant", "positive", "freeze", "trust", "place",
    "root", "act", "expose", "professor", "vote", "male", "fruit", "private", "bed", "car"];

const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const resetButton = document.querySelector("#reset");
const changeButton = document.querySelector("#change");
const timerText = document.querySelector(".timer");
const wpmText = document.querySelector(".wpm");
testArea.addEventListener("keypress", start);
testArea.addEventListener("keyup", spellCheck);
resetButton.addEventListener("click", reset);
changeButton.addEventListener("click", changeText);
let timer = 0;
let timerRunning = false;
let interval = null;
let originText = "";
changeText();

// start the timer loop
function start() {
    if (testArea.value.length === 0 && !timerRunning) {
        timerRunning = true;
        interval = setInterval(runTimer, 10);
    }
}

// run a timer
function runTimer() {
    let centiseconds = (timer % 100).toString().padStart(2, '0');
    let seconds = Math.floor(timer / 100 % 60).toString().padStart(2, '0');
    let minutes = Math.floor(timer / 6000).toString().padStart(2, '0');
    timerText.innerHTML = minutes + ":" + seconds + ":" + centiseconds;
    timer++;
}

// match the text entered with the provided text on the page
function spellCheck() {
    let textEntered = testArea.value;
    let originTextMatch = originText.substring(0, textEntered.length)
    if (textEntered == originText) {
        clearInterval(interval);
        testWrapper.style.borderColor = "#343A40";
        wpmText.innerHTML = calculateWPM() + " wpm";
    }
    else {
        if (textEntered == originTextMatch)
            testWrapper.style.borderColor = "#E9ECEF";
        else
            testWrapper.style.borderColor = "salmon";
    }
}

// reset everything
function reset() {
    clearInterval(interval);
    interval = null;
    timer = 0;
    timerRunning = false;
    testArea.value = "";
    timerText.innerHTML = "00:00:00";
    wpmText.innerHTML = "";
    testWrapper.style.borderColor = "#2E4249";
}

// change the text
function changeText() {
    reset();
    originText = selectWords(20);
    document.querySelector("#origin-text p").innerHTML = originText;
}

// create a random list of words
function selectWords(n) {
    let words = "";
    for (let i = 0; i < n; i++) 
        words += textList[Math.floor(Math.random() * textList.length)] + " ";
    return words.trim();
}

// calculate words per minute
function calculateWPM() {
    let words = originText.split(" ").length;
    let minutes = timer / 6000;
    return Math.round(words / minutes);
}