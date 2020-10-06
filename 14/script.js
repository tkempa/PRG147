// 1. Finding elements by id
document.getElementById("p1a").innerHTML = "first";
document.getElementById("p1b").innerHTML = "second";
document.getElementById("p1c").innerHTML = "third";

// 2. Finding elements by tag name
document.getElementsByTagName("section")[0].innerHTML = "<p>first</p>";
document.getElementsByTagName("article")[0].innerHTML = "<p>second</p>";
document.getElementsByTagName("aside")[0].innerHTML = "<p>third</p>";

// 3. Finding elements using nested tags
document.querySelector("#d3").getElementsByTagName("p")[0].innerHTML = "first";
document.querySelector("#d3").getElementsByTagName("p")[1].innerHTML = "second";
document.querySelector("#d3").getElementsByTagName("p")[2].innerHTML = "third";

// 4. Finding elements by class name
document.getElementsByClassName("p4")[0].innerHTML = "first";
document.getElementsByClassName("p4")[1].innerHTML = "second";
document.getElementsByClassName("p4")[2].innerHTML = "third";

// 5. Finding elements by query selector
document.querySelector("#p5a").innerHTML = "first";
document.querySelector("#p5b").innerHTML = "second";
document.querySelector("#p5c").innerHTML = "third";

// 6. Finding elements using forms
function f6() {
    var f = document.forms[0];
    alert(f[0].value + " " + f[1].value + " " + f[2].value + "\n" + f[3].value);
}

// 7. Adding elements
var p7a = document.createElement("p");
var p7b = document.createElement("p");
var p7c = document.createElement("p");
p7a.innerHTML = "first"
p7b.innerHTML = "second"
p7c.innerHTML = "third"
document.querySelector("#d7").appendChild(p7a);
document.querySelector("#d7").appendChild(p7b);
document.querySelector("#d7").appendChild(p7c);

// 8. Adding new elements to front of list
var p8a = document.createElement("p");
var p8b = document.createElement("p");
var p8c = document.createElement("p");
p8a.innerHTML = "first";
p8b.innerHTML = "second";
p8c.innerHTML = "third";
document.querySelector("#d8").appendChild(p8a);
document.querySelector("#d8").insertBefore(p8b, p8a);
document.querySelector("#d8").insertBefore(p8c, p8b);

// 9. Removing elements
document.querySelector("#p9b").remove();
document.querySelector("#p9c").remove();

// 10. Removing nested elements
document.querySelector("#d10").removeChild(document.querySelector("#p10b"));
document.querySelector("#d10").removeChild(document.querySelector("#p10c"));
