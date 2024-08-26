function createTableRow() {
    return document.createElement("tr");
}

function createTableHeaderCell(tag, classname, value, content) {
    var th_ele = document.createElement(tag);
    th_ele.setAttribute(classname, value);
    th_ele.textContent = content;
    return th_ele;
}

function createTableCell(tag, content) {
    var td_ele = document.createElement(tag);
    td_ele.textContent = content;
    return td_ele;
}

function fetchTableData(start, end) {
    var request = new XMLHttpRequest();
    request.open("GET", "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json");
    request.send();
    request.onload = function () {
        var data = JSON.parse(request.response);
        tbody.innerHTML = '';  // Clear previous rows
        for (var i = start; i <= end; i++) {
            var tbody_tr = createTableRow();
            var td1 = createTableHeaderCell("th", "scope", "row", data[i].id);
            var td2 = createTableCell("td", data[i].name);
            var td3 = createTableCell("td", data[i].email);
            tbody_tr.append(td1, td2, td3);
            tbody.append(tbody_tr);
        }
    }
}

var table = document.createElement("table");
table.className = "table table-striped";

var thead = document.createElement("thead");
thead.className = "thead-dark";
var thead_tr = createTableRow();
var th1 = createTableHeaderCell("th", "scope", "col", "ID");
var th2 = createTableHeaderCell("th", "scope", "col", "Name");
var th3 = createTableHeaderCell("th", "scope", "col", "Email");
thead_tr.append(th1, th2, th3);
thead.append(thead_tr);

var tbody = document.createElement("tbody");

var parent_div = document.createElement("div");
parent_div.className = "main";

table.append(thead, tbody);
parent_div.append(table);
document.body.append(parent_div);

createButtons();


fetchTableData(0, 9);

function createButtons() {
    var but_div = document.createElement("div");
    but_div.className = "main1";

    for (let i = 1; i <= 10; i++) {
        var button = document.createElement("button");
        button.setAttribute("type", "button");
        button.id = "but" + i;
        button.textContent = i;

        button.addEventListener("click", () => {
            fetchTableData((i - 1) * 10, i * 10 - 1);
        });

        but_div.append(button);
    }

    document.body.append(but_div);
}