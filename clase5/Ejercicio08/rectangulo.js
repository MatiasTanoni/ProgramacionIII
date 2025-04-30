class Rectangulo{

    _vertice1;
    _vertice2;
    _vertice3;
    _vertice4;
    _area = 5;
    _perimetro = 4;
    _ladoUno = 2;
    _ladoDos = 2;

    constructor(vertice1,vertice3){
        this._vertice1 = vertice1;
        this._vertice3 = vertice3;

        // Construimos vértices 2 y 4 basados en vértice1 y vértice3
        this._vertice2 = new Punto(vertice3.x, vertice1.y);
        this._vertice4 = new Punto(vertice1.x, vertice3.y);

        // Calculamos lados
        this._ladoUno = Math.abs(this._vertice2.x - this._vertice1.x); // base
        this._ladoDos = Math.abs(this._vertice4.y - this._vertice1.y); // altura

        // Calculamos área y perímetro
        this._area = this._ladoUno * this._ladoDos;
        this._perimetro = 2 * (this._ladoUno + this._ladoDos);
    }

    get area(){
        return this._area;
    }

    get perimetro(){
        return this._perimetro;
    }

    toString() {
        return `Rectángulo:
        Vértice 1: (${this._vertice1.x}, ${this._vertice1.y})
        Vértice 2: (${this._vertice2.x}, ${this._vertice2.y})
        Vértice 3: (${this._vertice3.x}, ${this._vertice3.y})
        Vértice 4: (${this._vertice4.x}, ${this._vertice4.y})
        Lado Uno (base): ${this._ladoUno}
        Lado Dos (altura): ${this._ladoDos}
        Área: ${this._area}
        Perímetro: ${this._perimetro}`;
    }
}


const p1 = new Punto(2, 3);
const p3 = new Punto(7, 8);

const rectangulo = new Rectangulo(p1, p3);

console.log(rectangulo.toString());