const name = ['awan', 'budi', 'caca', 'dina'];

for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
}

for(let i = 0, len = name.length, text = ""; i < len; i++) {
    text += name[i] + " ";
    console.log(i + " " + name[i]);
    console.log(text);
}