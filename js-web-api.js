let s = new Set([1,2,3,5,3]);
console.log('s', s);
s.add(4)
console.log('s', s, s.size, s.delete(4), s.size, s.has(4), s.has(3), s.entries());
s.forEach((value,key)=>{
    console.log( value, key);
})
//
// let a = {name: 11}
// let w = new WeakSet([a, a]);
// console.log('w', w);
// w.add({name: 22})
// console.log('w', w, w.size, w.delete(4), w.size, w.has(4), w.has({name: 11}));

let m = new Map([
    ['name', 1],
    [1, 2]
])
console.log(m)
m.forEach((value,key)=>{
    console.log( value, key);
})
