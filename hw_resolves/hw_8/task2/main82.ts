function cloner<T>(obj:T):T {
    if(obj) {
        const functions:Array<{ functionClone: Function, key:string }> = [];
        for(const key in obj) {
            if(typeof obj[key] === 'function') {
                const functionClone = (obj[key] as Function).bind({});
                functions.push({functionClone, key});
            }
        }
        const cloneObg:T = JSON.parse(JSON.stringify(obj));
        for (const func of functions) {
            (cloneObg as any)[func.key] = func.functionClone; //тс несхоче працювати з клонованим обєктом тому ставим щоб сприймало його як ені
        }
        console.log(cloneObg);
        return cloneObg
    }
    throw new Error('Object not found');
}
const clone = cloner({id: 123, name: 'John', greeting() {console.log('hello world!')}, foo() {console.log('bar')}});
clone.foo();