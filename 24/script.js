class Player {
    constructor(name, color, isBot) {
        this.name = name;
        this.color = color;
        this.isBot = isBot;
        this.wins = 0;
        this.losses = 0;
        this.draws = 0;
    }
    getName() {
        return this.name;
    }
    changeName(x) {
        this.name = x;
    }
    getColor() {
        return this.color;
    }
    changeColor(x) {
        this.color = x;
    }
    cycleColor() {
        let colors = ["red", "orange", "yellow", "lime", "cyan", "blue", "purple"];
        this.color = colors[(colors.indexOf(this.color) + 1) % colors.length];
    }
    getBot() {
        return this.isBot;
    }
    getBotText() {
        if (this.isBot)
            return "Bot";
        else
            return "Human";
    }
    changeBot(x) {
        this.isBot = x;
    }
    toggleBot() {
        this.isBot = !this.isBot;
    }
    getWins() {
        return this.wins;
    }
    incrementWins() {
        this.wins++;
    }
    getLosses() {
        return this.losses;
    }
    incrementLosses() {
        this.losses++;
    }
    getDraws() {
        return this.draws;
    }
    incrementDraws() {
        this.draws++;
    }
    getTotalGames() {
        return this.wins + this.losses + this.draws;
    }
    toString() {
        return this.name + ", " + this.color + ", " + this.getBotText();
    }
}

function move(s) {
    if (winner < 0 && board[s] == -1) {
        state++;
        board[s] = state % 2;
        document.querySelector("#s" + s).style.background = players[state % 2].getColor();
        document.querySelector("#state").innerHTML = "Turn: " + players[(state + 1) % 2].getName();
        winner = checkWinner(board);
        if (winner > -1) {
            document.querySelector("#state").innerHTML = players[state % 2].getName() + " wins!";
            players[state % 2].incrementWins();
            players[(state + 1) % 2].incrementLosses();
            updateScore();
            highlightSquares();
        }
        else {
            if (state >= board.length - 1) {
                document.querySelector("#state").innerHTML = "Draw";
                player1.incrementDraws();
                player2.incrementDraws();
                updateScore();
            }
            if (players[(state + 1) % 2].getBot())
                move(aiMove());
        }
    }
}

// check if a board has a winner and return the winning player index
function checkWinner(b) {
    if (b[0] != -1 && b[0] == b[1] && b[1] == b[2])
        return (b[0]);
    if (b[3] != -1 && b[3] == b[4] && b[4] == b[5])
        return (b[3]);
    if (b[6] != -1 && b[6] == b[7] && b[7] == b[8])
        return (b[6]);
    if (b[0] != -1 && b[0] == b[3] && b[3] == b[6])
        return (b[0]);
    if (b[1] != -1 && b[1] == b[4] && b[4] == b[7])
        return (b[1]);
    if (b[2] != -1 && b[2] == b[5] && b[5] == b[8])
        return (b[2]);
    if (b[0] != -1 && b[0] == b[4] && b[4] == b[8])
        return (b[0]);
    if (b[2] != -1 && b[2] == b[4] && b[4] == b[6])
        return (b[2]);
    return -1;
}

// highlight the winning squares after a winning game
function highlightSquares() {
    if (board[0] != -1 && board[0] == board[1] && board[1] == board[2])
        mark([0, 1, 2]);
    if (board[3] != -1 && board[3] == board[4] && board[4] == board[5])
        mark([3, 4, 5]);
    if (board[6] != -1 && board[6] == board[7] && board[7] == board[8])
        mark([6, 7, 8]);
    if (board[0] != -1 && board[0] == board[3] && board[3] == board[6])
        mark([0, 3, 6]);
    if (board[1] != -1 && board[1] == board[4] && board[4] == board[7])
        mark([1, 4, 7]);
    if (board[2] != -1 && board[2] == board[5] && board[5] == board[8])
        mark([2, 5, 8]);
    if (board[0] != -1 && board[0] == board[4] && board[4] == board[8])
        mark([0, 4, 8]);
    if (board[2] != -1 && board[2] == board[4] && board[4] == board[6])
        mark([2, 4, 6]);

    function mark(squares) {
        for (let i = 0; i < squares.length; i++) {
            document.querySelector("#s" + squares[i]).style.border = "10px solid white";
        }
    }
}

// find all empty spots
function getOpenSpots(b) {
    let positions = [];
    for (let i = 0; i < b.length; i++) {
        if (b[i] < 0)
            positions.push(i);
    }
    return positions;
}

// bot makes a move
function aiMove() {
    let positions = getOpenSpots(board);
    let nextMoves = [];
    for (let i = 0; i < positions.length; i++) {
        let newBoard = board.slice(0);
        newBoard[positions[i]] = (state + 1) % 2;
        if (checkWinner(newBoard) == (state + 1) % 2) //go for the win
            return positions[i];
        newBoard[positions[i]] = state % 2;
        if (checkWinner(newBoard) == state % 2) //block opponent
            nextMoves.push(positions[i]);
    }
    if (nextMoves.length > 0)
        return nextMoves[Math.floor(Math.random() * nextMoves.length)];
    else if (positions.length > 0)
        return positions[Math.floor(Math.random() * positions.length)];
    else
        return null;
}

function reset() {
    state = -1;
    winner = -1;
    board = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
    shufflePlayers();
    updateScore();
    document.querySelectorAll(".square").forEach(function (x) { x.style.background = "#CCCCCC"; x.style.border = "0"; });
    document.querySelector("#state").innerHTML = "Turn: " + players[0].getName();
    document.querySelector("#p1name").innerHTML = player1.getName();
    document.querySelector("#p2name").innerHTML = player2.getName();
    document.querySelector("#p1square").style.background = player1.getColor();
    document.querySelector("#p1name").style.textDecorationColor = player1.getColor();
    document.querySelector("#p2square").style.background = player2.getColor();
    document.querySelector("#p2name").style.textDecorationColor = player2.getColor();
    document.querySelector("#p1bot").innerHTML = player1.getBotText();
    document.querySelector("#p2bot").innerHTML = player2.getBotText();
    if (players[0].getBot())
        move(aiMove());
}

function shufflePlayers() {
    if (Math.floor(Math.random() * 2) == 0)
        players = [player1, player2];
    else
        players = [player2, player1];
}

function squareMouseOn(square) {
    if (board[square] < 0)
        document.querySelector("#s" + square).style.background = "#999999";
}

function squareMouseOff(square) {
    if (board[square] < 0)
        document.querySelector("#s" + square).style.background = "#CCCCCC";
}

function updateScore() {
    document.querySelector("#p1score").innerHTML = player1.getWins();
    document.querySelector("#p2score").innerHTML = player2.getWins();
    document.querySelector("#draws").innerHTML = player1.getDraws();
}

function openSettings() {
    document.querySelector("#overlay").style.display = "block";
    $.getJSON("credit.json", function (json) {
        document.querySelector("#credit").innerHTML = json["text"];
    });
}

function closeSettings() {
    document.querySelector("#overlay").style.display = "none";
}

let state = -1;
let winner = -1;
let board = [];
let players = [];
let player1 = new Player("Player 1", "red", false);
let player2 = new Player("Player 2", "blue", true);
reset();
for (let i = 0; i < 9; i++) {
    document.querySelector("#s" + i).addEventListener("click", function () { move(i); });
    document.querySelector("#s" + i).addEventListener("mouseover", function () { squareMouseOn(i); });
    document.querySelector("#s" + i).addEventListener("mouseout", function () { squareMouseOff(i); });
}
document.querySelector("#p1bot").addEventListener("click", function () { player1.toggleBot(); reset(); });
document.querySelector("#p2bot").addEventListener("click", function () { player2.toggleBot(); reset(); });
document.querySelector("#p1color").addEventListener("click", function () { player1.cycleColor(); reset(); });
document.querySelector("#p2color").addEventListener("click", function () { player2.cycleColor(); reset(); });
document.querySelector("#reset").addEventListener("click", function () { reset(); });
document.querySelector("#settings").addEventListener("click", function () { openSettings(); });
document.body.addEventListener("keypress", function (e) { if (e["key"] == " ") reset(); });
