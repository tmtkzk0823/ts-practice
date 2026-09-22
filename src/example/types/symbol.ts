const s1 = Symbol("foo");
const s2 = Symbol("foo");

console.log(s1 === s1);
// true

console.log(s1 === s2);
// false

// synbolを使って開発することはそんなにない
