const btn = document.querySelector("#get-joke")
,context = document.querySelector("#display-joke");

const url = `https://api.chucknorris.io/jokes/random`



btn.addEventListener("click", randomJoke);

function randomJoke(){
    const xhr = new XMLHttpRequest();
    //true는 생략 가능
        xhr.open('GET', url,  true);

// If specified, responseType must be empty string or "text"
    xhr.responseType = 'text';
    xhr.onload = function () {
        if (xhr.readyState === xhr.DONE) {
            if (xhr.status === 200) {
                //console.log(xhr.response);
                //console.log(xhr.responseText);
                jsonData = xhr.responseText;
                
                context.innerText = JSON.parse(jsonData).value
            }
        }
    };

    xhr.send(null);
}

