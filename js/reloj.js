let html = document.getElementById("tiempo");

setInterval(function(){
    tiempo = new Date();

    horas = tiempo.getHours();
    minutos = tiempo.getMinutes();
    segundos = tiempo.getSeconds();

    if(horas<10)
    horas = "0" +horas;
    html.innerHTML = horas+" : "+minutos+" : "+segundos;
}, 1000);