let number = "1508";
console.log(typeof number); // string
console.log(typeof Number(number)); // number
console.log(typeof parseInt(number)); // number
console.log(typeof parseFloat(number)); // number
let numb = Number(number);
console.log(typeof numb); // number
console.log(typeof String(numb)); // string
console.log(typeof numb.toString()); // string