let hex_value = document.querySelector('#hex-value');
function getRandomIntInclusive(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min +1)) + min;
}

function colorChange(){
    //색깔을 hexCode를 써서 표현하려면 #3e05ff 이런 형태로 써야함. 각 자리는 0~9a~f까지 총 16개 중 하나가 온다.
    //인덱스 00 ~ ff까지 총 16개를 랜덤으로 선택해서 #ffffff을 
    let arr = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
   
    let a = arr[getRandomIntInclusive(0,15)];
    let b = arr[getRandomIntInclusive(0,15)];
    let c = arr[getRandomIntInclusive(0,15)];
    let d = arr[getRandomIntInclusive(0,15)];
    let e = arr[getRandomIntInclusive(0,15)];
    let f = arr[getRandomIntInclusive(0,15)];
    hex_color = '#'+a + b + c + d + e + f;
    hex_value.innerText = hex_color;
    

    //var x = document.getElementsByTagName("BODY")[0];  
    //참조사이트 https://www.w3schools.com/jsref/dom_obj_body.asp

    let body_color = document.getElementsByTagName("BODY")[0];
    body_color.style.backgroundColor = hex_color;
}

function init(){
    let btn = document.getElementById('btn');
    btn.addEventListener("click",colorChange);
    
}

init();
