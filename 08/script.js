r1 = document.querySelectorAll("#r1 .box")
r2 = document.querySelectorAll("#r2 .box")
r3 = document.querySelectorAll("#r3 .box")
r4 = document.querySelectorAll("#r4 .box")
r5 = document.querySelectorAll("#r5 .box")

for (var i = 0; i < r1.length; i++) r1[i].style.background = "red"
for (x of r2) x.style.background = "blue"
r3.forEach(x => x.style.background = "green")
for (x of r4.values()) x.style.background = "orange"
for (x of r5.keys()) r5[x].style.background = "purple"
