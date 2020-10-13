clock();
setInterval(clock, 1000);

function clock() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    document.querySelector("#display").innerHTML = date.toLocaleTimeString();
    document.querySelector("#hour").style.transform = "rotate(" + (hour * 6 + minute / 2) + "deg)";
    document.querySelector("#minute").style.transform = "rotate(" + (minute * 6 + second / 10) + "deg)";
    document.querySelector("#second").style.transform = "rotate(" + (second * 6) + "deg)";
}