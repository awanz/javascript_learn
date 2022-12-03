
for (let i = 0, text = ""; i < 10; i++) {
    if (i === 3) { break; }
    text += "The number is " + i + " -- ";
    console.log(text);
}
  
console.log(" ======= ");

for (let i = 0, text = ""; i < 10; i++) {
    if (i === 3) { continue; }
    text += "The number is " + i + " -- ";
    console.log(text);
}