//primera parte: Estructura if (Anidada),

function saludo() {
    let hora = prompt("Te sabes la hora militar? que hora es?");


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
    let mes = document.getElementById('mes');

    if (mes == Enero) {
        alert(`Abrigate bien que es invierno`);
    } else {
        alert("cualquier otra cosa");
    }
}