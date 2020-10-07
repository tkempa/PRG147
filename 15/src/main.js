//set up game
let clickers = 15;
let startTime = Date.now();
document.querySelector("#score").innerHTML = clickers + " ricks remain";
for (let i = 0; i < clickers; i++) addClicker();

//add a clicker
function addClicker() {
    let img = new Image();
    img.src = "res/images/rick.png";
    img.style.left = Math.random() * 500 + "px";
    img.style.top = Math.random() * 300 + "px";
    img.addEventListener("click", removeClicker);
    document.querySelector("#board").appendChild(img);
}

//remove a clicker and update remaining ricks
function removeClicker(e) {
    e.target.parentNode.removeChild(e.target);
    clickers--;
    document.querySelector("#score").innerHTML = clickers + " ricks remain";
    checkGameOver();
}

//check for a game over and show the score
function checkGameOver() {
    if (clickers === 0) {
        const taken = Math.round((Date.now() - startTime) / 1000);
        alert("De-rick-ed in " + taken + " seconds!");
    }
}