colors_dark = ['rgba(255, 99, 132, .9)', 'rgba(255, 159, 64, .9)', 'rgba(255, 205, 86, .9)',
    'rgba(75, 192, 192, .9)', 'rgba(54, 162, 235, .9)', 'rgba(153, 102, 255, .9)'];

colors_light = ['rgba(255, 99, 132, .4)', 'rgba(255, 159, 64, .4)', 'rgba(255, 205, 86, .4)',
    'rgba(75, 192, 192, .4)', 'rgba(54, 162, 235, .4)', 'rgba(153, 102, 255, .4)'];


c1_num = Math.floor(Math.random() * 4) + 8;
c1_color = Math.floor(Math.random() * 6);
c1_label = [];
c1_data = [];
c1_backgroundColor = [];
c1_borderColor = [];
for (var i = 1; i <= c1_num; i++) {
    c1_label.push(i);
    c1_data.push(Math.floor(Math.random() * 100 + 1));
    c1_backgroundColor.push(colors_light[c1_color]);
    c1_borderColor.push(colors_dark[c1_color]);
}

var chart1 = new Chart(document.querySelector("#chart1").getContext("2d"), {
    type: "line",
    data: {
        labels: c1_label,
        datasets: [{
            label: "data",
            data: c1_data,
            backgroundColor: c1_backgroundColor,
            borderColor: c1_borderColor,
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

c2_num = Math.floor(Math.random() * 2 + 3);
c2_color = Math.floor(Math.random() * 6);
c2_label = [];
c2_data = [];
c2_backgroundColor = [];
c2_borderColor = [];
for (var i = 1; i <= c2_num; i++) {
    c2_label.push(i);
    c2_data.push(Math.floor(Math.random() * 100 + 1));
    c2_backgroundColor.push(colors_light[c2_color]);
    c2_borderColor.push(colors_dark[c2_color]);
}

var chart2 = new Chart(document.querySelector("#chart2").getContext("2d"), {
    type: "bar",
    data: {
        labels: c2_label,
        datasets: [{
            label: "data",
            data: c2_data,
            backgroundColor: c2_backgroundColor,
            borderColor: c2_borderColor,
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

c3_num = Math.floor(Math.random() * 3 + 2);
c3_color = Math.floor(Math.random() * 6);
c3_label = [];
c3_data = [];
c3_backgroundColor = [];
c3_borderColor = [];
for (var i = 1; i <= c3_num; i++) {
    c3_label.push(i);
    c3_data.push(Math.floor(Math.random() * 100 + 1));
    c3_backgroundColor.push(colors_light[(c3_color + i - 1) % 6]);
    c3_borderColor.push("white");
}
var chart3 = new Chart(document.querySelector("#chart3").getContext("2d"), {
    type: "pie",
    data: {
        labels: c3_label,
        datasets: [{
            label: "data",
            data: c3_data,
            backgroundColor: c3_backgroundColor,
            borderColor: c3_borderColor,
            borderWidth: 3
        }]
    },
});

c4_num = Math.floor(Math.random() * 15 + 5);
c4_color = Math.floor(Math.random() * 6);
c4_label = [];
c4_data = [];
c4_backgroundColor = [];
c4_borderColor = [];
for (var i = 1; i <= c4_num; i++) {
    c4_label.push(i);
    c4_data.push({"x": Math.floor(Math.random() * 10 + 1), "y":Math.floor(Math.random() * 10 + 1)});
    c4_backgroundColor.push(colors_dark[c4_color]);
    c4_borderColor.push(colors_dark[c4_color]);
}
var chart4 = new Chart(document.querySelector("#chart4").getContext("2d"), {
    type: "scatter",
    data: {
        labels: c4_label,
        datasets: [{
            label: "data",
            data: c4_data,
            backgroundColor: c4_backgroundColor,
            borderColor: c4_borderColor,
            borderWidth: 4
        }]
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});