class Account {
    constructor(name, email, bvn){
        this.name = name;
        this.email = email;
        this.bvn = bvn;
        this.phoneNumber = this.phoneNumber;
        
        this.accountNumber = String(

        )
    }
    set name(newName){
        this.name = newName

    }
    get name(){
        return this.name

    }
    generateAccountNumber(){}
}

module.exports = {Account};