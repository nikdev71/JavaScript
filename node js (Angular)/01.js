//открываем папку в проводнике нажимаем на путь, пишем cmd И за пускаем эту команду в данной папке
//npm install -g typescript
//компиляция в js 
//tsc 01.ts
//конфигурационный файл
//tsc --init
var num = 20;
num = 30;
var mess = 'hello';
var type;
type = 4;
type = "World";
var color;
color = "purple";
color = 10101;
var arr = [1, 2, 3, 4, 5];
var arr1 = [1, 2, "3,4,5"];
//Functions
function getSize() {
    return 0;
}
var getOffset = function () { return 30; };
function print2(a) {
    console.log(a);
}
function NL(name, surname) {
    if (surname) {
        return name + " " + surname;
    }
    else {
        return name;
    }
}
var student = {
    name: "NIKITA",
    age: 20
};
var st1 = {
    name: "NIKITA",
    age: 20,
    lessons: [".net", "js", "ts"],
    print: function () {
        console.log(this.name);
    }
};
var gallery1 = {
    title: "Галерея 1",
    loop: true,
    item: 10,
    arr: ['img1.png', 'img2.png'],
    drag: function () {
        console.log("Title:".concat(this.title, " \n Loop:").concat(this.loop, " \n Item: ").concat(this.item, " "));
    }
};
var gallery2 = {
    title: "Галерея 2",
    loop: false,
    item: 15,
    arr: ['img3.png', 'img4.png'],
    drag: function () {
        console.log("Title:".concat(this.title, " \n Loop:").concat(this.loop, " \n Item: ").concat(this.item, " "));
    }
};
