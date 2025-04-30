const datosIniciales = [
    { id: 1, nombre: "Juan" },
    { id: 2, nombre: "Ana" },
    { id: 3, nombre: "Carlos"}
  ];

let jotasones;
let confirmacion;

if (!localStorage.getItem("datos")) {
    localStorage.setItem("datos",JSON.stringify(datosIniciales));
    console.log("Se guardaron los datos correctamente");
    // alert("se guardaron correctamente los datos");
    jotasones = JSON.stringify(datosIniciales); 
}
else{
    confirmacion = confirm("desea reiniciar el contenido?")
    if (confirmacion) {
        localStorage.removeItem("datos");
        console.log("se reinicio el contenido")
    }
    else{
        console.log("NO SE REINICIO")
        jotasones = localStorage.getItem("datos");
        console.log("se recupero correctamente");
        // alert("se recupero correctamente");
    }
}
if (jotasones) {
    const datos = JSON.parse(jotasones);
    console.log(datos[0].nombre);
}
else{
    console.log("no le pusiste nada")
}

