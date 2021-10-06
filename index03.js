let col = {
    color1: "red",
    color2: "yellow",
    color3: "green"
}

let num = parseInt(window.prompt("Introduce un número"));
document.getElementById("main").innerHTML=`${num}`
if(num<100){
    document.getElementById("main").style.color=col.color3;
}else if(num<200&&num>100){
    document.getElementById("main").style.color=col.color2;
}else{
    document.getElementById("main").style.color=col.color1;
}