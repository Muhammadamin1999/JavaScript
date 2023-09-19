//IIFE
// (function(){
//     return x*x
// })

// const todos =[
//     {
//         id:1,
//         name: 'Frank',
//         age:23,
//         isCompleted: true
//     },
//     {
//         id:2,
//         name: "Doll",
//         age:25,
//         isCompleted: false
//     }
// ]
// for(let i=0; i<todos.length; i++){
//     console.log(todos[i].id)
// }

// for(value of todos){
//     console.log(value.id)
// }

// const todoCompeted = todos.filter((todo)=>{
//     return todo.isCompleted === true
// }).map((todo)=> {return todo.name})

// console.log(todoCompeted)

// const x = 9;

// const color = x > 10 ?"red" : "blue";

// switch(color){
//     case("red"): 
//     console.log(`color is ${color}`);
//     break;
//     case("blue"):
//     console.log(`color is ${color}`);
//     break;
//     default:
//         console(`there is no such ${color}`)

// }

// OOP
// function Person(name, surname, dob){
//     this.name = name,
//     this.surname = surname,
//     this.dob = new Date(dob)
//     this.getBirthDate = function(){
//         return this.dob.getFullYear()
//     }
//     this.fullName = function(){
//         return `${this.name} ${this.surname}`
//     }
// }

// prototype
// function Person(name, surname, dob){
//     this.name = name,
//     this.surname = surname,
//     this.dob = new Date(dob)

// }
// Person.prototype.getBirthDate = function(){
//     return this.dob.getFullYear()
// }
// Person.prototype.fullName = function(){
//     return `${this.name} ${this.surname}`
// }

// class
class Person{
   constructor(name, surname, dob){
    this.name = name,
    this.surname = surname,
    this.dob = new Date(dob)
   }
    getBirthDate = function(){
        return this.dob.getFullYear()
    }
    fullName = function(){
        return `${this.name} ${this.surname}`
}
}
const person1 = new Person("Jamil", "Akbar", "3-6-1998")
// console.log(person1.dob.getDate())
console.log(person1.fullName())