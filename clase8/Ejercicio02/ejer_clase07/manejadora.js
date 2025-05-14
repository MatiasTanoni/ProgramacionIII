document.addEventListener("DOMContentLoaded", () => {

    listarUsuarios();

});

async function listarUsuarios() {

    try {
        
        const opciones = {
            method: "GET",
            headers: { "x-api-key": "reqres-free-v1" },
        };

        let res = await manejadorFetch(API_URL + `users`, opciones);

        let resJSON = await res.json();
         
        console.log(resJSON);

        document.querySelector("#listado").innerHTML = armarListadoHTML(resJSON);



    } catch (err) {

        alert(err);
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

    html += `</tbody></table>`;
    return html;
}
