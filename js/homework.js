let name = "Ivan";
console.log(name);
console.log(typeof name);

let constName = "Mogylko";
console.log(constName);
console.log(typeof constName)

let age = 13
console.log(age)
console.log(typeof age)

const Mario = {
    name: "Mario",
    speed: 20,
    lifes: 3,
    score: 100,

    toShowName() {
     console.log(this.name);
        },
}
console.log(Mario);
Mario.toShowName()


const productslist = [
    "juice", "strawberry", {bread: "white", }
];

console.log(productslist);
console.log(productslist[0]);
console.log(productslist[1]);
console.log(productslist[2]);

productslist[1] = "watermelon"
console.log(productslist)

const funcExpression = function (juice, watermalon, bread) {
    console.log(juice + watermalon + bread);
  };
  funcExpression(20, 30, 10);


  let message = 'Добро пожаловать';
  let greet = prompt('Введите ваше имя');
  
  
  if(greet) {
    alert(`здравствуйте: ${greet}`);
  } else {
    alert('До свидания');
  }



  
  //s3
// const S3 = document.querySelector(".s3 ");


// //div-hider
// const Div = document.querySelector(".ant-carousel-hider");


// //div-arrow-left
// const DivLeft = document.querySelector(".ant-carousel-arrow-left");


// //ul
// const Ul = document.querySelector(".ant-carousel-list");


// //div-arrow-right
// const DivRight = document.querySelector(".ant-carousel-arrow-right");


// //div-dots
// const DivDots = document.querySelector(".ant-carousel-dots");



