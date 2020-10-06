function f1() {
    document.querySelector("#p1").innerHTML = new Date();
}
f1();

function f2() {
    document.querySelector("#p2").innerHTML = "Tyler Kempa";
}
f2();

var movie = {
    title: "Inception",
    year: "2010",
    rating: "PG-13",
    runtime: "148 minutes",
    director: "Christopher Nolan",
};

var text = "";
for (x in movie) text += x + ": " + movie[x] + "<br>";
document.querySelector("#p3").innerHTML = text;