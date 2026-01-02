/*
1. Write a function named `makeTea` that takes one parameter, `typeOfTea`, and returns a string like
   `"Making green tea"` when called with `"green tea"`.
   Store the result in a variable named `teaOrder`.
*/

function makeTea(typeOfTea) {
    return `Making ${typeOfTea}`;
}

let teaOrder = makeTea("green tea");
console.log(teaOrder);

/*
2. Create a function named `orderTea` that takes one parameter, `teaType`.
   Inside this function, create another function named `confirmOrder` that returns a message like
   `"Order confirmed for chai"`.
   Call `confirmOrder` from within `orderTea` and return the result.
*/

function orderTea(teaType) {
    function confirmOrder() {
        return `Order confirmed for ${teaType}`;
    }
    return confirmOrder();
}

let orderConfirmation = orderTea("chai");
console.log(orderConfirmation);

/*
3. Write an arrow function named `calculateTotal` that takes two parameters: `price` and `quantity`.
   The function should return the total cost by multiplying `price` and `quantity`.
   Store the result in a variable named `totalCost`.
*/

const calculateTotal = (price, quantity) => price * quantity;
const totalCost = calculateTotal(9.99, 3);
console.log(`Total cost: ${totalCost}`);

/*
4. Write a function named `processTeaOrder` that takes another function, `makeTea`, as a parameter
   and calls it with the argument "earl grey". Return the result of calling `makeTea`.
*/
//higher order function is a function that takes another function as an argument or returns a function as a result

function makeTea(typeOfTea) {
    return `makeTea : ${typeOfTea}`;
}

function processTeaOrder(fn){
    return fn("earl grey");
}

let order = processTeaOrder(makeTea);
console.log(order);


/*
5. Write a function named `createTeaMaker` that returns another function. The returned function should take one
   parameter, `teaType`, and return a message like `"Making green tea"`.
   Store the returned function in a variable named `teaMaker` and call it with `"green tea"`.
*/
// This is an example of a closure, where an inner function accesses variables from its outer function even after the outer function has returned.

function createTeaMaker(name) {
    return function (teaType) {
        return `Making ${teaType} for ${name}`;
    }
}

let teaMaker = createTeaMaker("arka");

console.log(teaMaker("green tea"));

