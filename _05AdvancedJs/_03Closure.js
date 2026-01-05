function outer() {
    let counter = 0;

    // function inner() {
    //     counter++;
    //     console.log("Counter: " + counter);
    // }
    //
    // return inner;

    return function inner() {
        counter++;
        console.log("Counter: " + counter);
    }
}

const fn = outer();
fn(); // Counter: 1
fn(); // Counter: 2
fn(); // Counter: 3