
  const btn = document.querySelector("#btn"),
  email = document.querySelector("#email"),
  phone = document.querySelector("#phone"),
  street = document.querySelector("#street"),
  last = document.querySelector("#last"),
  first= document.querySelector("#first"),
  photo = document.querySelector("#photo");
  
  
  
  
  btn.addEventListener('click', btnClick);
  
  function btnClick(){
    $.ajax({
      url: 'https://randomuser.me/api/',
      dataType: 'json',
      success: function(data) {
          photo.src="";
 
          photo.src = data.results[0].picture.large;
          first.innerHTML='';
          first.innerHTML = data.results[0].name.first;
          last.innerHTML='';
          last.innerHTML = data.results[0].name.last;
          street.innerHTML='';
          street.innerHTML = data.results[0].location.street.name;
          phone.innerHTML='';
          phone.innerHTML = data.results[0].cell;
          email.innerHTML='';
          email.innerHTML = data.results[0].email;
  
        console.log(data.results[0].picture.large);
        console.log(data.results[0]);  
        console.log(data.results[0].name.first);
        console.log(data.results[0].name.last);
        console.log(data.results[0].location.street.name);
        console.log(data.results[0].cell);
        console.log(data.results[0].email);
      }
    });
      
  }
  

  
  


