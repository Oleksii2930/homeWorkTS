type PrimitiveType = string | number | boolean;
const foobar5 = (arrayPrimitive:PrimitiveType[]):void => {
    document.write('<ul>');
    for (const item of arrayPrimitive) {
        document.write(`<li>${item}</li>`);
    }
    document.write('</ul>');
}
foobar5(['octen', 30, 40, 50]);