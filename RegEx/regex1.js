// regEx starts with /inside put pattern/
// /ninja/g // it searchs ninja globally
// /ninja/gi // it says globalincasesensitive find also capital letters
// character set
//  /[ng]inja/gi now we have [] it means it can be
// one of the char matches that is enough

// exclude set , all except this
// /[^pe2]000/gi means except p, e, 2 all other ok, ^ except sign

// large char sets 
// ranges
// /[a-h]inja/gi from a to h  or [0-9] from 0 till 9
// /[0-9]{11}/gi only matches when number length is 11
// 12233422233 33322212333 443333 two matches here
// /[a-z]{5}/gi from a to z 5 character word is okk 
// /[0-9]{5,}/gi from 0 to 9 at least 5 char
// /[0-9]{5,8}/gi from 0 to 9 at least 5 max 8

// -\d match any digit character (same as [0-9])
// -\w match any word character (a-z, A-Z, 0-9, _s')
// -\s match a whitespace character (spaces, tabs, etc)
// -\t match a tab character only
// d-- matches the literal character
// \d -- matches any digit character
// /\d\s\w/gi 
// /\d{3}\s\w{5}/gi   123 ninja 3 ta digit 1 ta white space 5 ta letter

// '+' the one or more quantifier
// '\' the escape character
// '[]' the character set
// '[^]' negate symbol

// '?' zero or one quantifier (makes a preceding char optional)
// /he?llo?/gi   hll is still a match

// '.' any char whatsoever (except the new line)
// /car./gi card is also match after . it can be anything
// .+  after this everything is match

// '* ' the 0 or more quantifier (a bit like +)
// /[a-z]*/gi before * the char should come at least once

// /abc\*/gi it escapes its default behaviour if we use \

// the five letter word should be before and end of string 
// /^[a-z]{5}$/gi only accepts 5 letter length

// /p|tyre/gi p or tyre

// create RegEx in js
// var reg = /[a-z]/ig
// var reg2 = new RegExp(/[a-z]/,'i');



// 
const inputs = document.querySelectorAll('input');
const patterns = {
    telephone: /^\d{11}$/,
    username: /^[a-z/d]{5,12}$/i,
    password: /^[\w@-{8,20}]$/,
    slug: /^$[a-z\d-]{8,20}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
    
}
// validation
function validate(field, regex){
    if(regex.test(field.value)){
        field.className = 'valid';
    }else{
        field.className = 'invalid'
    }
}

inputs.forEach((input)=> {
    input.addEventListener('keyup',(e)=>{
        //console.log(e.target.attributes.name.value);
        validate(e.target,patterns[e.target.attributes.name.value]);
    })


})







