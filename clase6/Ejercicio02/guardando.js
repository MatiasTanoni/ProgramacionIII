
if (!localStorage.getItem("info")) {
    localStorage.setItem("info",JSON.stringify(remeras));
    console.log(remeras);
    console.log("se guardo");
    // alert("se guardo");
    
}else{
    const recuperado = JSON.parse(localStorage.getItem("info"));
    console.log(recuperado);
    console.log("se recupero");
    // alert("se recupero");
}

// Mostrar tabla al cargar la página
window.onload = mostrarRemeras;

function mostrarRemeras() {
    const data = JSON.parse(localStorage.getItem("info"));
    if (!data){
    console.log("hola");
    }
    let tabla = `
    <table border="1">
      <tr>
        <th>ID</th><th>Slogan</th><th>Size</th><th>Price</th><th>Color</th>
        <th>Fabricante</th><th>País</th><th>Ciudad</th><th>Logo</th>
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
        </tr>
      `).join("")}
    </table>`;
    

    document.getElementById("remeras").innerHTML = tabla;
}