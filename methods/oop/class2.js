class Rectangle{
    constructor(_width, _height, _color){
        // setup your obj, it runs when obj is created
        // when i use this it means, the objs are created by this class

        this.width = _width;
        this.height = _height;
        this.color = _color;
    }
    getArea(){
        return this.width * this.height;
    }
    printDescription(){
        console.log(`i am a rectangle of ${this.width} x ${this.height}`)
    }
}

let myRectangle1 = new Rectangle(3,5,"blue");
let myRectangle2 = new Rectangle(2,4,"red");

console.log(myRectangle1.getArea());
console.log(myRectangle2.getArea());