let numb = 10;
while(numb > 0) {
    console.log(numb);
    numb--;
}

let numb2 = 10;

do {
    console.log(numb2);
    numb2--;
}while(numb2 > 0);

const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let text = "";

while (cars[i]) {
  text += cars[i];
  i++;
}

console.log(text);

text = "";
i = 0;
for (;cars[i];) {
    text += cars[i];
    i++;
}

console.log(text);