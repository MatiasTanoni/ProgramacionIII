function mostrarNombreApellido(nombre , apellido)
{
    let apellidoEnMinusculas = apellido.toLowerCase();

    let nombrePrimeraLetraMayuscula = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();

    console.log(nombrePrimeraLetraMayuscula, apellidoEnMinusculas);
}

mostrarNombreApellido("matiAs","TANoni");

