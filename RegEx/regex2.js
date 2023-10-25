// single char
// \d -> 0-9
// \w -> A-Za-z0-9
// \s -> white space
// . -> any character whatever

// quantifier
// * -> 0 or more
// + -> 1 or more
// ? -> 0 or more
// {min,max}
// {n}

// position
// ^ - beginning
// $ - end
// \b - word bound

// flags
// g -> global
// i -> case insensitive 

// create regex 
// var s = /hello/
// new RegExp("")
// s.test()
// s.match()
// 3 word regex  var r = /\d{3}/
// r.test("abc") returns true
// r.test("abcd") returns false
// r.test("abcdef") returns true cause there 3 and 3 characters

// var r = /^\d{3}$/ now it says beginning 3 digits and ends

// match value qaytarsa , test true yoki false qaytaradi 
// match ham true yoki false qaytaradi 

// .exac() regular expression excute the string 
