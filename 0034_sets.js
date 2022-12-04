const letters = new Set(["a","b","c"]);

console.log(letters);

letters.add("d");

console.log(letters);

console.log(letters.values());
letters.delete("b");
console.log(letters);
console.log(letters.has("c"));
console.log(letters.size);
letters.forEach(element => {
    console.log(element);
});
letters.clear();
console.log(letters);