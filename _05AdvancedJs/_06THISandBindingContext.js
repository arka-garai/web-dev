const Person = {
    name : "Arka",
    greet(){
        console.log(`Hi, I am ${this.name}`);
    }
}

Person.greet();

const greetFunc = Person.greet;
greetFunc();

//binding context
const boundGreet = Person.greet.bind({name : "Akira"});
boundGreet();

//bind, call and apply