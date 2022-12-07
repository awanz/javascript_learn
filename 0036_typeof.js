console.log(typeof "John"); // string
console.log(typeof 3.14); // number
console.log(typeof NaN); // number
console.log(typeof false); // boolean
console.log(typeof [1,2,3,4]); // object
console.log(typeof {name:'John', age:34}); // object
console.log(typeof new Date()); // object
console.log(typeof function () {}); // function
console.log(typeof myCar); // undefined
console.log(typeof null); // object

console.log("John".constructor); // function string
console.log((22.5).constructor); // function number
console.log(false.constructor); // function boolean
console.log([1,2,3,4].constructor); // function array
console.log({name:'John', age:34}.constructor); // function object
console.log(new Date().constructor); // function date
console.log(function () {}.constructor); // function function

function isArray(myArray) {
    return myArray.constructor === Array;
}

console.log(isArray("John")); // false
console.log(isArray([1,2,3,4])); // true

function isDate(myDate){
    return myDate.constructor.toString().indexOf("Date") > -1;
}

console.log(isDate("October 13, 2014 11:13:00")); // false

// null dan undefined memiliki value yang sama tetapi type yang berbeda