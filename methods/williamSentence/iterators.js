// challange 1

//A

// function iteratorFunction(arr){
//     let sum = 0;
//    for(let i=0; i < arr.length; i++ ){
//       sum += arr[i];
//    }
//    return sum;
// }

// const arr = [1,2,3,4];
// const ans = iteratorFunction(arr);

// console.log(ans)

// // B
// const array = [1,2,3,4];
// function EachElem(arr){
//     let count = 0;
//     return function(){
//         count++;
//         return arr[count-1];
//     }
// }

// const myIterator = EachElem(array)
// console.log(myIterator());
// console.log(myIterator());

// challange 2

// function nextIterator(arr){
//    let count = 0;
//    const iterator = {
//     next: function(){
          
//           let value = arr[count];
//           count++;
//           return value;
//     }
    
//    }
//    return iterator;
// }

// const array3 = [1,2,3];
// const iteratorWithNext = nextIterator(array3);
// console.log(iteratorWithNext.next());

// challange 3

// function sumArray(arr){
//    let accumlator = 0;
//    let iterator = nextIterator(arr);
//    let next = iterator.next();
//    while(next){
//     accumlator += next;
//     next = iterator.next();
//    }
//    return accumlator;

// }

// const array4 = [1,2,3,4];
// console.log(sumArray(array4));

// challange 4
// function setIterator(set){
//     let setIterator = set.values();
//     const iterator = {
//         next: function(){
//             var next = setIterator.next();
//             return next['value'];
//         }

//     }
//     return iterator;
// }

// challange 5

function indexIterator(arr){
   let index = 0;
   const iterator = {
    next: function(){
        const value = arr[value];
        index++;
        return [index-1, value];
    }
   }
   return iterator;
}


// CHALLENGE 6

function Words(string) {
    this.str = string;
  }
  
  Words.prototype[Symbol.iterator] = function() {
    // YOUR CODE HERE
    let index = 0;
    let strSplit = this.str.split(/\s/);
    return {
      next: function(){
        if(index < strSplit.length){
          const value = strSplit[index];
          index++;
          return {value: value, done: false }
        }else{
          return {done: true}
        }
      }
    }
  }
  
  // Uncomment the lines below to test your work
  const helloWorld = new Words('Hello World');
  for (let word of helloWorld) { console.log(word); } // -> should log 'Hello' and 'World'
  
  // CHALLENGE 7
  
  function valueAndPrevIndex(array){
        let index = 0;
       return {
         sentence: function(){
                 index++;
        let indexName = index;
        if (index - 1 === 0) {
          indexName = "first";
        }
         return(`${array[index]} was found after index ${indexName}`)
           
       }
       }
  }
  
  const returnedSentence = valueAndPrevIndex([4,5,6])
  console.log(returnedSentence.sentence());
  console.log(returnedSentence.sentence());
  console.log(returnedSentence.sentence());
  
  
  //CHALLENGE 8
  
  function* createConversation(string) {
  
    yield setInterval(()=>{
      if(string === "english"){console.log('hello there')}else{
        console.log('gibberish');
      }
    },3000)
  
  }
  
  console.log(createConversation('english').next());
  
  
  
  //CHALLENGE 9
  function waitForVerb(noun) {
     return new Promise((resolve)=>{
       setTimeOut(()=>{
         resolve(noun)
       },3000)
     })
  }
  
  async function f(noun) {
    const result = await waitForVerb('good');
    console.log(result + noun);
  }
  
  f("dog");
