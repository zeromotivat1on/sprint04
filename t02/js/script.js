var headers = ["Name", "Strength", "Age"];

var contents = [
    ["Thanos", 99, 1000],
    ["Black Panther", 66, 53],
    ["Spider-Man", 78, 16],
    ["Captain America", 79, 137],
    ["Hulk", 80, 49],
    ["Captain Marvel", 97, 26],
    ["Iron Man", 88, 48],
    ["Yon-Rogg", 3, 52],
    ["Thor", 95, 1000]
];

let row = 10, col = 3;
let first_sort = false, column = -1;

function tableCreate(headers, contents) {
    let temp = document.getElementById("table1");
    if(temp != null) {
        document.getElementsByTagName('body')[0].removeChild(temp);
    } 

    var body = document.getElementsByTagName('body')[0];
    var tbl = document.createElement('table');
    tbl.id = "table1";
    var tbdy = document.createElement('tbody');

    for (let i = 0; i < row ; i++) {
        var tr = document.createElement('tr');
        for (let j = 0; j < col; j++) {
            var cell = document.createElement('td'), cellText;
            if(i == 0) { 
                cell.className = "first_row"; 
                cellText = document.createTextNode(headers[j]);
                cell.addEventListener("click", event => {sortContents(j, contents)});
            }
            else {
                for(let k = 0; k < row ; ++k) {
                    for(let l = 0; l < col; ++l) {
                        if(k == i && l == j) { cellText = document.createTextNode(contents[i - 1][j]);}
                    }
                }
            }

            cell.appendChild(cellText);
            tr.appendChild(cell);
        }
        
        tbdy.appendChild(tr);
    }

    tbl.appendChild(tbdy);
    body.appendChild(tbl);
}

function sortContents(col, contents) {
    if(!first_sort || column != col) {
        contents.sort((a, b) => {
            return a[col] == b[col] ? 0 : (a[col] < b[col] ? -1 : 0);
        });
        if(col == 0) {
            document.getElementById("notification").innerHTML = `Sorting by ${headers[0]}, order: ASC`;
        } else if(col == 1) {
            document.getElementById("notification").innerHTML = `Sorting by ${headers[1]}, order: ASC`;
        } else {
            document.getElementById("notification").innerHTML = `Sorting by ${headers[2]}, order: ASC`;
        }
        tableCreate(headers, contents);
        first_sort = true;
        column = col;
    } else {
        contents.sort((a, b) => {
            return a[col] == b[col] ? 0 : (a[col] > b[col] ? -1 : 0);
        });
        if(col == 0) {
            document.getElementById("notification").innerHTML = `Sorting by ${headers[0]}, order: DESC`;
        } else if(col == 1) {
            document.getElementById("notification").innerHTML = `Sorting by ${headers[1]}, order: DESC`;
        } else {
            document.getElementById("notification").innerHTML = `Sorting by ${headers[2]}, order: DESC`;
        }
        tableCreate(headers, contents);
        first_sort = false;
    }
}

tableCreate(headers, contents);