class Person{
    constructor(_name, _age){
        this.name = _name;
        this.age = _age;
    }
    describe(){
        console.log(`i am ${this.name} and I am ${this.age}`);
    }
}

class Programmer extends Person{
       constructor(_name, _age, _yearsOfExperience){
        super(_name, _age);

        // custom behaviour

       }

       code(){
        console.log(`${this.name} is programmer`);
       }
}
const programmers = [
    new Programmer("Dom", 45, 12),
    new Programmer("Jeck", 45, 14)
]

function developerSoftware(programmers){
         for(let programmer in programmers){
            programmer.code();
         }
}