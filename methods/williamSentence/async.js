// //challange 1
// function sayHowdy(){
//     console.log("howdy");
// }

// function testMe(){
//     setTimeout(sayHowdy,0);
//     console.log('Partnah');
// }
// testMe();

// //challange 2

// function delayedGreet(){
//     setTimeout(()=>{
//         console.log("welcome")
//     }, 3000);
// }
// delayedGreet();

// challange 3

// function helloGoodbye(){
//     setTimeout(()=>{
//         console.log("goodbye");
//     }, 2000)
//     console.log("hello");
// }
// helloGoodbye();

// challange 4

// function brokenRecord(){
    
//         setTimeout(()=>{
//             console.log("hello again")
//         },1000)
    
// }
// brokenRecord();

// challange 5

function limitedRepeat(){
   let count = 0;
   let id = setInterval(()=>{
    console.log("hi");
    count++;
    if(count >= 5){
       clearInterval(id);
    }
   },1000);

   
}

limitedRepeat();