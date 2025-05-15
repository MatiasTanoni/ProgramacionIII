const API_URL = 'https://fakestoreapi.com/products';

document.addEventListener("DOMContentLoaded", () => {
    listarProductos();
});

async function listarProductos() {
    try {
        let res = await fetch(API_URL);

        if (!res.ok) {
            throw new Error('Error al obtener los productos');
        }

        let data = await res.json();
        console.log(data);

        document.querySelector("#listado").innerHTML = mostrarListadoHTML(data);
    }
    catch (err) {
        console.error('Error:', err);
        document.querySelector("#listado").innerHTML = 'No se pudieron cargar los productos.';
    }
}

function mostrarListadoHTML(productos) {
    let html = '<div class="container"><div class="row justify-content-center">';

    if (Array.isArray(productos)) {
        productos.forEach(producto => {
            html += `
                <div class="col-6 col-md-4 col-lg-3 col-xxl-2 mb-4 d-flex">
                    <div class="card border border-primary w-100" style="min-height: 550px;">
                        <img src="${producto.image}" class="card-img-top p-3" style="height: 200px; object-fit: contain;">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${producto.title.substring(0, 20)}</h5>
                            <p class="card-text">Precio: $${producto.price}</p>
                            <p class="card-text">${producto.description.substring(0, 100)}...</p>
                            <p class="card-text">Categoría: ${producto.category}</p>
                            <p class="card-text mt-auto">Rating: ⭐ ${producto.rating.rate} (${producto.rating.count} reviews)</p>
                        </div>
                    </div>
                </div>
            `;
        });

        html += '</div></div>'; // Cierra row y container
    } else {
        html = `<p>No hay productos disponibles</p>`;
    }

    return html;
}
