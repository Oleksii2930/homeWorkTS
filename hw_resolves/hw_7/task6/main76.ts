//
interface Driver {
    name: string;
//     age: number;
}
class Car {
    model:string;
    produser:string;
    year:number;
    maxSpeed:number;
    engineVolum:number;
    driver?:Driver ;
    constructor(model:string, produser:string,year:number,maxSpeed:number, engineVolum:number) {
    this.model = model;
    this.produser = produser;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolum = engineVolum;
    }

        drive():void{
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
        };
        info():void{
            for (const key in this) {
                console.log(key, this[key]);
            }
        };
        increaseMaxSpeed(speedToAdd:number):void {
            if (speedToAdd > 0) this.maxSpeed = this.maxSpeed + speedToAdd;
        }
        changeYear(year:number):void{
            if (year > 1815) this.year = year;
        }
        addDriver (driver:Driver) {
           this.driver = driver;
        }

}
const car = new Car('reno','reno',2006, 140, 1.5);
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(200);
car.changeYear(2020);
car.addDriver( {name:'Oleksiy'});
console.log(car);