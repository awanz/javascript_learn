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

fruits.delete("melon");
console.log(fruits);

console.log(fruits.size);
console.log(fruits.has("apel"));

console.log(fruits.keys());
console.log(fruits.values());
console.log(fruits.entries());

fruits.forEach((value, key) => {
    console.log(key, value);
});