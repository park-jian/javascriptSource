var cont = document.getElementsByClassName('cont')[0];
var cont_num = parseInt(cont.innerText);



function plus_click(){
   cont_num++;
   cont.innerText = cont_num;
   if(cont_num > 0){
      cont.style.color="green";
   }else if(cont_num < 0){
      cont.style.color="red";
   }else{
      cont.style.color="white";
   }

}

function minus_click(){
    cont_num--;
    cont.innerText = cont_num;
    if(cont_num > 0){
        cont.style.color="green";
    }else if(cont_num < 0){
        cont.style.color="red";
    }else{
        cont.style.color="white";
    }
}