let a:string = 'HELLO WORLD';
console.log(a.length);
let b:string = 'LOREM IPSUM';
console.log(b.length);
let c:string = 'JAVASCRIPT IS COOL';
console.log(c.length);
const strings:string[] = [a, b, c];
for (const s of strings) {
console.log(s.toLowerCase());
}