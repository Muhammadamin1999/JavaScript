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

// CHALLENGE 10
function defineFirstArg(func, arg) {

}

// /*** Uncomment these to check your work! ***/
// const subtract = function(big, small) { return big - small; };
// const subFrom20 = defineFirstArg(subtract, 20);
// console.log(subFrom20(5)); // => should log 15


// CHALLENGE 11
function dateStamp(func) {

}

// /*** Uncomment these to check your work! ***/
// const stampedMultBy2 = dateStamp(n => n * 2);
// console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
// console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }


// CHALLENGE 12
function censor() {

}

// /*** Uncomment these to check your work! ***/
// const changeScene = censor();
// changeScene('dogs', 'cats');
// changeScene('quick', 'slow');
// console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'


// CHALLENGE 13
function createSecretHolder(secret) {

}

// /*** Uncomment these to check your work! ***/
// obj = createSecretHolder(5)
// obj.getSecret() // => returns 5
// obj.setSecret(2)
// obj.getSecret() // => returns 2


// CHALLENGE 14
function callTimes() {

}

// /*** Uncomment these to check your work! ***/
// let myNewFunc1 = callTimes();
// let myNewFunc2 = callTimes();
// myNewFunc1(); // => 1
// myNewFunc1(); // => 2
// myNewFunc2(); // => 1
// myNewFunc2(); // => 2


// CHALLENGE 15
function roulette(num) {

}

// /*** Uncomment these to check your work! ***/
// const play = roulette(3);
// console.log(play()); // => should log 'spin'
// console.log(play()); // => should log 'spin'
// console.log(play()); // => should log 'win'
// console.log(play()); // => should log 'pick a number to play again'
// console.log(play()); // => should log 'pick a number to play again'


// CHALLENGE 16
function average() {

}

// /*** Uncomment these to check your work! ***/
// const avgSoFar = average();
// console.log(avgSoFar()); // => should log 0
// console.log(avgSoFar(4)); // => should log 4
// console.log(avgSoFar(8)); // => should log 6
// console.log(avgSoFar()); // => should log 6
// console.log(avgSoFar(12)); // => should log 8
// console.log(avgSoFar()); // => should log 8


// CHALLENGE 17
function makeFuncTester(arrOfTests) {
  
}

// /*** Uncomment these to check your work! ***/
// const capLastTestCases = [];
// capLastTestCases.push(['hello', 'hellO']);
// capLastTestCases.push(['goodbye', 'goodbyE']);
// capLastTestCases.push(['howdy', 'howdY']);
// const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
// const capLastAttempt1 = str => str.toUpperCase();
// const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
// console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
// console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true

/* CHALLENGE 1 */

function sayHowdy() {
   console.log('Howdy');
 }
 
 function testMe() {
   setTimeout(sayHowdy, 0);
   console.log('Partnah');
 }
 // After thinking it through, uncomment the following line to check your guess!
 // testMe(); // what order should these log out? Howdy or Partnah first?
 
 
 /* CHALLENGE 2 */
 
 function delayedGreet() {
   setTimeout(() => {
     console.log("welcome")
   }, 3000)
 }
 // Uncomment the following line to check your work!
 // delayedGreet(); // should log (after 3 seconds): welcome
 
 
 /* CHALLENGE 3 */
 
 function helloGoodbye() {
   console.log("hello");
   setTimeout(() => {
     console.log("goodbye")
   }, 2000)
 }