function skynet1() {
    var basicObj = { t1: "T1000", t2: "T-800", t3: "T-X" };
    document.querySelector("#p1").innerHTML = basicObj.t1 + " " + basicObj.t2 + " " + basicObj.t3;
}

function skynet2() {
    var basicObj = {};
    basicObj.t1 = "T1000";
    basicObj.t2 = "T-800";
    basicObj.t3 = "T-X";
    document.querySelector("#p2").innerHTML = basicObj["t1"] + " " + basicObj["t2"] + " " + basicObj["t3"];
}

function dataProc() {
    var arr = [];
    arr[0] = "Honda";
    arr[1] = "Ford";
    document.querySelector("#p3").innerHTML = arr.length;
    arr["airplanes"] = "AP1";
    document.querySelector("#p4").innerHTML = arr.length;
    arr[100] = "Toyata";
    document.querySelector("#p5").innerHTML = arr.length;
}

skynet1();
skynet2();
dataProc();