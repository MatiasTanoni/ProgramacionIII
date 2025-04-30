// Datos de ejemplo (puedes editar según lo que quieras guardar)
const datosIniciales = [
  { id: 1, nombre: "Juan" },
  { id: 2, nombre: "Ana" },
  { id: 3, nombre: "Carlos" }
];

// Verificamos si ya existen datos guardados
let jotasones = localStorage.getItem("jotasones");

if (!jotasones) {
  // Si no existe, guardamos los datos iniciales
  localStorage.setItem("jotasones", JSON.stringify(datosIniciales));
  console.log("Se guardaron los datos iniciales en localStorage.");
  alert("Se guardaron los datos iniciales.");
  jotasones = JSON.stringify(datosIniciales);
} else {
  console.log("Se recuperaron los datos del localStorage.");
  alert("Se recuperaron los datos.");
}

// Mostramos siempre el contenido actual
const jotasonesArray = JSON.parse(jotasones);
console.log("Contenido actual:", jotasonesArray);

// Agregamos un nuevo objeto con ID incrementado
const ultimo = jotasonesArray[jotasonesArray.length - 1];
const nuevoId = ultimo.id + 1;
const nuevoElemento = { id: nuevoId, nombre: "Nuevo " + nuevoId };

jotasonesArray.push(nuevoElemento);

// Guardamos la nueva versión
localStorage.setItem("jotasones", JSON.stringify(jotasonesArray));

alert("Se agregó un nuevo elemento con id: " + nuevoId);
console.log("Nuevo contenido actualizado:", jotasonesArray);

  