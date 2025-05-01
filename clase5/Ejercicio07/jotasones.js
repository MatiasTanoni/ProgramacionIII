const datosIniciales = [
    { id: 1, nombre: "Juan" },
    { id: 2, nombre: "Ana" },
    { id: 3, nombre: "Carlos"}
  ];

let jotasones;
let confirmacion;
let pregunta;

if (!localStorage.getItem("datos")) 
{

    preguntarId(datosIniciales);

    localStorage.setItem("datos",JSON.stringify(datosIniciales));
    jotasones = JSON.stringify(datosIniciales); 
    const datos = JSON.parse(jotasones);
    console.log(datos);
    console.log("Se guardaron los datos correctamente");
    alert("se guardaron correctamente los datos");
}

confirmacion = confirm("desea reiniciar el contenido?")

if (confirmacion) {
    localStorage.removeItem("datos");
    console.log("se reinicio el contenido")
}
else{

    console.log("NO SE REINICIO")
    preguntarId(datosIniciales);
    jotasones = localStorage.getItem("datos");
    console.log("se recupero correctamente");
    alert("se recupero correctamente");
    const datos = JSON.parse(jotasones);
    console.log(datos);
}

function preguntarId(array)
{
    pregunta = prompt("que id desea eleminar 1 o 2 o 3?")

    switch (pregunta) {
        case "1":
            alert("se elimino el id 1")
            array.pop(0)
            break;
        case "2":
            alert("se elimino el id 2")
            array.pop(1)
            break;
        case "3":
            alert("se elimino el id 3")
            array.pop(2)
            break;
        default:
            break;
    }
}