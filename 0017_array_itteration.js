const number = [322,122,345,654,776,345,432,543];
console.log(number);

function kaliDua(value){
    return value > 500  ;
}

const result = number.map(kaliDua);
console.log(result);
console.log(number);

function lebih500(value){
    return value * 500;
}

const result2 = number.filter(lebih500);
console.log(result2);

function reduceNumber(total, value, index, array){
    console.log(`total : ${total}, value : ${value}, index : ${index}, array : ${array}`);
    return total + value;
}

const result3 = number.reduce(reduceNumber);
console.log(result3);

function reduceRightNumber(total, value, index, array){
    console.log(`total : ${total}, value : ${value}, index : ${index}, array : ${array}`);
    return total + value;
}

const result4 = number.reduceRight(reduceRightNumber);
console.log(result4);

function everyNumber(value, index, array){
    console.log(`value : ${value}, index : ${index}, array : ${array}`);
    return value > 50;
}

const result5 = number.every(everyNumber);
console.log(result5);