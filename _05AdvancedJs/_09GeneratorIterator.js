//* along with yield is generator
function* numberGenerator(){ //generator function
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

let gen  = numberGenerator();
let genTwo  = numberGenerator();

//.next() is iterator
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);


console.log(genTwo.next().value);
console.log(genTwo.next().value);
console.log(genTwo.next().value);


console.log(gen.next().value);
console.log(gen.next().value);
