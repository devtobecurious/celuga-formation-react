//export abstract class Person {
export class Person {
    constructor(private _surname: string) {}

    // private _surname: string
    // constructor(surname: string) {
    //     this._surname = surname
    // }

    get surname() {return this._surname}
    set surname(value: string) {
        this._surname = value
    }
}

// const person = new Person('Chewiee') // inférence de type

