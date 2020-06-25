//переменые let & const
let name; //объявление переменой
console.log(name); //undefine

name = 'Aleksa' //инициализация переменой
console.log(name); // Aleksa

name = 'Aleksandra'; // переприсвоение значения
console.log(name); // Aleksandra

//const lastName - нельзя объявить без значения
const lastName = 'Hrevtsova';
console.log(lastName)

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
console.log(products)
console.log(typeof products)

//5 - Null
let cart = null;
console.log(cart); //null
console.log(typeof cart) // object ошыбка джава скрипта

//СЛОЖНЫЕ
//Object
//Array
//Function
//Symbol