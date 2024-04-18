"use strict";
class Department {
    constructor(id, name, employee) {
        this.id = id;
        this.name = name;
        this.employee = employee;
    }
    describe() {
        console.log(`id:${this.id} name:${this.name}`);
    }
}
let department = new Department(1, "Dung", ["1", "3"]);
department.describe();
console.log(department);
