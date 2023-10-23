const arr1 = ['hello','i', 'am', "frank"];

const result = arr1.map(x => x.split(" ")).flat();

console.log(result);

// flat([1,[2]]) ni [1,2] qilib qoyadi
// flatMap([[[]]]) chuqurlarini ham sayozlashtiradi flatga o'xshab 
// faqat unda tayyor map bor yana qaytadan mao ishlatish shartmas

