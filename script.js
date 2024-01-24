const pun = document.getElementById("joke");
const btn = document.getElementById("btn");
btn.addEventListener('click', ()=>{
    let joke ="";
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.api-ninjas.com/v1/dadjokes?limit=1');
    xhr.setRequestHeader('X-Api-Key', 'k4dkNLr9n/E+dbQvxAgAoQ==rTw5aofmyw2FRP20');
    xhr.send();
    xhr.onload = function() {
        if (xhr.status === 200){
            const result = JSON.parse(xhr.responseText);
            joke = result[0].joke;
            pun.innerText = joke;
        }
    };
    // copy text
const copy = document.getElementById("copy");
const copied = document.getElementById("copied");
copy.addEventListener('click', ()=>{
    navigator.clipboard.writeText( pun.innerText );
    copied.innerText = "Copied"
    setInterval(function() {
        copied.innerText ="";}, 3000);
})
})

// dark mode
const text = document.getElementById("text");
const toggle = document.querySelector("input");
const container = document.querySelector("body");
const card = document.getElementById("container");
toggle.addEventListener('click',() => {
    if(toggle.checked) {
        container.style.backgroundColor = "#040D12";
        card.style.backgroundColor ="white";
    }
    else{
        container.style.backgroundColor = "white";
    }
})



