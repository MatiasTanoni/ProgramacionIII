let currentPage = 1;
const usersPerPage = 6;
let totalPages = 2;

document.addEventListener("DOMContentLoaded", () => {
    listarUsuarios(currentPage);

    botones();
});

async function listarUsuarios(page) {
    try {
        const opciones = {
            method: "GET",
        };

        let res = await fetch(`${API_URL}users?page=${page}&per_page=${usersPerPage}`, opciones);

        if (!res.ok) {
            throw new Error('Error al obtener los datos');
        }

        let data = await res.json();
        console.log(data);

        totalPages = data.total_pages;

        document.querySelector("#listado").innerHTML = armarListadoHTML(data);
        

        document.getElementById('prevBtn').disabled = currentPage <= 1;
        document.getElementById('nextBtn').disabled = currentPage >= totalPages;

    } catch (err) {
        console.error('Error:', err);
        document.querySelector("#listado").innerHTML = 'No se pudieron cargar los usuarios.';
    }
}

function armarListadoHTML(params) {
    let html = `
        <div class="contenedor-form-tabla">
        
            <!-- Tabla de usuarios -->
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Correo</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Avatar</th>
                    </tr>
                </thead>
                <tbody>
    `;

    if (params.data && Array.isArray(params.data)) {
        params.data.forEach(usuario => {
            html += `
                <tr>
                    <td><a href="#" onclick='mostrarInfoUsuario(${JSON.stringify(usuario)})'>${usuario.id}</a></td>
                    <td>${usuario.email}</td>
                    <td>${usuario.first_name}</td>
                    <td>${usuario.last_name}</td>
                    <td><img src="${usuario.avatar}" width="50"/></td>
                </tr>
            `;
        });
    } else {
        html += `<tr><td colspan="5">No hay usuarios disponibles</td></tr>`;
    }

    html += `
                </tbody>
            </table>

            <!-- Formulario sin estilos -->
            <form action="/enviar" method="POST">
                <input type="text" name="nombre" placeholder="Nombre" required>
                <input type="email" name="correo" placeholder="Correo" required>
                <input type="password" name="contrasena" placeholder="Contraseña" required>
                <button type="submit">Enviar</button>
            </form>

        </div>
    `;

    return html;
}

function mostrarInfoUsuario(usuario) {

    const infoDiv = document.getElementById("info-usuario");
    infoDiv.innerHTML = `
        <h3>Información del Usuario</h3>
        <img src="${usuario.avatar}" width="100" alt="Avatar del usuario"/>
        <p>ID: ${usuario.id}</p>
        <p>Email: ${usuario.email}</p>
        <p>Nombre: ${usuario.first_name}</p>
        <p>Apellido: ${usuario.last_name}</p>
    `;
}

function botones(){
    document.getElementById('prevBtn').addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            listarUsuarios(currentPage);
        }
    });

    document.getElementById('nextBtn').addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            listarUsuarios(currentPage);
        }
    });
}
