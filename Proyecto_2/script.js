function calcularTiempo(params) {
    

    let tiempo = new Date();
    let hora = tiempo.getHours()
    let minuto = tiempo.getMinutes()
    let segundo = tiempo.getSeconds()
    
    hora = hora < 10 ? "0" + hora : hora;
    minuto = minuto < 10 ? "0" + minuto : minuto;
    segundo = segundo < 10 ? "0" + segundo : segundo;

    let pantallaReloj = hora + ":" + minuto + ":" + segundo ; 
    let relogDigital = document.querySelector(".reloj");
    relogDigital.innerHTML= pantallaReloj

}

setInterval(calcularTiempo, 1000)