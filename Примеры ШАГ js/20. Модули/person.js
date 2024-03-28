export class Person {
    constructor(name, surname, age) {
        this._name = name;
        this._surname = surname;
        this._age = age;
    }
    setName(name) {
        if (!name) {
            throw new Error("Значение name не определено!");
        }
        this._name = name;
    }
    getName() {
        return this._name;
    }
    setSurname(surname) {
        if (!surname) {
            throw new Error("Значение surname не определено!");
        }
        this._surname = surname;
    }
    getSurname() {
        return this._surname;
    }
    setAge(age) {
        if (!age || age <= 0) {
            throw new Error("Значение age должно быть положительным!");
        }
        this._age = age;
    }
    getAge() {
        return this._age;
    }

    print() {
        console.log("Имя: " + this._name);
        console.log("Фамилия: " + this._surname);
        console.log("Возраст: " + this._age);
    }
}