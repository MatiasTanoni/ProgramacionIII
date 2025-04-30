class FiguraGeometrica{

    #perimetro;
    #superficie;

    constructor(){

    }

    calcularDatos(perimetro, superficie){
        this.#perimetro = perimetro;
        this.#superficie =  superficie;
    }

    dibujar(){
        return "";
    }

    toString() {
        return "el perimetro es: " + this.#perimetro +
        " la superficie es: " + this.#superficie;
    }
}