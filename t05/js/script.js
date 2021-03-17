let red = document.getElementById('red');
let orange = document.getElementById('orange');
let yellow = document.getElementById('yellow');
let green = document.getElementById('green');
let blue = document.getElementById('blue');
let violet = document.getElementById('violet');

let arr = [red, orange, yellow, green, blue, violet];

for(let i in arr) {
    let temp = arr[i].className.split(" ");

    document.querySelector(`.${temp[1]}`).addEventListener("click", event => {
        arr[i].setAttribute("class", `${temp[0]} ${temp[1]}`);
        arr[i].style.border = "none";

        arr[i].onmousedown = function(e) {
            if(!document.querySelector(`.not_active` + i)) {
                move(i, e);
            }
        };
    });
}

function move(i, e) {
    
    let temp = arr[i].className.split(" ");


    let coords = getCoords(arr[i]);
    let shiftX = e.pageX - coords.left;
    let shiftY = e.pageY - coords.top;

    var startX = e.clientX;
    var startY = e.clientY;

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
    
    arr[i].onmouseup = function(event) {
        document.onmousemove = null;
        arr[i].onmouseup = null;

        let fX = event.clientX;
        let fY = event.clientY;
        if(Math.sqrt((startX - fX) * (startX - fX) + (startY - fY) * (startY - fY)) < 10) {
            arr[i].style.border = "2px dashed black";
            arr[i].setAttribute("class", `${temp[0]} ${temp[1]} not_active` + i);
        }
    };
 
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
}