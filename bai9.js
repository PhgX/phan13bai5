let num_a = new Array();
let num_b = new Array();
let num_c = new Array();

for (let i = 0; i<10; i++){
    var a = Math.round(Math.random()*100 );
    num_a[num_a.length] = a;
    var b = Math.round(Math.random()*100 - 50); 
    num_b[num_b.length] = b;    
}
document.getElementById("output1").innerHTML = "Mảng a là: " + num_a;
document.getElementById("output2").innerHTML = "Mảng b là: " + num_b;
for (let j = 0; j<20; j++){
    var c = Math.round(Math.random()*100 +50);
    num_c[num_c.length] = c;   
}
document.getElementById("output3").innerHTML = "Mảng c là: " + num_c;
document.write("<br");

let d = num_c.concat(num_a,num_b);
document.getElementById("output4").innerHTML ="Nối 2 mảng a và b vào mảng c ta có: " + d;