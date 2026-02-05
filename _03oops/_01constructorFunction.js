//functional constructor
function Car(make , model) {
    this.make = make;
    this.model = model;
}

let myCar = new Car("Toyota" , "Camry");
console.log(myCar);

function tea(type) {
    this.type = type;
    this.describe = function () {
        return `This is  a cup of ${this.type}`;
    }
}

let myTea = new tea("lemon tea");
console.log(myTea);
console.log(myTea.describe());
console.log(myTea.type);


function Animal(species){
    this.species = species;
}

//prototypical chaining
Animal.prototype.sound = function () {
    return `${this.species} makes a sound`;
}

let dog = new Animal("Dog");
console.log(dog.sound());


Array.prototype.devLength = function () {
    return (this.length - 1) ;
}

let arr = [10,20,30,40];
console.log(arr.devLength());





//Error handling in constructor function
function Drink(name){
    if(!new.target){
        // throw new Error("Drink must be called with new keyword");
    }
    this.name = name;
}

let mytea = new Drink("tea");
let coffee =  Drink("coffee");

