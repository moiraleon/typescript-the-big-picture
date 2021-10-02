class Customer{
    name: String;

    constructor(name:String){
        this.name = name;
    }
    announce(){
        return "Hello, my name is " + this.name;
    }
}

let firstCustomer = new Customer("Alice");
let newMessage: string= firstCustomer.announce();

let webHeading = document.querySelector('h1');
webHeading!.textContent=newMessage;

// sudo npm install -g typescript