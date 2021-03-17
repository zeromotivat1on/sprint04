var slideIndex = -1, 
    timer = setTimeout(showPic , 3000, 1);

function showPic(n) {
    var slides = document.getElementsByClassName("slide");

    if(n == 1) {
        console.log(n);
        if (slideIndex >= slides.length - 1) { slideIndex = 0; }
        else { slideIndex += n }
    } else if(n == -1) {
        console.log(n);
        if (slideIndex <= 0 || slideIndex == -1) { slideIndex = slides.length - 1; }
        else { slideIndex += n }
    }
    
    console.log(slideIndex);
    
    for(let i = 0; i < slides.length; ++i) { slides[i].style.display = "none" };
    slides[slideIndex].style.display = "block";
    
    clearTimeout(timer);
    timer = setTimeout(showPic , 3000, 1);
}