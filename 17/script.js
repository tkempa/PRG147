// 1. onclick attribute
function f1() {
    alert("hi");
    document.querySelector("#p1").innerHTML = "hi";
}

// 2. onclick attribute
function f2() {
    alert(Math.floor(Math.random() * 100 + 1) + " Rabbits");
}

// 3. onclick dom property
document.querySelector("#b3").onclick = function () { document.querySelector("#p3").innerHTML = Date() };

// 4. this
/* <a href="" onclick="alert(this.innerHTML)">Click</a>" */

// 5. multiple handlers
document.querySelector("#b5").addEventListener("click", f5_background);
document.querySelector("#b5").addEventListener("click", f5_text);
document.body.style.backgroundColor = "white";
document.body.style.color = "black";
function f5_background() {
    if (document.body.style.backgroundColor == "white")
        document.body.style.backgroundColor = "black";
    else
        document.body.style.backgroundColor = "white";
}
function f5_text() {
    if (document.body.style.color == "black")
        document.body.style.color = "white";
    else
        document.body.style.color = "black";
}

// 6. get specific data from event object
document.querySelector("#b6").onclick = function (x) {
    document.querySelector("#p6").innerHTML =
    x.type + " at " + x.currentTarget + "\nCoordinates: " + x.clientX + ":" + x.clientY;
};
