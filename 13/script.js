var car1 = new Object();
car1.brand = "Lamborghini";
car1.model = "Aventador";
car1.year = 2020;
car1.color = "white";

var car2 = {
    brand: "Lamborghini",
    model: "Huracan",
    year: 2020,
    color: "orange"
};

var text = "";
for (x in car1) text += x + ": " + car1[x] + "<br>";
document.querySelector("#p1").innerHTML = text;
text = "";
for (x in car2) text += x + ": " + car2[x] + "<br>";
document.querySelector("#p2").innerHTML = text;
