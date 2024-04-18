class Vehicle1 {
    name: string;
    year: number;
    company: string;

    constructor(name: string, year: number, company: string) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
}


let car1 = new Vehicle1("Car1",2002,"Lenovo");
let car2 = new Vehicle1("Car2",2000,"Pos");

console.log("Car1:",car1.name,car1.year,car1.company);
console.log("Car2:",car2.name,car2.year,car2.company);
