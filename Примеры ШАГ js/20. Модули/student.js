import { Person } from "./person.js";
import "./contries.js";

export class Student extends Person {
    constructor(name, surname, age, rating) {
        super(name, surname, age);
        this._rating = rating;
    }
    setRating(rating) {
        if (!rating || rating <= 0 || rating > 12) {
            throw new Error("Значение rating должно быть в диапазоне от 1 до 12!");
        }
        this._rating = rating;
    }
    getRating() {
        return this._rating;
    }
    print() {
        super.print();
        console.log("Рейтинг: " + this._rating);
    }
}