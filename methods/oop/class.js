// if we need to create one more than object

class User{
    constructor(email, name){
        this.email = email;
        this.name = name;
    }
    login(){
        console.log(this.email, "just logged in");
    }
    logout(){
        console.log(this.email, "just logged out");
    }
}
var userOne = new User('ryu@gmail.com',"ryu");
var usertwo = new User('yoshi@gmail.com', 'Yoshi');

// userOne.login();
// usertwo.logout();
// console.log(userOne);
// console.log(usertwo);


// the new keyword
// creates a new empty obj {}
// sets the value of this to be the new empty obj
// calls the constructor method

// method chaining


