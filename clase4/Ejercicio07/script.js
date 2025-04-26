function truncate(cadena, longitud) 
{
    if (cadena.length > longitud) 
    {
        // Reservamos un lugar para el "…" (1 carácter)
        return cadena.slice(0, longitud - 1) + "…";
    } 
    else 
    {
        return cadena;
    }
}
console.log(truncate("Hola mundo", 8));  // "Hola mu…"
console.log(truncate("Hola", 8));        // "Hola"
