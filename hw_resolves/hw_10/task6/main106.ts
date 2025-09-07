function addToLocalStorage<T>(arrayName:string, objToAdd:T):void {
    const lsItem:string | null = localStorage.getItem(arrayName);
    if (!lsItem) {
        throw new Error('there is no such array');
    }

    const array:T[] = JSON.parse(lsItem);
    if (typeof objToAdd === 'object') {
        array.push(objToAdd);
    }
    localStorage.setItem(arrayName, JSON.stringify(array));

}


