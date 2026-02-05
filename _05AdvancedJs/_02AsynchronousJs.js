function sayHello() {
    console.log("hello !")
}

setTimeout(() => {
    sayHello()
},2000);

for (let i = 0; i < 10 ; i++) {
    console.log("Arka")
}