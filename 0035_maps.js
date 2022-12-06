const fruits = new Map([
    ["apel", 150],
    ["jeruk", 970],
    ["melon", 620],
]);

console.log(fruits);

fruits.set("mangga", 2000);
console.log(fruits);

const valueJeruk = fruits.get("jeruk");
console.log(valueJeruk);
