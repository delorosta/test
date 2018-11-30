'use strict';

let incr = 10,
    decr = 10;

console.log(incr++, decr--);
console.log(incr, decr);
console.log(45%7);
console.log(4 === 4);   

let isChecked = true,
    isClosed = false;

console.log(isChecked || !isClosed);    

console.log(4 + "roll");


let number = 777;

console.log(number);

let string1 = "SUPER";

console.log(string1);

let boolean = true;

console.log(boolean);

let persone = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(persone.name, persone.age, persone.isMarried);

let arr = ['a.png', 'b.png', 'c.png', 'd.png'];

console.log(arr[3]);

let string = true;

console.log(string);

alert("ПРИВЕТ!");

let answer1 = confirm("YES?");
console.log(answer1);

let answer2 = +prompt("Who You Are?", "Man");
console.log(typeof(answer2));