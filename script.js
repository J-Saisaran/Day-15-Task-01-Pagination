function tr() {
    var tr_ele = document.createElement("tr");
    return tr_ele;
}

function th(tag, classname, value, content) {
    var th_ele = document.createElement(tag);
    th_ele.setAttribute(classname, value);
    th_ele.innerHTML = content;
    return th_ele;
}

function td(tag, content) {
    var td_ele = document.createElement(tag);
    td_ele.innerHTML = content;
    return td_ele;
}

function table_data(start, end) {
    var request = new XMLHttpRequest();
    request.open("GET", "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json");
    request.send();
    request.onload = function () {
        var data = JSON.parse(request.response);
        var x = tbody.children.length
        if (x !== 0) {
            for (var i = 0; i < x; i++) {
                tbody.deleteRow(0);
            }
        }
        for (var i = start; i <= end; i++) {

            var x = data[i].id;
            var y = data[i].name;
            var z = data[i].email;
            var tbody_tr = tr();
            var td1 = th("th", "scope", "row", x);
            var td2 = td("td", y);
            var td3 = td("td", z);
            tbody_tr.append(td1, td2, td3);
            tbody.append(tbody_tr);
        }

    }
}
var table = document.createElement("table");
table.className = "table table-striped";

var thead = document.createElement("thead");
thead.className = "thead-dark";
var thead_tr = tr();
var th1 = th("th", "scope", "col", "ID");
var th2 = th("th", "scope", "col", "Name");
var th3 = th("th", "scope", "col", "Email");
thead_tr.append(th1, th2, th3);
thead.append(thead_tr);

var tbody = document.createElement("tbody");


var parent_div = document.createElement("div");
parent_div.className = "main";


table.append(thead, tbody);
parent_div.append(table);
document.body.append(parent_div);

create_but();

function create_but() {
    var but_div = document.createElement("div");
    but_div.className = "main1";
    var but_1 = document.createElement("button");
    but_1.setAttribute("type", "button");
    but_1.id = "but1";
    but_1.innerHTML = "1";

    but_1.addEventListener("click", (a) => {
        
        a.onclick = table_data(0, 9)
    });

    but_div.append(but_1);

    var but_2 = document.createElement("button");
    but_2.setAttribute("type", "button");
    but_2.id = "but2";
    but_2.innerHTML = "2";

    but_2.addEventListener("click", (a) => {

        a.onclick = table_data(10, 19)
    });

    but_div.append(but_2);

    

    var but_3 = document.createElement("button");
    but_3.setAttribute("type", "button");
    but_3.id = "but3";
    but_3.innerHTML = "3";

    but_3.addEventListener("click", (a) => {

        a.onclick = table_data(20, 29)
    });

    but_div.append(but_3);

    

    var but_4 = document.createElement("button");
    but_4.setAttribute("type", "button");
    but_4.id = "but4";
    but_4.innerHTML = "4";

    but_4.addEventListener("click", (a) => {

        a.onclick = table_data(30, 39)
    });

    but_div.append(but_4);

    var but_5 = document.createElement("button");
    but_5.setAttribute("type", "button");
    but_5.id = "but5";
    but_5.innerHTML = "5";

    but_5.addEventListener("click", (a) => {

        a.onclick = table_data(40, 49)
    });

    but_div.append(but_5);

    var but_6 = document.createElement("button");
    but_6.setAttribute("type", "button");
    but_6.id = "but6";
    but_6.innerHTML = "6";

    but_6.addEventListener("click", (a) => {

        a.onclick = table_data(50, 59)
    });

    but_div.append(but_6);


    var but_7 = document.createElement("button");
    but_7.setAttribute("type", "button");
    but_7.id = "but7";
    but_7.innerHTML = "7";

    but_7.addEventListener("click", (a) => {

        a.onclick = table_data(60, 69)
    });

    
    but_div.append(but_7);


    var but_8 = document.createElement("button");
    but_8.setAttribute("type", "button");
    but_8.id = "but8";
    but_8.innerHTML = "8";

    but_8.addEventListener("click", (a) => {

        a.onclick = table_data(70, 79)
    });

    
    but_div.append(but_8);

    var but_9 = document.createElement("button");
    but_9.setAttribute("type", "button");
    but_9.id = "but9";
    but_9.innerHTML = "9";

    but_9.addEventListener("click", (a) => {

        a.onclick = table_data(80, 89)
    });

    but_div.append(but_9);

  

    var but_10 = document.createElement("button");
    but_10.setAttribute("type", "button");
    but_10.id = "but10";
    but_10.innerHTML = "10";
    but_1.addEventListener("click", table_data(0, 9));
    
    but_10.addEventListener("click", (a) => {

        a.onclick = table_data(90, 99)
    });

    but_div.append(but_10);
    
document.body.append(but_div);

}