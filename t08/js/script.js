let word_input = document.getElementById("word_input");
let text_input = document.getElementById("text_input");
let output_text = document.getElementById("output_text");

let phone_number = document.getElementById("phone_number");
let word_count = document.getElementById("word_count");
let word_replace = document.getElementById("word_replace");

let phone_cnt = 0;
let wcount_cnt = 0;
let wreplace_cnt = 0;

function toPhoneNumber() {
    let temp = word_input.value.trim();

    if (temp.match(/^\d{10}$/g)) { 
        document.querySelector(".output_text").innerHTML = `${temp.slice(0,3)}-${temp.slice(3,6)}-${temp.slice(6,10)}`;
    }
    else { document.querySelector(".output_text").innerHTML = "Invalid phone number."; }

    phone_number.innerHTML = +phone_number.innerHTML + 1;
}

function wordCount() {
    let word = word_input.value.trim();
    let text = text_input.value.trim();
    let textArr = text.split(" ");

    let word_cnt = 0;

    if(text != "") {
        for(let i = 0; i < textArr.length; ++i) {
            if(word == textArr[i]) { word_cnt++; }
        }
    }

    document.querySelector(".output_text").innerHTML = `${word_cnt}`;

    word_count.innerHTML = +word_count.innerHTML + 1;
}

function wordReplace() {
    let word = word_input.value.trim();
    let text = text_input.value.trim().replace("\n", " ");
    let textArr = text.split(" ");
    let count = 0;;

    let res = "";

    if(text != "") {
        for(let i = 0; i < textArr.length; ++i) {
            if(textArr[i] == "") { count--; }
            count++;
        }
        console.log(textArr);
        for(let i = 0; i < count; ++i) {
            res += `${word} `;
        }
    }

    document.querySelector(".output_text").innerHTML = `${res}`;
    
    word_replace.innerHTML = +word_replace.innerHTML + 1;
}