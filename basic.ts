class Customer{
    name: String;
    isActive: boolean;

    constructor(name:String){
        this.name = name;
        this.isActive = true;

    }
    announce(){
        return "Hello, my name is " + this.name;
    }
}

class specialCustomer extends Customer{
    //inherits from customer class 
}


let firstCustomer = new Customer("Alice");
let newMessage: string= firstCustomer.announce();

let webHeading = document.querySelector('h1');
webHeading!.textContent=newMessage;

