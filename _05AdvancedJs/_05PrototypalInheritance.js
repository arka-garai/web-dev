function Person(name) {
    this.name = name;
}

Person.prototype.intro = function () {
    return `Hello ! ${this.name} this side.`
}
let arka = new Person("Arka");
console.log(arka.intro());