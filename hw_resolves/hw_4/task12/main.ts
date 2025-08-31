function swap (arr:number[], i1:number, i2:number):number[] {
    let temp = arr[i1]; //11
    arr[i1] = arr[i2];
    arr[i2] = temp;
    return arr;
}
console.log(swap([11,22,33,44],0, 1) )