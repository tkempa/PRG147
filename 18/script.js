// set up game
let clickers = 20;
let remain = clickers;
let interval = null;
let timer = 0;
document.querySelector("#score").innerHTML = "Remaining:  " + remain + " / " + clickers;
document.querySelector("#timer").innerHTML = "0.00";
addClickers();

// add ricks to board
function addClickers() {
    for (let i = 0; i < clickers; i++) {
        let rick = document.createElement("div"); 
        rick.className = "rick";
        rick.style.left = Math.random() * 500 + "px";
        rick.style.top = Math.random() * 300 + "px";
        rick.addEventListener("mousedown", removeClicker);
        document.querySelector("#board").appendChild(rick);
    }
}

// remove clicked rick, update remaining ricks, start timer on first rick, display score after last rick
function removeClicker(e) {
    if (clickers == remain)
        interval = setInterval(runTimer, 10);
    e.target.parentNode.removeChild(e.target);
    remain--;
    document.querySelector("#score").innerHTML = "Remaining:  " + remain + " / " + clickers;
    if (remain == 0) {
        clearInterval(interval);
        document.querySelector("#win").innerHTML = "Winner! " + document.querySelector("#timer").innerHTML + " seconds";
    }
}

// count seconds and 2 decimal places after
function runTimer() {
    document.querySelector("#timer").innerHTML = (timer / 100).toFixed(2);
    timer++;
}

// display a window asking for the number of ricks, ignore bad input
function promptNumber() {
    input = Number.parseInt(prompt("Enter the number of Ricks"))
    if (input != NaN && input > 1) {
        clickers = input;
        reset();
    }
}

// reset everything
function reset() {
    clearInterval(interval);
    interval = null;
    remain = clickers;
    timer = 0;
    document.querySelectorAll(".rick").forEach(x => x.parentNode.removeChild(x));
    document.querySelector("#score").innerHTML = "Remaining:  " + remain + " / " + clickers;
    document.querySelector("#timer").innerHTML = "0.00";
    document.querySelector("#win").innerHTML = "";
    addClickers();
}
