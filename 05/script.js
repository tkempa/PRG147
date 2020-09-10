function f1() {
    v1 = document.querySelector("#input1").value;
    v2 = document.querySelector("#input2").value;
    document.querySelector("#text1").innerHTML = "Answer: " + Math.max(v1, v2);
}

function f2() {
    v3 = document.querySelector("#input3").value;
    v4 = document.querySelector("#input4").value;
    v5 = document.querySelector("#input5").value;
    document.querySelector("#text2").innerHTML = "Answer: " + parity(v3 * v4 * v5);
}

function parity(n) {
    if (n % 2 == 0) return "even";
    else return "odd";
}