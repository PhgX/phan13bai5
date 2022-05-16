let int = new Array();

function show() {
    let num = +document.getElementById("input").value;
    int[int.length] = num;
    document.getElementById("output").innerHTML = int;
    document.getElementById("input").value= "";    
    document.getElementById("reverse").innerHTML = int.reverse();
}
