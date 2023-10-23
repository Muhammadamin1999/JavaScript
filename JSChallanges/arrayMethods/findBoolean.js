
const falsy = new Boolean(false);
console.log(falsy) // prints obj
if(falsy){ // here is obj so that it is true
    if([])console.log('Array [] is empty');
    if([]== false) console.log('empty [] is compared with false');
}

