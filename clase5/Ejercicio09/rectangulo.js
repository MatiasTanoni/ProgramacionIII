class Rectangulo extends FiguraGeometrica{

    _ladoUno;
    _ladoDos;

    constructor(lado1,lado2){
        super();
        this._ladoUno = lado1;
        this._ladoDos = lado2;
        this.calcularDatos();
    }

    calcularDatos() {
        const perimetro = 2 * (this._ladoUno + this._ladoDos);
        const superficie = this._ladoUno * this._ladoDos;
        super.calcularDatos(perimetro, superficie); // usar el del padre
    }

    dibujar() {
        let dibujo = "";
        for (let i = 0; i < this._ladoDos; i++) {
            dibujo += "*".repeat(this._ladoUno) + "\n";
        }
        return dibujo;
    }

    toString(){
        return `Rectángulo:\nLado 1: ${this._ladoUno}, Lado 2: ${this._ladoDos}\n` +
        super.toString() + "\nDibujo:\n" + this.dibujar();
    }

}