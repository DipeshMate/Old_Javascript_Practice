//inheritance
const MyClass1 = class {
    #name;
    #input;
    #output;


    constructor(input,output,name) {
        this.#input = input;
        this.#output = output;
        this.#name = name;
    }

    print() {
        console.log(`${this.#name} having ${this.#input} input and ${this.#output} output`);
    }

}

class Charger extends MyClass1{
    #type;
    //super is a constructor of parent class
    constructor(input, output, name, type) {
        super(input, output, name);
        this.#type = type;
    }
    get typeData() {
       // console.log(`${this.#name} having ${this.#input} input and ${this.#output} output`); without # you can access
        console.log(this.#type);
    }
}

const hpCharger = new Charger(18,200,"Charger","BType");
hpCharger.typeData;