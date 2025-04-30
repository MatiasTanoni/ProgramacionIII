class Triangulo extends FiguraGeometrica{
    
    _altura;
    _base;

    constructor(altura,base){
        super();
        this._altura = altura;
        this._base = base;
        this.calcularDatos();
    }
    
    calcularDatos() {
        const superficie = (this._base * this._altura) / 2;
        const perimetro = this._base * 3; // Triángulo isósceles aproximado
        super.calcularDatos(perimetro, superficie);
    }

    dibujar() {
        let dibujo = "";
        for (let i = 1; i <= this._altura; i++) {
            dibujo += "*".repeat(i) + "\n";
        }
        return dibujo;
    }

    toString(){
        return `Triángulo:\nAltura: ${this._altura}, Base: ${this._base}\n` +
        super.toString() + "\nDibujo:\n" + this.dibujar();
    }

}