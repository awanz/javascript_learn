let bigNumber = BigInt(123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789);

console.log(bigNumber);

let numberMaxSafeInteger = Number.MAX_SAFE_INTEGER;
console.log(numberMaxSafeInteger);

let numberMinSafeInteger = Number.MIN_SAFE_INTEGER;
console.log(numberMinSafeInteger);

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN);
console.log(Number.EPSILON);
console.log(Number.isInteger(1));
console.log(Number.isInteger(1.1));

console.log(Number.isSafeInteger(10));
console.log(Number.isSafeInteger(1000000000000000000000000000000000000000));