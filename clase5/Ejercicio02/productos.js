const producto = [
    {
        "codigoDeBarra": "jhjh", 
        "nombre": "chocolate", 
        "precio": 2200, 
        "fechaDeVencimiento": "10-11-2050",
    },
    {
        "codigoDeBarra": "aaa", 
        "nombre": "alfajor", 
        "precio": 3000, 
        "fechaDeVencimiento": "3-1-2252",
    },
    {
        "codigoDeBarra": "bbb", 
        "nombre": "leche", 
        "precio": 1001, 
        "fechaDeVencimiento": "24-6-2026",
    }
]

producto.forEach((p, index) => {
    //console.log(p.codigoDeBarra + " nombre producto numero: "+ index);
    // console.log("el nombre es: " + p.nombre);
    // console.log("el precio es: " + p.precio);
    // console.log("la fecha de vencimiento es: " + p.fechaDeVencimiento)
});