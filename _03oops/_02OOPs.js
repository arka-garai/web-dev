//oop is a paradigm of programming
//paradigm means a way of doing something
//oop means object-oriented programming

//everything in js is an object even classes and functions

class Vehicle {
    constructor(make , model){
        this.make = make;
        this.model = model;
    }

    start(){
        return `${this.model} vehicle belongs to ${this.make}`;
    }
}

class Car extends Vehicle{
    drive(){
        return `${this.model} car belongs to ${this.make}`
    }
}

let myCar = new Car("Toyota","Corolla");
console.log(myCar.start());
console.log(myCar.drive());
console.log(myCar.model);


let myVehicle = new Vehicle("Maruti Suzuki", "Swift");
console.log(myVehicle.model);

//Encapsulation

class BankAccount {
    #balance = 0; //balance can't be accessed outside the class
    deposit(amount) {
        this.#balance += amount;
    }
    getBalance(){
        return `$${this.#balance}`
    }
}

let sbiAccount = new BankAccount();
console.log(sbiAccount.getBalance());
sbiAccount.deposit(100);
console.log(sbiAccount.getBalance());

//Abstraction
class CoffeeMachine {
    start(){
        //call DB
        //filter value
        return `Starting the machine...`; 
    }
    brewCoffee(){
        //complex calculation
        return `Brewing coffee`;
    }
    pressStartButton(){
        let msgOne = this.start();
        let msgTwo = this.brewCoffee();
        return `${msgOne} \n${msgTwo}`
    }
}

let myMachine = new CoffeeMachine();
console.log(myMachine.pressStartButton());

//polymorphism

class Bird{
    fly(){
        return `Flying....`;
    }
}

class Penguin extends Bird{
    fly(){
        return `Penguins can't fly`;
    }
}

let bird = new Bird()
let penguin = new Penguin()
console.log(bird.fly());
console.log(penguin.fly());

bird = penguin
console.log(bird.fly());

//static method

class Calculator{
    static PI = Math.PI;
    static add(a, b){
        return a+b;
    }
}

console.log(Calculator.add(2,3));
console.log(Calculator.PI);

//getters & setters

class Employee{
    #salary; //private field
    constructor(name, salary){
        if(salary < 0){
            throw new Error("Salary cannot be in negative");
        }
        this.name = name;
        this.#salary = salary;
    }
    get salary(){
        return this._salary;
    }
    set salary(value){
        if(value < 0){
            console.error("Invalid Salary")
        }else{
            this.#salary = value;
        }
    }
}

let emp = new Employee("Alice", 50000);
emp.salary = 60000;
console.log(emp.salary);

