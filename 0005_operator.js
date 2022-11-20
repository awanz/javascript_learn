/*
    Arithmetic Operators
    +
    -
    *
    /
    **
    %
    ++
    --
*/

let a = 2;
let b = 3;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a ** b);
console.log(a % b);
console.log(a++);
console.log(a);
console.log(++a);
console.log(a);
console.log(a--);
console.log(a); // 3
console.log(--a); // 2
console.log(a); // 2

console.log(5^1);

objectVariable = {
    name: 'Hermawan',
    age: 25,
}

objectVariable2 = {
    name: 'Hermawan',
    age: 25,
}

let test = objectVariable instanceof objectVariable2;
console.log(test);