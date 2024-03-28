import { rect } from "./rectangle.js";
import "./log.js";
import factFunc, { upperLimit as right, sum } from "./log.js";
import "./contries.js";
import * as MathModule from "./math.js";
import factorial from "./math.js";
import ArrayModule from "./array.js";
import { Person } from "./person.js";
import { Student } from "./student.js";

console.log("Сумма чисел от 1 до " + right + ": " + sum);

let r = new rect(10, 20, 60, 100);
console.log("Ширина прямоугольника: " + r.Width());
console.log("Высота прямоугольника: " + r.Height());

console.log("Длина окружности: " + 2 * MathModule.PI * MathModule.radius);
console.log("Куб числа " + 5 + " равен " + MathModule.cube(5));
MathModule.circleLength(10);

console.log("Факториал числа 5 равен: " + factFunc(5));
console.log("Факториал числа 7 равен: " + factorial(7));

ArrayModule.SliceDemo();
ArrayModule.Reverse();
ArrayModule.LengthDemo();

let person = new Person("Иван", "Иваненко", 25);
person.print();
person.setName("Петр");
person.setSurname("Петренко");
person.setAge(30);
person.print();

let student = new Student("Сергей", "Сергеев", 27, 10.5);
student.print();
student.setName("Олег");
student.setSurname("Кузнецов");
student.setAge(30);
student.setRating(12);
student.print();

import("./math.js").then((module) => {
    console.log("Длина окружности: " + 2 * module.PI * module.radius);
    console.log("Факториал числа 5 равен: " + module.default(5));
    console.log("Куб числа " + 5 + " равен " + module.cube(5));
});

const module = await import("./math.js");
console.log("Длина окружности: " + 2 * module.PI * module.radius);
console.log("Факториал числа 5 равен: " + module.default(5));
console.log("Куб числа " + 5 + " равен " + module.cube(5));