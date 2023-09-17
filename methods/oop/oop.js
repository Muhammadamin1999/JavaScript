// object literals
// creating object

var userOne = {
    email: 'ryu@gmail.com',
    name: 'Ryu',
    login(){
        console.log(this.name,"has logged in"); // this refers to obj 
    },
    logout(){
        console.log(this.email, "logged out");
    }

}

// console.log(userOne.name);
// userOne.login()
// we can access to obj properties via .

// userOne.name = 'Yoshi';
// console.log(userOne.name);

// we can also access via []

// userOne["email"] = "mario@gmail.com";

// add on properties and methods
userOne.age = 25;
console.log(userOne.age);







