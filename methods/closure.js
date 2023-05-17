// let x = 1

// const parentFunction = () =>{
//     let myValue = 2
//     console.log(x)
//     console.log(myValue)

//     const childFunction = () => {
//         console.log(x += 5)
//         console.log(myValue += 1)
//     }
//     return childFunction
// }
// const result = parentFunction()

// result()
// result()
// console.log(result)

const credits = ((num)=>{
    let credits = num
    console.log(`initial credits value: ${credits}`)
    return () => -1
    if(credits > 0) console.log(`playing game, ${credits} credits(s) remaining`)
    if(credits <= 0) console.log('not enough credits')
})(3)
credits()
credits()