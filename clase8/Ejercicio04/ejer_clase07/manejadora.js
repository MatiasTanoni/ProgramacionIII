let currentPage = 1;
const usersPerPage = 6;
let totalPages = 2;

document.addEventListener("DOMContentLoaded", () => {
    listarUsuarios(currentPage);

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
                    <td>${usuario.id}</td>
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

    html += `</tbody></table>`;
    return html;
}