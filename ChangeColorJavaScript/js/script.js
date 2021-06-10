
function getRandomIntInclusive(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function colorChange(){
    var r= getRandomIntInclusive(0, 255);
    var g= getRandomIntInclusive(0, 255);
    var b= getRandomIntInclusive(0, 255);
    var random_color = "rgb(" + r + "," + g + "," +b + ")";
    var cc=document.getElementById("body_color");
    cc.style.backgroundColor = random_color;
}