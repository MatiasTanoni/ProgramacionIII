function funcion(cadena)
{
    if (cadena === cadena.toUpperCase()) {
        console.log("TIENE MAYUSCULAS SOLAMENTE");
    }
    else if (cadena === cadena.toLowerCase()) {
        console.log("tiene minusculas solamente")
    }
    else{
        console.log("tiene las dos")
    }
}
funcion("hhH")