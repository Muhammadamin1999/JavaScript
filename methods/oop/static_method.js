class Square{
    constructor(_width){
       this.width = _width;
       this.height = _width;
    }

    static equals(a,b){
        return a.width * a.height === b.width * b.height;
    }

    static isValidDimensions( width, height){
        return width === height;
    }
}

let square1 = new Square(8);
let square2 = new Square(3);

console.log(Square.isValidDimensions(6,6));

