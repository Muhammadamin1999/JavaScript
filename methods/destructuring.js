// function data(){
//     return [1,2,3,4,5]
// }
// var tmp = data()
// var first = tmp[0]
// var second = tmp[1]
// var third = tmp[2]
// var fourth = tmp.slice(3)

// function data(){
//     return [1,2,3,4,5]
// }
// var [
//     first,
//     second,
//     third,
//     ...fourth
// ] = data()

// function data(){
//     return [1,2,[3,4],5]
// }
// var tmp = data() || []
// var first = tmp[0]
// var tmp2 = tmp[1]
// var second = tmp2[0]
// var third = tmp2[1]
// var fourth = tmp[2]

// function data(){
//     return [1,2,[3,4],5]
// }
// var tmp
// var[
//     first,
//     [
//         second,
//         third
//     ],
//     fourth
// ] = tmp = data() || []

// obj destructuring
// function data(){
//     return {b:1, c:2, d:3}
// }
// var tmp = data()
// var first = tmp.a
// var second = tmp.b

function data(){
    return {b:1, c:2, d:3}
}

// var {
//     b: second,
//     c: third,
//     ...fourth
// } = data()
// var tmp
// var first, second
// tmp =  {
//     b:second,
//     a:first
// } = data()

// if there is nothing to return there should be default value
// function data(){
//     //return {b:1, c:2, d:3}
//     return
// }

// var tmp = data() || {}
// var a = tmp.a
// var b = tmp.b

// function data(){
//     //return {b:1, c:2, d:3}
//     return
// }

// var{
//     a = 42,
//     b
// } = data() || {}

// nested obj destructuring

// function data(){
//     return {a:1,
//     b: {
//         c:1,
//         d:2
//     }
//     }
 
// }
// var tmp = data() || {}
// var a = tmp.a
// var b = tmp.b
// var c = b.c
// var d = b.d

// function data(){
//     return {a:1,
//     b: {
//         c:1,
//         d:2
//     }
//     }
 
// }
// var{
//     a,
//     b:{
//         c,
//         d
//     }
// } = data() || {}

// parameter obj
// function data(tmp = {}){
//     var{
//         a,
//         b
//     }= tmp
// }

// function data({
//     a,
//     b
// } = {},x
// ){

// }
// data ({a:1,b:2},42)