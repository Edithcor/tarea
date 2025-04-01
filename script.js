function validarUsuario() {
    var usuario = document.getElementById("username").value;
    var clave = document.getElementById("password").value;
    var mensaje = document.getElementById("mensaje");
    var contenido = document.getElementById("contenido");

    if (usuario === "jonathan" && clave === "1234") {
        mensaje.style.color = "green";
        mensaje.innerHTML = "✅ Datos correctos. Redirigiendo...";
        setTimeout(() => {
            document.querySelector(".login-container").style.display = "none";
            contenido.classList.remove("hidden");
        }, 1500);
    } else {
        mensaje.style.color = "red";
        mensaje.innerHTML = "❌ Usuario o contraseña incorrectos.";
    }
}