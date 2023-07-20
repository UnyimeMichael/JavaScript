function Employee(name, phoneNumber, designation) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.designation = designation

    this.printDetails = () => {
        return `My name is ${this.name} \n You can contact me via
        ${this.phoneNumber}. I am the ${designation} of sulty bank`
    };
    this.company = "sulty Bank"
}

let employee1 = new Employee("Joe Botsman", "+2378738293", "manager");
let employee2 = new Employee("Esther Botsman", "+23787394733", "cook");

Employee.prototype.isVerified = true;
employee1.isAvailable = false

console.log(employee1.__proto__ === employee2.__proto__);
console.log(employee1.__proto__ === employee2.company);
console.log(employee1.printDetails())
console.log(employee2.printDetails())
console.log(employee1.isAvailable)
console.log(employee2.isAvailable)