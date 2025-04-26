function mostrar(numero, cadena = "valor predeterminado")
{
    if (typeof numero != "number") {
        console.log("Introduzca un numero en el primer parametro");
        return;
    }

    if (cadena == "valor predeterminado") {
        let invertido = numero.toString().split('').reverse().join('');
        console.log(invertido);
    }
    else
    {
        for (let index = 0; index < numero; index++)
            console.log(cadena)
    }                   
}
mostrar(53,"hola")
