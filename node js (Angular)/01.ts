//открываем папку в проводнике нажимаем на путь, пишем cmd И за пускаем эту команду в данной папке
//npm install -g typescript
//компиляция в js 
//tsc 01.ts
//конфигурационный файл
//tsc --init

let num: number =20;
num = 30;

let mess: string = 'hello'

let type: any;
type = 4;
type = "World";

let color: string | number;
color = "purple";
color = 10101;

let arr: number[] = [1,2,3,4,5];
let arr1: [number,number,string] = [1,2,"3,4,5"];

//Functions

function getSize(): number{
    return 0;
}

let getOffset = ():number => 30;

function print2(a:number):void{
    console.log(a);
}

function NL(name:string, surname?:string):string{
    if(surname){
        return name +" "+ surname
    }
    else{
        return name;
    }
}

let student:{name: string,age:number}={
    name:"NIKITA",
    age:20
}

type Student={
    name: string,
    age:number
    lessons:string[],
    print: ()=> void
}

let st1:Student={
    name:"NIKITA",
    age:20,
    lessons:[".net","js","ts"],
    print():void{
        console.log(this.name)
    }
}


type Gallery={
    title:string,
    loop: boolean,
    item:number,
    arr: string[],
    drag: ()=>void
}

const gallery1 : Gallery = {
    title: "Галерея 1",
    loop: true,
    item: 10,
    arr: ['img1.png','img2.png'],
    drag: function(){
        console.log(`Title:${this.title} \n Loop:${this.loop} \n Item: ${this.item} `);
    }
};

const gallery2 : Gallery = {
    title: "Галерея 2",
    loop: false,
    item: 15,
    arr: ['img3.png','img4.png'],
    drag: function(){
        console.log(`Title:${this.title} \n Loop:${this.loop} \n Item: ${this.item} `);
    }
};


