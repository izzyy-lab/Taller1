
    const person = {
    name: 'Juan Carlos Valencia',
    age: 30,
    city: 'Cali',
    profession: 'Desarrollador'
};


let {name,age,profession} = person 

document.getElementById("resultado").innerHTML = `Nombre: ${name} <br> Edad: ${age} <br> Profesión: ${profession}`;