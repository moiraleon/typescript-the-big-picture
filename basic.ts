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

//<!-- NOTES
// sudo npm install -g typescript
//other  tsc commands
// tsc basic.ts - creates typescript replica
// tsc --target ES 2015 --ourDir js basic.ts (creates generated version of EcmaScript 2915 and puts new js in a dir(folder) called js)


//explicit types and type inferences 
//compiler options are cusotmizable-- instead of writing this each time we can create a typescript configuration file called tsconfig.json it is just a plain text file in json format with keys and values
//usually type inference will take over but you can also write variables as  let firstName:string = "Alice"; but it is not necessary when type inference is used, it is helpful here let someVar:string; when stating var and type

//type information in functions
// function simpleFunction(name:string, isActive: boolean){
//     //do something
// }

///telling it the return type would be after params with colon and then type(i.e. number)
// function simpleFunction(name:string, isActive: boolean):number{
//     //do something
// return 0; code will search and make sure some reachable code returns a number
// }
//return type can also be void  

// typescripts supports private, public and protectes, getter and setter methods etc. 

// enabling exporting and importing class

// write export before class 

// and import + class path on file as so: import {Customer} from "./customer";
// -->


