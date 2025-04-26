function esPalindromo(cadena) {
    // Normalizar: pasar a minúsculas y quitar espacios
    let textoLimpio = cadena.toLowerCase().replace(/[\s]/g, "");
    
    // Invertir la cadena
    let invertido = textoLimpio.split("").reverse().join("");

    // Comparar original con invertido
    if (textoLimpio === invertido) {
        console.log("Es un palíndromo.");
    } else {
        console.log("No es un palíndromo.");
    }
}
esPalindromo("La ruta nos aporto otro paso natural"); // ✅ palíndromo
esPalindromo("Hola mundo"); // ❌ no es palíndromo
