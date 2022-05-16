let num = new Array();
for (let i = 0; i<10; i++){
    let a = Math.round(Math.random()*100 - 100);
    num[num.length] = a;    
}
document.write(num + "<br>");
let V = Math.round(Math.random()*100 - 100);
document.write("V = " + V + "<br>");
if (num.indexOf(V) === -1){
    document.write("V không nằm trong mảng");
}
else {
    document.write("V nằm trong mảng");
}

