const name = ["awan", "khan", "ali", "ahmed"];
console.log(name);
console.log(name.toString());
console.log(name.join(" - "));
console.log(name.pop());
console.log(name);
console.log(name.push("star"));
console.log(name);
console.log(name.shift());
console.log(name);
console.log(name.unshift("awan"));
console.log(name);
console.log(name.length);
delete name[0]; // if use that then it will delete the element but it will not change the length of the array
console.log(name);

const name2 = ["dina", "sana", "sara"];
const mergeName = name.concat(name2);
console.log(mergeName);
name.splice(2, 0, "star2", "khan2");
console.log(name);