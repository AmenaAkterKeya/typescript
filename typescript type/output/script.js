"use strict";
const programming = "hello typescript";
console.log(programming);
// string:Represents text data.
let names = "Alice";
console.log('string data type', names);
//number:Represents numeric values (both integers and floating point).
let integer = 32;
console.log("Integer ", integer);
// boolean:Represents true or false values.
let isActivate = true;
console.log("Boolean ", isActivate);
// null: Represents an intentional absence of any value.
let employee = null;
console.log("Null ", employee);
// undefined: Represents an uninitialized variable.
let alpa = undefined;
console.log("undefined ", alpa);
// object: The general object type (excluding primitives).
let obj = {
    names: "Alice",
    age: 34
};
console.log("object ", obj.age, " ", obj.names);
// Array: A list of values of a specific type.
let numbers = [1, 2, 3, 4];
let strings = ["a", "b", "c"];
console.log("Numbers:", numbers);
console.log("Strings:", strings);
// Tuple: An ordered set of values with fixed types.
let tuple = ["Alice", 25];
console.log("Tuple:", tuple);
// if variable is undefined then you console js like but if you declare then show error
let a;
console.log(a); // output: undefined
a = "Hello Guys";
console.log(a); // output: Hello Guys
a = 34;
console.log(a); // output:34
