const {Employee} = require( " ../intermediary/prototype");

describe("Tests for Employee Object", () =>{
    test("should get name via object ", () => {
        let murife = new Employee("Murife", "+23456742763", "runner");
        expect(murife.name).toBe("Murife");
        expect(murife.phoneNumber).toBe("+23456742763")
        expect(murife.designation).toBe("runner");
        expect(typeof murife.printDetails()).toEqual("string")
    })

    test("should assign salary based on designation", () => {
        let oyin = new Employee("oyin", "+23476879876", "cook");
        let response = oyin.paySalary();
        
    })
})