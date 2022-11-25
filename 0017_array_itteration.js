const number = [322,122,345,654,776,345,432,543];
console.log(number);

function kaliDua(value){
    return value * 2;
}

const result = number.map(kaliDua);
console.log(result);
console.log(number);

