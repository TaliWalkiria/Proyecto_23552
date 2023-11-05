document.addEventListener('DOMContentLoaded', function() {
const valorTicket = 2000;
let descuentoEstudiante = 80;
let descuentoTrainee = 50;
let descuentoJunior = 15;

let nombre = document.getElementById("nombre");
let divErrorNombre = document.getElementById("mensajeErrorNombre");
let apellido = document.getElementById("apellido");
let divErrorApellido = document.getElementById("mensajeErrorApellido");
let mail = document.getElementById("mail");
let divErrorMail = document.getElementById("mensajeErrorMail");
let cantidadTickets = document.getElementById("cantidadTickets");
let divErrorCantidad = document.getElementById("mensajeErrorCantidad");
let categoria = document.getElementById("categoriaSelect");
let divErrorCategoria = document.getElementById("mensajeErrorCategoria");

let btnResumen = document.getElementById("btnResumen");
let totalPago = document.getElementById("totalPago");
let btnBorrar = document.getElementById("btnBorrar");

function quitarClaseError () {
    let listaNodos = document.querySelectorAll(".form-control, .form-select");
    for (let i = 0; i < listaNodos.length; i++) {
        listaNodos[i].classList.remove('is-invalid');
    }
    let listaNodosdiv = document.querySelectorAll(".invalid-feedback");
    for (let i = 0; i < listaNodosdiv.length; i++) {
        listaNodosdiv[i].classList.remove('propia');
    }
}

function emailValido(mail) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
}

function totalAPagar() {
    quitarClaseError();
    if (nombre.value === "") {
        nombre.classList.add("is-invalid");
        divErrorNombre.classList.add("propia");
        nombre.focus();
        return;
    }
    if (apellido.value === "") {
        apellido.classList.add("is-invalid");
        divErrorApellido.classList.add("propia");
        apellido.focus();
        return;
    }
    if (mail.value === "" || !emailValido(mail.value)) {
        mail.classList.add("is-invalid");
        divErrorMail.classList.add("propia");
        mail.focus();
        return;
    }

    let cantidad = parseInt(cantidadTickets.value);
    if (cantidad <= 0 || isNaN(cantidad)) {
        cantidadTickets.classList.add("is-invalid");
        divErrorCantidad.classList.add("propia");
        cantidadTickets.focus();
        return;
    }
    
    if (categoria.value === "") {
        categoria.classList.add("is-invalid");
        divErrorCategoria.classList.add("propia");
        categoria.focus();
        return;
    }

    let totalValorTickets = cantidad * valorTicket;
    switch (categoria.value) {
        case "1":
            totalValorTickets -= descuentoEstudiante / 100 * totalValorTickets;
            break;
        case "2":
            totalValorTickets -= descuentoTrainee / 100 * totalValorTickets;
            break;
        case "3":
            totalValorTickets -= descuentoJunior / 100 * totalValorTickets;
            break;
    }
    totalPago.innerHTML = totalValorTickets;
}

btnResumen.addEventListener("click", totalAPagar);

function resetTotalAPagar() {
    quitarClaseError();
    totalPago.innerHTML = "";
}

btnBorrar.addEventListener("click", resetTotalAPagar);

let descuentos = document.querySelectorAll('.descuento');

descuentos.forEach(descuento => {
    descuento.addEventListener('click', function() {
        let categoria = this.querySelector('h4').textContent.toLowerCase();
        document.getElementById('categoriaSelect').value = categoria;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navContainer = document.querySelector('.nav-container');

    mobileMenuToggle.addEventListener('click', function() {
        navContainer.classList.toggle('active');
    });
});

});
