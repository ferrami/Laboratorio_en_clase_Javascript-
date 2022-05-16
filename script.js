let nombre = prompt("Hola, ingresa su nombre:")

console.log(nombre)

//primera parte: Estructura if (Anidada),

function saludo() {
    let hora = prompt("Te sabes la hora militar? Ingresa solo la hora, sin minutos?");


    if (hora >= 6 && hora < 12) {
        alert("Buenos dias");
    } else if (hora >= 12 && hora < 19) {
        alert("Buenos tardes");
    } else if (hora >= 19 && hora < 24) {
        alert("Buenas Noches");
    } else if (hora >= 0 && hora < 6) {
        alert(`No mames, las ${hora} a esta hora deberia estar durmiendo`);
    } else {
        alert(`${hora} es un valor incorrecto`);
    }

}

function estacion() {
    let mes = document.getElementById('mes').value;
    let nombreMes = document.getElementById('mes').selectedOptions[0].text;

    if (mes == 12 || mes == 1 || mes == 2) {
        alert(`Abrigate bien que es ${nombreMes}, es invierno`);
    } else if (mes == 3 || mes == 4 || mes == 5) {
        alert(`Abejas, Flores, Picnic! ${nombreMes} es pura primavera`);
    } else if (mes == 6 || mes == 7 || mes == 8) {
        alert(`Usa bastante bloqueador y alista el traje de baño que es ${nombreMes}, disfurta el verano`);
    } else if (mes == 9 || mes == 10 || mes == 11) {
        alert(`Alista sombrilla y capa que es ${nombreMes}, es otonno`);
    } else {
        alert(`Valor incorrecto`)
    }

    console.log(nombreMes)
}

function estacionSwitch() {
    let mes = document.getElementById('mes').selectedOptions[0].text;

    switch (mes) {
        case "Diciembre":
        case "Enero":
        case "Febrero":
            alert("Estas en invierno");
            break;
        case "Marzo":
        case "Abril":
        case "Mayo":
            alert("Estas en Primavera");
            break;
        case "Junio":
        case "Julio":
        case "Agosto":
            alert("Estas en Verano");
            break;
        case "Septiembre":
        case "Octubre":
        case "Noviembre":
            alert("Estas en Otonno");
            break;
        default:
            alert("Valor Incorrecto")
    }

    console.log(mes)
}

function salir() {
    let mensaje = "";
    for (let i = 0; i < 21; i++) {
        mensaje += `<p> Error: ${i}, ${nombre} no podra salir del sistema!`
    }

    document.getElementById("error").innerHTML = mensaje;

}