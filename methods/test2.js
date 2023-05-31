// let datas = "re"
// function notpure(datas){
//     return datas==='re'?Math.random():5
// }

// console.log(notpure(datas))
// always returns same value each time called
// zero side effect

// function recursive(n){
//      if(n === 5) return 0
//      //n++
//     console.log(n)
//     return recursive(n+1)
// }
// recursive(n)
// let cart = [
//     { name: 'Apple', category: 'Fruit', quantity: 10, price: 0.5 },
//     { name: 'Orange', category: 'Fruit', quantity: 5, price: 0.8 },
//     { name: 'Broccoli', category: 'Vegetable', quantity: 2, price: 1.5 },
//     { name: 'Carrot', category: 'Vegetable', quantity: 8, price: 0.2 },
//     { name: 'Chicken', category: 'Meat', quantity: 1, price: 10 }
//   ];

//   const filtered = cart.filter((x)=> x.category === 'Fruit').reduce((accum,elem)=>accum + elem.price)
  
//   console.log(total)

// function outerFunction(){

//     console.log("excuition")
//     let  outer = "outer data"
//     function innerFunction(){
//         console.log(outer)
//     }
//     return innerFunction()
// }


