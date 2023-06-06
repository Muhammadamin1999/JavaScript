class Animal {
    makeSound() {
      console.log('Animal makes a sound');
    }
  }
  
  class Dog extends Animal {
    makeSound() {
      console.log('Dog barks');
    }
  }
  
  class Cat extends Animal {
    makeSound() {
      console.log('Cat meows');
    }
  }
  
  let animal = new Animal();
  let dog = new Dog();
  let cat = new Cat();
  
  animal.makeSound(); // Output: "Animal makes a sound"
  dog.makeSound(); // Output: "Dog barks"
  cat.makeSound(); // Output: "Cat meows"
  