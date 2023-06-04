// var x = 40
// x++ //40
 
// console.log(x) //41

// ++x   //42

// console.log(x)  //42

// sabab x++ paytida o'zgarmay functionga o'xshab uni chaqirganda o'zgaryapti

// var x = "5"
// x = x + 1
// console.log(x)

// var y = "5"
//  ++y
//  console.log(y)

// var x = -0
// function formatTrend(x){
//     var direction = (x < 0 || Object.is(x, -0)) ? "1" : "0"
//     return `${direction} ${Math.abs(x)}`

// }

// console.log(formatTrend(-3))
// console.log(formatTrend(3))
// var x
// console.log(x)

// console.log(5==="5")
// implicit binding

// var workshop = {
//     teacher: "Kyle",
//     ask(question){
//         console.log(this.teacher, question)
//     }

// }
// workshop.ask("what is impicit nbinding")
 //class
//  class workshop{
//     constructor(teacher){
//         this.teacher = teacher
//     }
//     ask(question){
//         console.log(this.teacher, question)
//     }
//  }

//  var deepJs = new workshop("Kyle")
//  var reactJs = new workshop("Suzy")

//  deepJs.ask("Is 'class' a class?")
//  reactJs.ask("is class ok?")

// inheritance
class workshop{
    constructor(teacher){
        this.teacher = teacher

    }
    ask(question){
        console.log(this.teacher, question)
    }
}
class anotherWorkshop extends workshop{
    speakUp(msg){
        this.ask(msg)
    }
}
var JSrecentParts = new anotherWorkshop("Kyle")
JSrecentParts.speakUp("checking....")