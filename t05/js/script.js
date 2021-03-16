let red = document.getElementById('red');
let orange = document.getElementById('orange');
let yellow = document.getElementById('yellow');
let green = document.getElementById('green');
let blue = document.getElementById('blue');
let violet = document.getElementById('violet');

let arr = [red, orange, yellow, green, blue, violet];

for(let i in arr) {
    arr[i].addEventListener("click", () => {
        arr[i].classList.toggle("active", true);
        console.log(arr[i].classList.contains("active"));
    });
    console.log(arr[i].classList.contains("active"));

    //if(arr[i].classList.contains("active")) {
        arr[i].onmousedown = function(e) {

            let coords = getCoords(arr[i]);
            let shiftX = e.pageX - coords.left;
            let shiftY = e.pageY - coords.top;

            arr[i].style.position = 'absolute';
            document.body.appendChild(arr[i]);
            moveAt(e);

            arr[i].style.zIndex = 1000;

            function moveAt(e) {
                arr[i].style.left = e.pageX - shiftX + 'px';
                arr[i].style.top = e.pageY - shiftY + 'px';
            }
            
            document.onmousemove = function(e) {
                moveAt(e);
            };
            
            arr[i].onmouseup = function() {
                document.onmousemove = null;
                arr[i].onmouseup = null;
            };

        }

        arr[i].ondragstart = function() {
            return false;
        };

        function getCoords(elem) {
            let box = elem.getBoundingClientRect();
            return {
                top: box.top + pageYOffset + 10.33,
                left: box.left + pageXOffset + 10.33
            };
        }
    //}
}