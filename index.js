
/* TASK#1 | LEVEL #1*/

const prompt = require('prompt-sync')();
let login = prompt ("Введіть логін: ")
let password = prompt ("Введіть ваш пароль: ")

if(login === "admin" && password === "12345"){
    console.log("Вітаю, вхід успішний!))")
}else{
    console.log("Вибачте, доступ закритий!((")
}

/* TASK#2 | LEVEL #1*/

const prompt = require('prompt-sync')();
let age = prompt("Введіть ваш вік: ")
if(age>=18 && age>=0){
    console.log("Доступ наданий!")
}else{
    console.log("Доступ обмеждено!")
}


/* TASK#3 | LEVEL #1*/

const prompt = require('prompt-sync')();
let price = prompt("Введіть ціну товару для розрахунку: ")
let sale = 15
let result = price + sale + (sale/100)
console.log(result)


/* TASK#4 | LEVEL #2*/

const prompt = require('prompt-sync')();
let email = prompt("Введіть вашу пошту: ")

if(email.length<=8 && email.length<340){
    console.log("Успішно!!!))")
}else{
    console.log("Шановний, треба щоб email був не більше 8 символів!!!")
}
if (!email.includes("@")) {
    console.log("Відсутня @ в пошті");
} else if (!email.includes(".")) {
    console.log("Відсутня . в пошті");
}
let password = prompt("Введіть ваш пароль: ");
if (password.length >= 8 && password.length <= 16) {
    let hasNumbers = /[0-9]/.test(password); 
    let hasLetters = /[a-zA-Z]/.test(password);
    
    if (hasNumbers && hasLetters) {
        console.log("Успішний вхід!!!");
    } else {
        console.log("Пароль має містити і букви, і цифри.");
    }
} else {
    console.log("Пароль має бути більше 8 символів та менше 16.");
}

const prompt = require('prompt-sync')();
let birthYear = +prompt("Введіть свій рік народження: ");
let age = 2025 - birthYear; 

if (age > 17 && age < 100) {
    console.log("Успішно!");
} else {
    console.log("Вік має бути більше 17 років і менше 100 років.");
}
 

