const bio = {
    name: "awan",
    age: 35,
    welcome: function() {
        return `Welcome ${this.name}, your age is ${this.age}`
    }
}

console.log(bio.welcome());
console.log(bio);

bio.name = "star";
console.log(bio);

bio["age"] = 15;
console.log(bio);