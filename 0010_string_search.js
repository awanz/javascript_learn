let text = "Hello World, I will learn something new today";

console.log(text.indexOf("World"));
console.log(text.lastIndexOf("new"));
console.log(text.search(/learn/));
console.log(text.match(/learn/));
console.log(text.matchAll(/learn/g));
console.log(text.includes("learn"));
console.log(text.startsWith("Hello"));
console.log(text.endsWith("today"));
console.log("End");