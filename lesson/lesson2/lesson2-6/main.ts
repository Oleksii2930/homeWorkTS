class User {
    private _name: string;
    private _age: number;
    private _status: boolean;
    constructor(age: number, status: boolean, name: string) {
        this._age = age;
        this._status = status;
        this._name = name;
    }
greeting() {
        console.log(`Hello, ${this._name}!`);
}

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get status(): boolean {
        return this._status;
    }

    set status(value: boolean) {
        this._status = value;
    }
}

class User2 extends User {
    id: number;
    constructor(age: number, status: boolean, name: string, id: number) {
        super(age, status, name);
        this.id = id;
    }
}