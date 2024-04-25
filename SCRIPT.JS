function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;

    if (name === "" || email === "" || phone === "" || address === "") {
        alert("Todos los campos son obligatorios.");
        return false;
    }

    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!emailPattern.test(email)) {
        alert("El correo electrónico no es válido.");
        return false;
    }

    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        alert("El teléfono debe tener 10 dígitos.");
        return false;
    }

    alert("Formulario enviado con éxito!");
    return true;
}
