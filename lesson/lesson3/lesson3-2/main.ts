interface IAnimal {
    isAlive: boolean;
    sound:() => void
}

class BirdClass implements IAnimal {
    isAlive: boolean;
    wings:boolean  ;

    constructor(isAlive:boolean, wings: boolean) {
        this.wings = wings;
        this.isAlive = isAlive;
    }

    sound(): void{

}
}