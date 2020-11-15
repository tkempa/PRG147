function load_xml() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let parser = new DOMParser();
            let xml = parser.parseFromString(this.responseText,"text/xml");
            for (let x of xml.getElementsByTagName("item")) {
                let p = document.createElement("p");
                let name = x.getElementsByTagName("name")[0].childNodes[0].nodeValue;
                let price = x.getElementsByTagName("price")[0].childNodes[0].nodeValue;
                let quantity = x.getElementsByTagName("quantity")[0].childNodes[0].nodeValue;
                p.innerHTML = name + " " + price + " (" + quantity + ")";
                document.querySelector("#xml").append(p);
            }
        }
    };
    xhttp.open("GET", "list.xml", true);
    xhttp.send();
}

function load_json() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let json = JSON.parse(this.responseText);
            for (let x of json["shopping_list"]) {
                let p = document.createElement("p");
                p.innerHTML = x["name"] + " " + x["price"] + " (" + x["quantity"] + ")";
                document.querySelector("#json").append(p);
            }
        }
    };
    xhttp.open("GET", "list.json", true);
    xhttp.send();
}

load_xml();
load_json();
