const mapData = new Map();
mapData['name'] = 'Test';
mapData.set('subject','JavaScript');

console.log(mapData.has('name')); // false
console.log(mapData.has('subject')); // true
console.log(mapData.size); //`

// map holds key value pairs nad remembers the original insertion order of the key
// map does not contain any keys by default, obj has a prototype
// keys of an obj must be either a string or a symbol
// number of items in a map is retrieved from its size property
// the number of items in an obj must be detetrmined manually

// only .set('','') can assign property to map
