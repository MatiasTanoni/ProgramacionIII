var jotasones = [
    { "id": 1, "valor_1": 1, "valor_2": 1 },
    { "id": 2, "valor_1": 2, "valor_2": 2 },
    { "id": 3, "valor_1": 3, "valor_2": 3 },
    { "id": 4, "valor_1": 4, "valor_2": 4 },
];

let info;
let parsedInfo;

if (!localStorage.getItem("info")) {
    localStorage.setItem("info", JSON.stringify(jotasones));
    console.log("Se guardó:");
    // alert("Se guardó");
    console.log(jotasones);
} else {
    info = localStorage.getItem("info");
    parsedInfo = JSON.parse(info);
    console.log("Se recuperó");
    // alert("Se recuperó");
    console.log(parsedInfo);
}
// Función para mostrar los datos en una tabla
function mostrarJotasones() {
    let data = localStorage.getItem("info");
    if (!data) {
        alert("No hay datos en localStorage.");
        return;
    }

    let lista = JSON.parse(data);

    let html = "<table border='1'><th>ID</th><th>Valor 1</th><th>Valor 2</th>";
    for (let item of lista) {
        html += `<tr>
                    <td>${item.id}</td>
                    <td>${item.valor_1}</td>
                    <td>${item.valor_2}</td>
                 </tr>`;
    }
    html += "</table>";

    document.getElementById("resultado").innerHTML = html;
}