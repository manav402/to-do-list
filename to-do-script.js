var n='1';
function clicked() {
    var task = document.getElementById("txt").value;
    if (task == "" || task == " ") {
        alert("Please enter task first");
    }
    else {
        var ul = document.getElementById("ls");
        var list = document.createElement("li");
        var btn2 = document.createElement("button");

        btn2.innerHTML = 'x';
        list.innerHTML = task;
        
        list.id = n;
        btn2.id = n;


        btn2.setAttribute("onclick", "deleteit(this.id)");
        btn2.className = "btn2";
        ul.appendChild(list);
        list.appendChild(btn2);
        n=n+'1';

    }
}
function deleteit(btn1) {
    console.log(btn1);
    var dbtn = document.getElementById(btn1);
    dbtn.remove();
    console.log("deleted");
    // n=btn1;
}