let elementsArr = document.querySelectorAll("#characters > li");

for(let i = 0; i < elementsArr.length; ++i) {
    if(!elementsArr[i].className) {
        elementsArr[i] = elementsArr[i].className = "unknown";
    }

    let attribute = elementsArr[i].getAttribute("data-element");
    if(!attribute) {
        attribute = "none";
    }

    let addStr = "<br>";
    let attributeArr = attribute.split(" ");
    if(attribute !== "none") {
        if(attributeArr.length > 1) {
            for(let i = 0; i < attributeArr.length; ++i) {
                addStr += `<div class=\"elem ${attributeArr[i]}\"></div>`;
            }
        } else {
            addStr += `<div class=\"elem ${attribute}\"></div>`;
        }
    } else {
        addStr += `<div class=\"elem\"><div class=\"line\"></div></div>`
    }
    elementsArr[i].innerHTML += addStr;
}