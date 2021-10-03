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
//other  tsc commands
// tsc basic.ts - creates typescript replica
// tsc --target ES 2015 --ourDir js basic.ts (creates generated version of EcmaScript 2915 and puts new js in a dir(folder) called js)

//compiler options are cusotmizable-- instead of writing this each time we can create a typescript configuration file called tsconfig.json it is just a plain text file in json format with keys and values