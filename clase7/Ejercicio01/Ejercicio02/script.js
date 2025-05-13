
document.getElementById('userForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que se recargue la página

    // Obtener los datos del formulario
    const nombre = e.target.nombre.value;
    const trabajo = e.target.trabajo.value;

    // Crear objeto con los datos
    const datos = {
    name: nombre,
    job: trabajo
    };

    // Crear solicitud AJAX
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

    xhr.onload = function () {
    if (xhr.status === 201) {
        const respuesta = JSON.parse(xhr.responseText);
        document.getElementById('respuesta').textContent = JSON.stringify(respuesta);
    } else {
        document.getElementById('respuesta').textContent = 'Error: ' + xhr.status;
    }
    };

    xhr.onerror = function () {
    document.getElementById('respuesta').textContent = 'Error de red o conexión';
    };

    xhr.send(JSON.stringify(datos)); // Enviar los datos como JSON
});