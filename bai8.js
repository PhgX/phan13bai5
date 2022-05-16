let num = new Array();
for (let i = 0; i<10; i++){
    var a = Math.round(Math.random()*100 );
    num[num.length] = parseInt(a);    
}
document.getElementById("output1").innerHTML = num;
document.write("<br");


let max_to_min = num.sort(function(a,b){return b - a});
document.getElementById("output2").innerHTML = max_to_min;
