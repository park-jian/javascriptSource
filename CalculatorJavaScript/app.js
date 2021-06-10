var btnClear = document.getElementsByClassName('btn-clear')[0];
var btnEqual = document.getElementsByClassName('btn-equal')[0];
var sum;
var arr = new Array();
//자바스크립트 배열은 자바랑은 다르게 한번 크기를 정해도 추가로 계속 넣어서
//크기를 바꿀수 있다.

var screen = document.getElementsByClassName('screen')[0];
btnClear.addEventListener('click', function(){
   //값 지우기
   screen.value = '';
});

var btn = document.getElementsByClassName('btn');
for(var i =0; i < btn.length; i++){
   btn[i].addEventListener('click',function(e){ 

            screen.value +=e.target.innerText;
            sum = (new Function ('return ' +screen.value))();
   }); 
}

btnEqual.addEventListener('click', calculator);
function calculator(){
   screen.value = '';
   screen.value = sum; 
}
//구조분해할당

//btnClear.addEventListener('click', calculator); 이것만 써주면 
//".addEventListener is not a function"오류가 발생하므로 아래처럼 모든 요소에 addEventListener를 해줘야함.
//document.getElementsByClassName요소는 배열을 반환하므로 특정 인덱스를 얻으려면
//document.getElementsByClassName('btn-clear')[0];이렇게 쓰던가 아니면 아래처럼 써줘야함.
//for(var i =0; i < btnClear.length; i++){
//   btnClear[i].addEventListener('click', calculator);
//}

//function calculator(e){
 //  alert("hi");
//}

