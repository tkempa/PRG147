myVar1 = "hello";
myVar2 = "world";
myVar3 = "javascript";
myVar2 = myVar3;
myVar1 = myVar2;
document.querySelector("#p1").innerHTML = "myVar1 = " + myVar1;
document.querySelector("#p2").innerHTML = "myVar2 = " + myVar2;
document.querySelector("#p3").innerHTML = "myVar3 = " + myVar3;

myOb1 = { team: 'Bears' };
myOb2 = { team: 'Packers' };
myObj3 = { team: 'Cowboys' };
myObj2 = myObj3;
myObj1 = myObj2;
document.querySelector("#p4").innerHTML = "myObj1.team = " + myObj1.team;
document.querySelector("#p5").innerHTML = "myObj2.team = " + myObj2.team;
document.querySelector("#p6").innerHTML = "myObj3.team = " + myObj3.team;