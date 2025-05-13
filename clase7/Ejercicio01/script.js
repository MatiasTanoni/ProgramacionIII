function cargarTexto() {
    const xhr = new XMLHttpRequest(); 
    xhr.open('GET', 'user.json', true);

    xhr.onload = function () {
        if (xhr.status === 200) {             
            document.getElementById('resultado').innerHTML = xhr.responseText;
        }
    };

    xhr.onerror = function () {
        console.error('Ocurrió un error con la solicitud AJAX');
    };

    xhr.send();
}
