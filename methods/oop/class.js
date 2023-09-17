// if we need to create one more than object

class User{
    constructor(email, name){
        this.email = email;
        this.name = name;
        this.score = 0; 
    }
    login(){
        console.log(this.email, "just logged in");
        return this;
    }
    logout(){
        console.log(this.email, "just logged out");
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, "score is now", this.score);
        return this;
    }

}

class Admin extends User{
       deleteUser(user){
            users = users.filter(u => {
                return u.email != user.email;
            });
       }
}

var userOne = new User('ryu@gmail.com',"ryu");
var usertwo = new User('yoshi@gmail.com', 'Yoshi');
var admin = new Admin("shaun@gamil.com", "shaun");

var users = [userOne, usertwo];
admin.deleteUser(usertwo);
console.log(userOne)

// userOne.login();
// usertwo.logout();
// console.log(userOne);
// console.log(usertwo);


// the new keyword
// creates a new empty obj {}
// sets the value of this to be the new empty obj
// calls the constructor method

//userOne.login().updateScore().updateScore().logout(); // method chaining


// class inheritance

