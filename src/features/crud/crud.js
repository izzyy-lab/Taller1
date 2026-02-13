
// ESTADO GLOBAL

let editIndex = null;



// CUANDO EL DOM ESTÉ LISTO
document.addEventListener("DOMContentLoaded", () => {

    showData();

    // Evento botón Guardar
    document.getElementById("btnAdd").addEventListener("click", addData);

    // Evento borrar todo
    document.getElementById("btnBorrarTodo").addEventListener("click", borrarTodo);

});



// VALIDACIÓN

const validateForm = () => {

    let email = document.getElementById("email").value.trim();
    let name = document.getElementById("nombre").value.trim();
    let doc = document.getElementById("documento").value.trim();

    if (email === "" || name === "" || doc === "") {
        alert("Por favor, complete todos los campos.");
        return false;
    }

    if (!email.includes("@")) {
        alert("Correo electrónico inválido.");
        return false;
    }

    let listData = JSON.parse(localStorage.getItem("listData")) || [];

    let existe = listData.some((item, index) =>
        index !== editIndex &&
        (item.email === email || item.doc === doc)
    );

    if (existe) {
        alert("El correo o el documento ya están registrados.");
        return false;
    }

    return true;
};



// MOSTRAR DATOS

const showData = () => {

    let listData = JSON.parse(localStorage.getItem("listData")) || [];

    let tbody = document.querySelector("#tableData tbody");
    let emptyState = document.getElementById("emptyState");

    tbody.innerHTML = "";

    if (listData.length === 0) {
        emptyState.classList.remove("d-none");
        return;
    } else {
        emptyState.classList.add("d-none");
    }

    listData.forEach((element, index) => {

        tbody.innerHTML += `
            <tr>
                <td>${element.email}</td>
                <td>${element.name}</td>
                <td>${element.doc}</td>
                <td>
                    <button class="btn btn-sm btn-warning me-1 edit" data-index="${index}">
                        Editar
                    </button>
                    <button class="btn btn-sm btn-danger delete" data-index="${index}">
                        Eliminar
                    </button>
                </td>
            </tr>
        `;
    });
};



// AGREGAR O ACTUALIZAR

const addData = () => {

    if (!validateForm()) return;

    let listData = JSON.parse(localStorage.getItem("listData")) || [];

    let email = document.getElementById("email").value.trim();
    let name = document.getElementById("nombre").value.trim();
    let doc = document.getElementById("documento").value.trim();

    if (editIndex === null) {
        listData.push({ email, name, doc });
    } else {
        listData[editIndex] = { email, name, doc };
        editIndex = null;
    }

    localStorage.setItem("listData", JSON.stringify(listData));

    clearForm();
    showData();
};



// EDITAR

const editData = (index) => {

    let listData = JSON.parse(localStorage.getItem("listData")) || [];
    let data = listData[index];

    document.getElementById("email").value = data.email;
    document.getElementById("nombre").value = data.name;
    document.getElementById("documento").value = data.doc;

    editIndex = index;
};



// ELIMINAR

const deleteData = (index) => {

    let listData = JSON.parse(localStorage.getItem("listData")) || [];

    listData.splice(index, 1);

    localStorage.setItem("listData", JSON.stringify(listData));
    showData();
};



// BORRAR TODO

const borrarTodo = () => {

    if (confirm("¿Está seguro de borrar todos los registros?")) {
        localStorage.removeItem("listData");
        showData();
    }
};




// DELEGACIÓN DE EVENTOS

document.addEventListener("click", (e) => {

    if (e.target.classList.contains("delete")) {
        const index = Number(e.target.dataset.index);

        if (confirm("¿Está seguro de eliminar este registro?")) {
            deleteData(index);
        }
    }

    if (e.target.classList.contains("edit")) {
        const index = Number(e.target.dataset.index);
        editData(index);
    }

});



// LIMPIAR FORM

const clearForm = () => {
    document.getElementById("studentForm").reset();
};
