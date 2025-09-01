let a:string = 'HELLO WORLD';
let b:string = 'LOREM IPSUM';
let c:string = 'JAVASCRIPT IS COOL';
const strings:string[] = [a, b, c];
for (const s of strings) {
console.log(s.toLowerCase());
}