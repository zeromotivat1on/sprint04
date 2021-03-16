document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll("img");    
    var loadTimeout;
    
    function lazyload () {
    if(loadTimeout) {
        clearTimeout(loadTimeout);
    }    
    
    loadTimeout = setTimeout(function() {
            var scrollTop = window.pageYOffset;
            images.forEach(function(img) {
                if(img.offsetTop < (window.innerHeight + scrollTop)) {
                    img.src = img.dataset.src;
                }
            });
            if(images.length == 0) { 
                document.removeEventListener("scroll", lazyload);
                window.removeEventListener("resize", lazyload);
                window.removeEventListener("orientationChange", lazyload);
            }
        }, 20);
    }
    
    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
});