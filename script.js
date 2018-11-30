'use strict';

let num = 50;

(num == 50) ? console.log("Yes!"): console.log("No!");

let num1 = 30;

switch (num1) {
    case num1 < 49:
        console.log("0000");
        break;
    case num1 == 30:
        console.log("1111");
        break;
    default:
        console.log("WTF?");
        break;
}

let incr = 10,
    decr = 10;

console.log(incr++, decr--);
console.log(incr, decr);
console.log(45 % 7);
console.log(4 === 4);

let isChecked = true,
    isClosed = false;

console.log(isChecked || !isClosed);

console.log(isChecked && !isClosed);

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
console.log(typeof (answer2));