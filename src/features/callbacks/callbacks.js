// ACTIVIDAD 3 - CALLBACKS

const baseDatos1 = ['Canada', 'EUA', 'Mexico', 'Ecuador', 'Brazil', 'Argentina', 'Uruguay'];
const baseDatos2 = ['Japón', 'Irán', 'Corea del Sur', 'Alemania', 'Croacia', 'España', 'Inglaterra'];

const encontrado = () => {
    alert("País encontrado");
};

document.addEventListener("DOMContentLoaded", () => {
    mostrarPais();
});

const busquedaBaseDatos2 = (pais, callback) => {
    if (baseDatos2.includes(pais)) {
        callback();
    } else {
        alert("Dato no encontrado");
    }
};
const mostrarPais = () => {

    let paisData = document.getElementById("paises1")
    paisData.innerHTML = ""
    baseDatos1.forEach(item => {
    paisData.innerHTML += `<li class="m-3">${item}</li>`
    })


    let paisData2 = document.getElementById("paises2")
    paisData2.innerHTML = ""
    baseDatos2.forEach(item => {
    paisData2.innerHTML += `<li class="m-3">${item}</li>`
    })
};

const busquedaBaseDatos1 = (pais, callback) => {
    if (baseDatos1.includes(pais)) {
        callback();
    } else {
        busquedaBaseDatos2(pais, callback);
    }
};

const buscarPais = () => {
    const pais = document.getElementById("pais").value;
    busquedaBaseDatos1(pais, encontrado);
};

