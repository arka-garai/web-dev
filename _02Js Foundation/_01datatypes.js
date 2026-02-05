//primitive datatypes in javascript

//number datatype
// var score = 100; //number datatype (old way [var keyword])
let score2 = 99.9; //number datatype
console.log(typeof score2); //number
let balance = new Number(5000); //number datatype (object way)
console.log(typeof balance); //object

//string datatype
let nam = "arka"; //string datatype
console.log(typeof nam);//string    
let greeting = 'Hello, ' + nam + '!'; //string datatype (concatenation)
console.log(greeting); //Hello, arka!
//string interpolation
let newGreeting = `Hello, ${nam}! Welcome to JavaScript.`; //string datatype (template literal)
console.log(newGreeting); //Hello, arka! Welcome to JavaScript.
let demoOne = `valuse is ${5 + 10}`; //string datatype (template literal with expression)
console.log(demoOne); //valuse is 15

//boolean datatype
let isLoggedIn = false; //boolean datatype
console.log(typeof isLoggedIn); //boolean

//bigint datatype
let bigNumber = 1234567890123456789012345678901234567890n; //bigint datatype 
console.log(typeof bigNumber); //bigint

//undefined datatype
let firstName;
console.log(firstName);//undefined

//null datatype
let smallNumber = undefined; //undefined datatype
console.log(typeof smallNumber);//undefined

//null datatype
let emptyValue = null; //null datatype
console.log(typeof emptyValue); //object (this is a known bug in javascript)

//symbol datatype
let uniqueId1 = Symbol("id"); //symbol datatype guarantees uniqueness
let uniqueId2 = Symbol("id"); //symbol datatype
console.log(uniqueId1 === uniqueId2); //false
console.log(typeof uniqueId1); //symbol
console.log(uniqueId1);


//Non-primitive datatypes in javascript

//object datatype
let student = new Object(); //object datatype (old way)
student.name = "arka";
student.age = 20;
console.log(typeof student);  //object
console.log(student); 

let person = { //new way
  name: "arka",
  age: 20,
  isAdmin: false,
  "student id": 1001 //property with space in name
}; //object datatype
person.name = "arka garai";//modifying existing property of object
person.roll = 101;//adding new property to object
console.log(typeof person);//object 
console.log(person.name);
console.log(person["student id"]);
console.log(person["roll"]);
console.log(person);

//array datatype
let teaTypes = ["lemon tea", "ginger tea", "cardamom tea", true, ["cat", "dog"]]; //object datatype (array)
console.log(teaTypes[0]);  //lemon tea
console.log(teaTypes[1]);  //ginger tea
console.log(teaTypes[2]);  //cardamom tea
console.log(teaTypes[3]);  //true
console.log(teaTypes[4]);  //[]
console.log(typeof teaTypes);//object

//date datatype
let today = new Date(); //object datatype (date)
console.log(typeof today);
console.log(today.toDateString());


//type conversion in javascript
console.log(1 + "1");//11
console.log("1" + 1);//11
console.log(Number("1") + 1);//2
console.log(Number("2ab"));//NaN
console.log(typeof Number("2ab"));//number
console.log(Number(null));//0
console.log(Number(undefined));//NaN
console.log(true + 1);//2
console.log(false + 1);//1
console.log("5" - 2);//3
console.log(2 - "5");//-3
console.log("10" * "2");//20





