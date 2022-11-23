//Variables in JS

// var p = "prathi'k"; //string
// const ps = "prathik"; //string but the value is constant
// NOtPrathik = "not prathik"; //undefined
// console.log(typeof NotPrathik); //printing to console

// let number = 17; //let is a block case
// console.log(typeof number, number);

// console.log(typeof p, typeof ps, p);
// let bol = true; //boolean
// let bol1 = 0; //number
// console.log(typeof bol, typeof bol1);
// let me = null; //null

//Conditional statements

// const val = 5;
// if (val > 10) {
//   console.log("greater than 10");
// } else {
//   console.log("less than 10");
// }

// const fruits = [];
// fruits.push("apple", "banana", "grapes");
// console.log(fruits);

//Arrow operators etc

// const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

// console.log(materials.map((material) => material.length));

// syntax

// param => expression

// (param) => expression

// (param1, paramN) => expression

// param => {
//   statements
// }

// (param1, paramN) => {
//   statements
// }

// hello = () => "hello world!";
// console.log(hello());
// vals = (a) => "hello" + a;
// console.log(vals(10));

//cowsay

var cowsay = require("cowsay");
const Quote = require("inspirational-quotes");

console.log(
  cowsay.say({
    text: Quote.getRandomQuote(),
    e: "o-o",
    T: "U",
  })
);
