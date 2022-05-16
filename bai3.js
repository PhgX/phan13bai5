let int = new Array();

function show() {
    let num = +document.getElementById("input").value;
    int[int.length] = num;
    document.getElementById("output").innerHTML = int;
    document.getElementById("input").value= "";    
}

function func() {
    let sum = 0;
    let max = int[0];
    for(let i = 0; i<int.length; i++){
        if(int[i] > max){
            max = int[i];
        } 
        sum += int[i];             
    }
    let avg = sum/int.length;
    let vitri = int.indexOf(max) + 1;
    document.getElementById("result").innerHTML = "Số lớn nhất mảng là: " + max + "nằm ở vị trí " + vitri; 
    document.getElementById("result1").innerHTML = "Trung bình của mảng là " + avg;
}