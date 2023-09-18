class Animal {
    constructor(name){
        this.name = name;

    }

    makeSound(){
        console.log("generiic animal sound");
    }
}

class Dog extends Animal{
    constructor(name){
        super(name);
    }
    makeSound(){
        super.makeSound();
        console.log("Woof! Woof!");
    }
}

const a1 = new Animal("Dom");
a1.makeSound();
const a2 = new Dog("Jeff");
a2.makeSound();