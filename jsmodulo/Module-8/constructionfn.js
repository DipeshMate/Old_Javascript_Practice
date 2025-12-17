    

function createCar(name, _company, _color) {
this.name= name // this is now an empty object
    this._company = _company
    this._color = _color


    this.drive = function () {
        console.log(`i am driving ${this.name} and it is of ${this._color} color`)
    }
}

let car1 = new createCar('x4','audi','red')
let car2 = new createCar('x8','lamboughini','yellow')

console.log(car1)
console.log(car2)

car1.drive()
