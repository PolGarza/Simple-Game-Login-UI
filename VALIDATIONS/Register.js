
//Nombre completo 

document.addEventListener("DOMContentLoaded", function () {
    var nombreCompletoInput = document.getElementById("nombre_completo");
    var mensajeErrorNombreCompleto = document.getElementById("mensaje-error-nombre-completo");

    nombreCompletoInput.addEventListener("focus", function () {
        mensajeErrorNombreCompleto.style.display = "none";
    });

    nombreCompletoInput.addEventListener("blur", function () {
        var valorCampo = nombreCompletoInput.value.trim();
        if (!/^[A-Za-z\s]+$/.test(valorCampo)) {
            mensajeErrorNombreCompleto.style.display = "block";
        }
    });

    var formulario = document.querySelector("form");
    formulario.addEventListener("submit", function (event) {
        var valorCampo = nombreCompletoInput.value.trim();
        if (!/^[A-Za-z\s]+$/.test(valorCampo)) {
            mensajeErrorNombreCompleto.style.display = "block";
            nombreCompletoInput.focus();
            event.preventDefault(); // Detiene el envío del formulario si no pasa la validación
        }
    });
});


//Nombre de usuario 
document.addEventListener("DOMContentLoaded", function () {
    var nombreUsuarioInput = document.getElementById("nombre_usuario");
    var mensajeErrorUsuario = document.getElementById("mensaje-error-usuario");

    nombreUsuarioInput.addEventListener("focus", function () {
        mensajeErrorUsuario.style.display = "none";
    });

    nombreUsuarioInput.addEventListener("blur", function () {
        var valorCampo = nombreUsuarioInput.value.trim();
        if (valorCampo.length < 3) {
            mensajeErrorUsuario.style.display = "block";
        }
    });

    var formulario = document.querySelector("form");
    formulario.addEventListener("submit", function (event) {
        var valorCampo = nombreUsuarioInput.value.trim();
        if (valorCampo.length < 3) {
            mensajeErrorUsuario.style.display = "block";
            nombreUsuarioInput.focus();
            event.preventDefault(); // Detiene el envío del formulario si no pasa la validación
        }
    });
});

//Contraseña 

document.addEventListener("DOMContentLoaded", function () {
    var contrasenaInput = document.getElementById("pass");
    var mensajeErrorContrasena = document.getElementById("mensaje-error-contrasena");

    contrasenaInput.addEventListener("focus", function () {
        mensajeErrorContrasena.style.display = "none";
    });

    contrasenaInput.addEventListener("blur", function () {
        var valorCampo = contrasenaInput.value;
        if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/.test(valorCampo)) {
            mensajeErrorContrasena.style.display = "block";
        }
    });

    var formulario = document.querySelector("form");
    formulario.addEventListener("submit", function (event) {
        var valorCampo = contrasenaInput.value;
        if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/.test(valorCampo)) {
            mensajeErrorContrasena.style.display = "block";
            contrasenaInput.focus();
            event.preventDefault(); // Detiene el envío del formulario si no pasa la validación
        }
    });
});

//confirmar contraseña 

document.addEventListener("DOMContentLoaded", function () {
    var contrasenaInput = document.getElementById("pass");
    var confirmarContrasenaInput = document.querySelector("input[name='confirmar_pass']");
    var mensajeErrorContrasena = document.getElementById("mensaje-error-contrasena");
    var mensajeErrorConfirmarContrasena = document.getElementById("mensaje-error-confirmar-contrasena");

    contrasenaInput.addEventListener("focus", function () {
        mensajeErrorContrasena.style.display = "none";
    });

    confirmarContrasenaInput.addEventListener("focus", function () {
        mensajeErrorConfirmarContrasena.style.display = "none";
    });

    contrasenaInput.addEventListener("blur", function () {
        var valorContrasena = contrasenaInput.value;
        var valorConfirmarContrasena = confirmarContrasenaInput.value;
        if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/.test(valorContrasena)) {
            mensajeErrorContrasena.style.display = "block";
        } else if (valorContrasena !== valorConfirmarContrasena) {
            mensajeErrorConfirmarContrasena.style.display = "block";
        }
    });

    confirmarContrasenaInput.addEventListener("blur", function () {
        var valorContrasena = contrasenaInput.value;
        var valorConfirmarContrasena = confirmarContrasenaInput.value;
        if (valorContrasena !== valorConfirmarContrasena) {
            mensajeErrorConfirmarContrasena.style.display = "block";
        }
    });

    var formulario = document.querySelector("form");
    formulario.addEventListener("submit", function (event) {
        var valorContrasena = contrasenaInput.value;
        var valorConfirmarContrasena = confirmarContrasenaInput.value;
        if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/.test(valorContrasena)) {
            mensajeErrorContrasena.style.display = "block";
            event.preventDefault(); // Detiene el envío del formulario si no pasa la validación
        } else if (valorContrasena !== valorConfirmarContrasena) {
            mensajeErrorConfirmarContrasena.style.display = "block";
            event.preventDefault(); // Detiene el envío del formulario si no pasa la validación
        }
    });
});


//Fecha de nacimiento 
document.addEventListener("DOMContentLoaded", function () {
    var fechaNacimientoInput = document.getElementById("fecha_nacimiento");
    var mensajeErrorFechaNacimiento = document.getElementById("mensaje-error-fecha-nacimiento");

    fechaNacimientoInput.addEventListener("focus", function () {
        mensajeErrorFechaNacimiento.style.display = "none";
    });

    fechaNacimientoInput.addEventListener("blur", function () {
        var fechaSeleccionada = new Date(fechaNacimientoInput.value);
        var fechaHoy = new Date();
        fechaHoy.setFullYear(fechaHoy.getFullYear() - 15); // Restar 15 años

        if (fechaSeleccionada > fechaHoy) {
            mensajeErrorFechaNacimiento.style.display = "block";
        }
    });

    var formulario = document.querySelector("form");
    formulario.addEventListener("submit", function (event) {
        var fechaSeleccionada = new Date(fechaNacimientoInput.value);
        var fechaHoy = new Date();
        fechaHoy.setFullYear(fechaHoy.getFullYear() - 15); // Restar 15 años

        if (fechaSeleccionada > fechaHoy) {
            mensajeErrorFechaNacimiento.style.display = "block";
            fechaNacimientoInput.focus();
            event.preventDefault(); // Detiene el envío del formulario si no pasa la validación
        }
    });
});
