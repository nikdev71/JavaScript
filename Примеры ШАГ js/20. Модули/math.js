function circleLength(radius) {
    console.log("Длина окружности: " + 2 * PI * radius);
}

function cube(n) {
    let c = n * n * n;
    return c;
}

function factorial(n) {
    if (n == 0)
        return 1;
    else
        return n * factorial(n - 1);
}

const PI = 3.14;
let radius = 10;

export { circleLength, cube, factorial as default, PI, radius }