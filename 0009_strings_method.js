let text = "Hello World, I will learn something new today";
console.log(text.length);
console.log(text.slice(4, 9));
console.log(text.substring(5, 8));
console.log(text.substr(5, 8));
console.log(text.replace("Hello", "Hi"));
console.log(text.replaceAll("Hello", "Buddy"));
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.split(" "));

let text2 = "and i will show you something new";
let text3 = text.concat(" ", text2);
console.log(text3);

let text4 = "           hai        ";
console.log(text4);
console.log(text4.trim());
console.log(text4.trimStart());
console.log(text4.trimEnd());

let text5 = "5";
console.log(text5.padStart(5, "x"));
console.log(text5.padEnd(5, "x"));

let text6 = "Hello World";
console.log(text6.charAt(3));
console.log(text6.charCodeAt(4));
console.log(text6[3]);