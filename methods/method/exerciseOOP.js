// challange 1
function makePerson(name, age){
    return{
        name: name,
        age: age,
    }
}
const vicky = makePerson('Vicky', 24);

console.log(vicky.name);
console.log(vicky.age);
// challange 2

const personStore = {
    greet: function(){
        console.log("hello")
    }
}
personStore.greet();
