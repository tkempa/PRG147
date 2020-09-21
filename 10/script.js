function f1() {
    num1 = Math.floor(Math.random() * 100) + 1;
    num2 = Math.floor(Math.random() * 100) + 1;
    num3 = Math.floor(Math.random() * 100) + 1;
    document.querySelector("#p1").innerHTML = num1 + " * " + num2 + " * " + num3 + " = " + (num1 * num2 * num3);
}

function f2() {
    num1 = Math.floor(Math.random() * 100) + 1;
    num2 = Math.floor(Math.random() * 100) + 1;
    if (num1 > num2)
        document.querySelector("#p2").innerHTML = num1 + " > " + num2;
    else
        document.querySelector("#p2").innerHTML = num2 + " > " + num1;
}

function f3() {
    num1 = Math.floor(Math.random() * 100) + 1;
    num2 = Math.floor(Math.random() * 100) + 1;
    if (num1 < num2)
        document.querySelector("#p3").innerHTML = num1 + " < " + num2;
    else
        document.querySelector("#p3").innerHTML = num2 + " < " + num1;
}

function f4() {
    num = Math.floor(Math.random() * 10) + 1;
    document.querySelector("#p4").innerHTML = num + "! = " + factorial(num);
}

function factorial(n) {
    if (n == 0 || n == 1)
        return 1;
    else
        return n * factorial(n - 1);
}