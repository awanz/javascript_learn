class Cars{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    
    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}

let myCar = new Cars("Ford", 2014);
console.log(myCar.name); // Ford
console.log(myCar.year); // 2014
console.log(myCar.age()); // 5