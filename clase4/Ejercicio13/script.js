function obtenerSumaMaxima(arr) {
    let sumaActual = 0;
    let sumaMaxima = 0;

    for (let i = 0; i < arr.length; i++) {
        sumaActual += arr[i];
        if (sumaActual < 0) {
            sumaActual = 0;
        }
        if (sumaActual > sumaMaxima) {
            sumaMaxima = sumaActual;
        }
    }

    return sumaMaxima;
}

console.log(obtenerSumaMaxima([-1, 2, 3, -9]));  
console.log(obtenerSumaMaxima([2, -1, 2, 3, -9]));
console.log(obtenerSumaMaxima([-1, -2, -3]));     

