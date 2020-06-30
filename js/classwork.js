//переменые let & const
let name; //объявление переменой
console.log(name); //undefine

name = "Aleksa"; //инициализация переменой
console.log(name); // Aleksa

name = "Aleksandra"; // переприсвоение значения
console.log(name); // Aleksandra

//const lastName - нельзя объявить без значения
const lastName = "Hrevtsova";
console.log(lastName);

//ТТИПЫ ДАНЫХ

//ПРИМИТИВЫ
//1 - String ('', "", ``)
let myName = "Aleksandra";
console.log(myName);
console.log(typeof myName);

//2 - Number
let age = 30;
console.log(age);
console.log(typeof age);

//3 - Boolean (true or false)
let isOnline = true;
console.log(isOnline);
console.log(typeof isOnline);

//4 - Undefined
let products;
console.log(products);
console.log(typeof products);

//5 - Null
let cart = null;
console.log(cart); //null
console.log(typeof cart); // object специальная ошыбка джава скрипта

//СЛОЖНЫЕ
//Object
const obj = {};
console.log(obj);
const sasha = {
  name: "Sasha",
  lastName: "Hrevtsova",
  age: 30,
  hairColor: "brown",
  married: false,
  children: true,

  toShowName() {
    console.log(this.name);
  },
};
console.log(sasha);
sasha.name = "aleksandra";
console.log(sasha);

sasha.toShowName();
sasha.height = 172;
console.log(sasha)

//Array
const arr = [];
console.log(arr);

const productslist = [
  "apples",
  { meat: "chicken", eggs: 10, bread: "white" },
  null,
];

console.log(productslist);

console.log(productslist[0]);
console.log(productslist[1]);
console.log(productslist[2]);

productslist[0] = "oranges";

console.log(productslist);

//многомерные массивы
const newArr = [
  [1, 2, 3],
  ["alpha", "beta", "gama"],
  [undefined, null],
];
console.log(newArr);
console.log(newArr[0][0]);
console.log(newArr[0][1]);
console.log(newArr[0][2]);

console.log(newArr[1][0]);
console.log(newArr[1][1]);
console.log(newArr[1][2]);

console.log(newArr[2][0]);
console.log(newArr[2][1]);

//Function
//function expression - функциональное выражение

const funcExpression = function (a, b, c) {
  console.log(a + b + c);
  console.log("Hello!");
  console.log("I`m a fuction Expression!");
};
funcExpression(1, 2, 3);

const arrowFunc = (a, b, c) => {
  console.log(a + b - c);
};
arrowFunc(19, 45, 25);

function funcDeclaration(a, b, c) {
  console.log(a * b * c);
}

funcDeclaration(2, 4, 5);

console.log(5 > 7);
console.log(4 > 2);
console.log(3 >= 3);
console.log(3 >= 4);
//строгое равенство
console.log(5 === "5"); // false
console.log(true === 1); // false
//не строгое равенство
console.log(5 == "5"); // true
console.log(5 == "4"); //false
console.log(true == 1); //true
console.log(false == 0); // true
console.log(undefined == 0); // false
console.log(undefined == 1); // false
console.log(null == 0);

console.log(5 !== "5"); // строгое не равенство true

console.log(5 != "5"); // false не строгое не равенство
console.log(5 != "4"); // true

// ! - знак отрецания или переворачивает даные
console.log(!true); // false
console.log(!false); //true

//преобразование типов
// к строке
let num = 12;
console.log(num);
console.log(typeof num);

num = num + "";
console.log(num);
console.log(typeof num);

let newNum = true;
console.log(newNum);
console.log(typeof newNum);

newNum = String(newNum);
console.log(newNum);
console.log(typeof newNum);

let stringNum = "34";
console.log(stringNum);
console.log(typeof stringNum);

stringNum = +stringNum;
console.log(stringNum);
console.log(typeof stringNum);

let boolNum = true;
console.log(boolNum);
console.log(typeof boolNum);

boolNum = Number(boolNum);
console.log(boolNum);
console.log(typeof boolNum);

let numValue = 1;
console.log(numValue);
console.log(typeof numValue);

numValue = Boolean(numValue);
console.log(numValue);
console.log(typeof numValue);

// folsy values js
console.log(Boolean(0));//false
console.log(Boolean(""));//false
console.log(Boolean(null));//false
console.log(Boolean(undefined));//false
console.log(Boolean(NaN));//false
console.log(Boolean(false));//false


console.log(Boolean(1));//true
console.log(Boolean(" "));//true
console.log(Boolean(' '));//true
console.log(Boolean(` `));//true
console.log(Boolean(Infinity));//true
console.log(Boolean(true));//true


//&& - логическое и
console.log(1 && true && 100);
console.log(1 && true);
console.log(0 && true);
console.log(false && true);
console.log(1 && 0 && true && false);
console.log(1 && false && true && 0);
// || - логическое или
console.log(1 || true || 100);
console.log(1 || true);
console.log(0 || true);
console.log(false || true);
console.log("" || 0 || undefined || false);
console.log(NaN || false || null || 0);
// ! - логическое не
console.log(!1); 
console.log(!0); 
console.log(!""); 
console.log(!NaN);
console.log(!undefined);
console.log(!null)



// let msg = confirm('are you ready?')
// console.log(msg)

// let greet = alert('Welcom!')
// console.log(greet)


// let userData = prompt("Enter your name please")
// console.log(userData)

//ВЕТЛЕНИЯ
if(1 > 0) {
  console.log('Hellow World!');
}


// let message = 'Добро пожаловать';
// let enteredData = prompt('Введите число от 1 до 5');


// if(enteredData >= 1 && enteredData <= 5) {
//   console.log('Спасибо вы вели подходящее число');
// } else {
//   console.log('Вы ввели не подходящее значение');
// }




for (let i = 0; i <= 10; i +=1) {
    console.log(`Интерация №${i+1} - ${i}`);
}


const results = [1, 11, 23, 45, 32, 78, 988, 45];
console.log(results);
console.log("длина массива", results.length);

for (let i = 0; i < results.length; i += 1){
    if (results[i] >= 10) {
      console.log("трехзначный элемент", results[i])
    } else if ( results[i] >= 10 && results[i] < 100){
      console.log("двухзначный элемент", results[i]);
    }else {
      console.log("это число однозначное");
    }
}



const projectBody = document.querySelector('body');
console.log(projectBody);
console.dir(projectBody);



const headerWrapper = document.querySelector('.header_wrapper');
console.log(headerWrapper);
console.dir(headerWrapper);


console.log(headerWrapper.title);
headerWrapper.title = "Hello!";
console.log(headerWrapper.title);

// const logo = document.querySelector('.logo')
// console.dir(logo);
// console.log(logo.textContent);

const logo = document.getElementById('main-logo');
console.log(logo);
console.dir(logo);

logo.textContent = "Photo diary";
logo.style.fontSize = '36px';
logo.classList.add('example');



const navMenu = document.querySelector('ul[data-action="action"]');
console.log(navMenu);
console.dir(navMenu);
navMenu.style.background = "green";
navMenu.style.margin = "10px";
