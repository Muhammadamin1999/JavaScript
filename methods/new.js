// const string = "Muhammad Amin"
// console.log(string.replace(" ","-"))
const arr = ["Murodillo", "Javokhir", "Anvar", "Jahon","Asror", "Ali","Sardor","Laziz","Karim","Bobur"]
//arr.forEach((elem)=> elem.padStart(10,' '))
const arr2 = []
for(let i=0; i<10; i++){
   arr2[i]= arr[i].padStart(10," ")
}
console.log(arr2)