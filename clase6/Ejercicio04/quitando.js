// localStorage.removeItem("info");
console.log("holaaaaaaaaaaa");

if (!localStorage.getItem("info")) {
  localStorage.setItem("info", JSON.stringify(remeras));
  console.log(remeras);
  console.log("se guardó");
} else {
  const recuperado = JSON.parse(localStorage.getItem("info"));
  console.log(recuperado);
  console.log("se recuperó");
}

// Mostrar tabla al cargar la página
window.onload = mostrarRemeras;

function mostrarRemeras() {
  const data = JSON.parse(localStorage.getItem("info"));
  if (!data) {
    console.log("No hay datos");
    return;
  }

  let tabla = `
    <table border="1">
      <tr>
        <th>ID</th><th>Slogan</th><th>Size</th><th>Price</th><th>Color</th>
        <th>Fabricante</th><th>País</th><th>Ciudad</th><th>Logo</th><th>Eliminar</th>
      </tr>
      ${data.map(r => `
        <tr>
          <td>${r.id}</td>
          <td>${r.slogan}</td>
          <td>${r.size}</td>
          <td>${r.price}</td>
          <td>${r.color}</td>
          <td>${r.manofacturer.name}</td>
          <td>${r.manofacturer.location.country}</td>
          <td>${r.manofacturer.location.city}</td>
          <td><img src="${r.manofacturer.logo}" alt="logo ${r.manofacturer.name}" width="60"></td>
          <td><a style="cursor: pointer;" class="eliminar" data-id="${r.id}">Eliminar</a></td>
        </tr>
      `).join("")}
    </table>
  `;

  document.getElementById("remeras").innerHTML = tabla;

  // Agregar manejadores a los enlaces "Eliminar"
  const eliminarLinks = document.querySelectorAll(".eliminar");
  eliminarLinks.forEach(link => {
    link.addEventListener("click", function () {
      const idEliminar = this.getAttribute("data-id");
      const confirmacion = confirm("¿Estás seguro de que deseas eliminar esta remera?");
      if (confirmacion) {
        eliminarRemera(idEliminar);
      }
    });
  });
}

function agregarRemeras() {
  let id = document.querySelector("#inputId").value;
  let slogan = document.querySelector("#inputSlogan").value;
  let size = document.querySelector("#inputSize").value;
  let price = document.querySelector("#inputPrice").value;
  let color = document.querySelector("#inputColor").value;
  let fabricante = document.querySelector("#inputFabricante").value;
  let pais = document.querySelector("#inputPais").value;
  let ciudad = document.querySelector("#inputCiudad").value;
  let logo = "https://robohash.org/authicperferendis.bmp?size=50x50&set=set1";

  let nuevaRemera = {
    id: id,
    slogan: slogan,
    size: size,
    price: price,
    color: color,
    manofacturer: {
      name: fabricante,
      location: {
        country: pais,
        city: ciudad
      },
      logo: logo
    }
  };

  let remeras = JSON.parse(localStorage.getItem("info"));
  remeras.push(nuevaRemera);
  localStorage.setItem("info", JSON.stringify(remeras));

  // Limpiar los campos
  document.querySelector("#inputId").value = "";
  document.querySelector("#inputSlogan").value = "";
  document.querySelector("#inputSize").value = "";
  document.querySelector("#inputPrice").value = "";
  document.querySelector("#inputFabricante").value = "";
  document.querySelector("#inputPais").value = "";
  document.querySelector("#inputCiudad").value = "";

  mostrarRemeras();
}

function eliminarRemera(id) {
  let remeras = JSON.parse(localStorage.getItem("info"));
  remeras = remeras.filter(r => r.id != id);
  localStorage.setItem("info", JSON.stringify(remeras));
  mostrarRemeras();
}
