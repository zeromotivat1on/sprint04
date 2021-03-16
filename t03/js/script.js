var slideIndex = 0, wasPressed = false;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n, true);
}

function showDivs(n, wasPressed) {
    var i;
    var x = document.getElementsByClassName("slide");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex - 1].style.display = "block";
    if(!wasPressed) var timer = setTimeout(showDivs, 3000);
    else clearTimeout(timer);
}