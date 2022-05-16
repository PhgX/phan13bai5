let int = new Array();

function show() {
    let num = +document.getElementById("input").value;
    int[int.length] = num;
    document.getElementById("output").innerHTML = int;
    document.getElementById("input").value= "";    
}

function negative_num() {
    let negative_Num = '';
        for (let i = 0; i<int.length; i++){
            if (int[i] < 0){
            negative_Num += int[i] + ', ' ;
                
        }  
    } 
    document.getElementById("negative_num").innerHTML = negative_Num;
}