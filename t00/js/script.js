var default_theme = true;

function transformation() {
    if(!default_theme) {
        const lab = document.getElementById("lab");
        lab.style.backgroundColor = "#ffb300";

        document.getElementById("hero").textContent = "Bruce Banner"
        const hero = document.getElementById("hero");
        hero.style.fontSize = "60px";
        hero.style.letterSpacing = "2px";

        default_theme = true;
    } else {
        const lab = document.getElementById("lab");
        lab.style.backgroundColor = "#70964b";

        document.getElementById("hero").textContent = "Hulk"
        const hero = document.getElementById("hero");
        hero.style.fontSize = "130px";
        hero.style.letterSpacing = "6px";

        default_theme = false;
    }

}