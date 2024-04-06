var a = document.querySelector("#clock");
setInterval(function(){
    let date = new Date();
    a.innerHTML = date.toLocaleTimeString();
},1000)