console.log("Степени двойки:");
for (let i = 1; i <= 8; i++) {
    console.log(2 ** i);
}

export let upperLimit = 20;
let counter;
export let sum = 0;
for (counter = 1; counter <= upperLimit; counter++) {
    sum += counter;
}
console.log("Сумма чисел от 1 до " + upperLimit + ": " + sum);

export default function factorial(n) {
    if (n == 0)
        return 1; 
    else
        return n * factorial(n - 1); 
}