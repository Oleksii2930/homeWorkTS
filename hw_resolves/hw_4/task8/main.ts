type PrimitiveType = boolean | number | string

function foobar (arrayPrimitive:PrimitiveType[]):void {
    document.write('<ul>');
    for (const item of arrayPrimitive) {
        document.write(`<li>${item}</li>`);
    }
    document.write('</ul>');
}
foobar(['octen', 30, 40, 50]);