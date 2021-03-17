document.addEventListener("DOMContentLoaded", function() {
    let images = document.querySelectorAll("img");    
    let loadTimeout;
    let count = 0;
    function lazyload () {
        if(loadTimeout) {
            clearTimeout(loadTimeout);
        }    
    
        loadTimeout = setTimeout(function() {
            var scrollTop = window.pageYOffset;
            images.forEach(function(img) {
                if(img.offsetTop < (window.innerHeight + scrollTop) && (img.offsetTop + img.height) > scrollTop) {
                    img.src = img.dataset.src;

                    if(img.classList.contains("lazy")) {
                        count++;
                        let info = document.querySelector(".count .text");
                        info.innerHTML = count + " images loaded from 20"
                        img.setAttribute("class", "lazy_not");

                        if(count == 20) {
                            info.style.background = "red";
                            setTimeout(() => {
                                info.style.display = "none";
                            }, 3000)
                        }
                    }
                }
            });

            if(images.length == 0) { 
                document.removeEventListener("scroll", lazyload);
                window.removeEventListener("resize", lazyload);
                window.removeEventListener("orientationChange", lazyload);
            }
        }, 500);
    }
    
    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
});