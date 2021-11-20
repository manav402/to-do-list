var n='1';
function clicked() {
    var task = document.getElementById("txt");
    var taskDATA=task.value;
    task.value="";
    if (taskDATA == "" || taskDATA == " ") {
        alert("Please enter task first");
    }
    else {
        var ul = document.getElementById("ls");
        var list = document.createElement("li");
        var btn2 = document.createElement("button");
        var div3=document.createElement("div");
        // var edit = document.createElement("button");
        div3.id="div3";
        btn2.innerHTML = "X";
        list.innerHTML = taskDATA;
        // edit.innerHTML="!";
        list.id = n;
        btn2.id = n;
        // edit.id=n;
        
        btn2.setAttribute("onclick", "deleteit(this.id)");
        // edit.setAttribute("onclick","editit(this.id)");
        btn2.className = "btn2";
        list.className = "list2";
        ul.appendChild(list);
        // list.appendChild(edit);
        list.appendChild(btn2);
        // div3.appendChild(btn2);
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