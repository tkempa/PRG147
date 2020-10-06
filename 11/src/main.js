function sync(dom, pos) {
    dom.style.left = pos.x + "px";
    dom.style.top = pos.y + "px";
}

function addClicker() {
    for (let i = 0; i < 3; i++) {
        let pos = { x: Math.random() * 500, y: Math.random() * 300 };
        let img = new Image();
        img.src = "res/images/rick.png";
        img.style.position = "absolute";
        sync(img, pos);
        document.querySelector("#board").appendChild(img);
    }
}

addClicker();