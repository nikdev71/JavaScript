function SliceDemo() {
    console.log("slice");
    let a = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    console.log("Исходный массив: " + a.join(", "));
    let b = a.slice(2, 6);
    console.log("Итоговый массив: " + b.join(", "));
}

function Reverse() {
    console.log("reverse");
    let a = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    console.log("Исходный массив: " + a.join(", "));
    let b = a.reverse(); // Обращает порядок следования элементов в массиве.
    console.log("Итоговый массив: " + b.join(", "));
}

function LengthDemo() {
    let a;
    a = new Array(0, 1, 2, 3, 4);
    console.log("Длина массива: " + a.length);
}

export default { SliceDemo, Reverse, LengthDemo}