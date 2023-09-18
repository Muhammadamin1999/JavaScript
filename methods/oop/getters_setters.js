class Square{
    constructor(_width){
        this.width = _width;
        this.height = _width;
        this.numOfRequestsForArea = 0;
    }

    get area(){
        this.numOfRequestsForArea++;
        return this.width * this.height;
    }
    set area(area){
        this.width = Math.sqrt(area);
        this.height = Math.sqrt(area);
    }
}

let Square1 = new Square();
Square1.area = 25

console.log(Square1.area);
console.log(Square1.area)
console.log(Square1.area); // no need for area() because it is a property not function

