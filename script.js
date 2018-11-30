'use strict';

let num = 50;

(num == 50) ? console.log("Yes!"): console.log("No!");

let num1 = 30;

switch (num1) {
    case 30:
        console.log("Yes!");
        break;
    default:
        console.log("WTF?");
        break;
}

let numb = 30;

while (numb < 40) {
    console.log(numb);
    numb++;
}

for (let i = 1; i < 8; i++) {
    if (i == 6) {
    continue;
    }
    console.log(i)
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