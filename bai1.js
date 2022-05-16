
let int = new Array();

function show() {
    let num = +document.getElementById("input").value;
    int[int.length] = num;
    document.getElementById("output").innerHTML = int;
    document.getElementById("input").value= "";
    
}


function func() {
    let count = 0;
    for (let i = 0; i<int.length; i++) {
        if (int[i]>=10){
            count++;        
        }
    }
document.getElementById("result").innerHTML= "Số phần tử có giá trị >= 10 là: " + count;
}