'use strict'
//1
// const productName = 'Droid'
// const pricePerItem = 2000
//2 Переопределение значения переменной
let productName = 'Droid'
productName = 'Repair droid'
let pricePerItem = 2000
pricePerItem = 3500
//3 Типы примитивов (числа, строки, були)
const topSpeed = 160
const distance = 617.54
const login = 'mango935'
let isOnline = true
let isAdmin = false
//4 Математические операторы
const pricePerItem1 = 3500
const orderedQuantity = 4
const totalPrice = pricePerItem1 * orderedQuantity
console.log(totalPrice)
//5
const productName2 = 'Droid'
const pricePerItem2 = 3500
const message = `You picked ${productName2}, price per item is ${pricePerItem2} credits`
console.log(message)
// 6
const pricePerDroid3 = 800
const orderedQuantity3 = 6
const deliveryFee3 = 50
const totalPrice3 = pricePerDroid3 * orderedQuantity3 + deliveryFee3
console.log(totalPrice3)
const message2 = `You ordered droids worth ${totalPrice3} credits. Delivery (${deliveryFee3} credits) is included in total price.`
console.log(message2)
//7 Объявление и вызов функции
//Функция - это подпрограмма, независимая часть кода, предназначенная для многократного выполнения конкретной задачи с разными начальными значениями.
//Функцию можно представить как чёрный ящик, она получает что-то на входе (данные), и возвращает что-то на выходе (результат выполнения кода внутри неё).
// 1. Объявление функции multiply
function multiply() {
  // Тело функции
  console.log("multiply function invocation");
}

// 2. Вызовы функции multiply
multiply();
////////////

function sayHi() {
  console.log('Hello, this is my first function!')
}
sayHi()
//8 Параметры и аргументы
//В круглых скобках после имени функции идут параметры - перечисление данных, которые функция ожидает при вызове.
//Параметры - это локальные переменные доступные только в теле функции. Они разделяются запятыми. 
//Параметров может быть несколько или вообще их может не быть, тогда записываются просто пустые круглые скобки.
//При вызове функции, в круглых скобках можно передать аргументы - значения для объявленных параметров функции.
function add(a, b, c) {
  console.log(`Addition result equals ${a + b + c}`)
}
add(15, 27, 10)
add(10, 20, 30)
add(5, 10, 15)

//9 Оператор return используется для передачи значения из тела функции во внешний код.
//Когда интерпретатор встречает return, он сразу же выходит из функции (прекращает её выполнение),
// и возвращает указанное значение в то место кода, где функция была вызвана.
function multiply(x, y, z) {
  console.log('Код до return выполняется как обычно')
  // Возвращаем результат выражения умножения
  return x * y * z
  console.log('Этот лог никогда не выполнится, он стоит после return')
}
// Результат работы функции можно сохранить в переменную
let result = multiply(2, 3, 5)
console.log(result) // 30
result = multiply(4, 8, 12)
console.log(result) // 384
result = multiply(17, 6, 25)
console.log(result) // 2550
//9
function add(a, b, c) {
  return a+b+c;
  }
  add(2, 5, 8); // 15
  console.log(add(15, 27, 10));
  console.log(add(10, 20, 30));
  console.log(add(5, 10, 15));
//10 шaблонные  строки в функции
function makeMessage (name, price) {
    // Change code below this line
     const message = `You picked ${name}, price per item is ${price} credits`;
    // Change code above this line
    return message;
  };
   console.log(message)
  makeMessage('Radar', 6150)
  makeMessage('Scanner', 3500)
  makeMessage('Reactor', 8000)
  makeMessage('Engine', 4070)
  //11 математические операторы
  function calculateTotalPrice (orderedQuantity, pricePerItem) {
    const totalPrice = (orderedQuantity * pricePerItem);
    return totalPrice;
  };
  console.log(totalPrice)
  calculateTotalPrice(5, 100)
  calculateTotalPrice(8, 60)
  calculateTotalPrice(3, 400)
  calculateTotalPrice(1, 3500)
  calculateTotalPrice(12, 70)

  function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
    // Change code below this line
  const message = `You ordered droids worth ${orderedQuantity * pricePerDroid + deliveryFee} credits. Delivery (${deliveryFee} credits.)  is included in total price.`;
    // Change code above this line
    return message;
  } 
  makeOrderMessage(2, 100, 50)
  makeOrderMessage(4, 300, 100)
  makeOrderMessage(10, 70, 200)
  console.log(message)
  //12 математические операторы
  function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
    // Change code below this line
  const message = `You ordered droids worth ${orderedQuantity*pricePerDroid+deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`   
    // Change code above this line
    return message;
  } 
  makeOrderMessage(2, 100, 50)
  makeOrderMessage(4, 300, 100)
  makeOrderMessage(10, 70, 200)
  //13 Операторы сравнения >, >=, < и <=
  function isAdult(age) {
    // Change code below this line
    const passed = age >=18;
  
    // Change code above this line
    return passed;
  }
  //14 Операторы сравнения === (строгое равно)и !==(не строгое равно)

  function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  // Change code below this line
const isMatch = SAVED_PASSWORD === password;

  // Change code above this line
  return isMatch;
}
//15 Инструкция if...else

function checkAge(age) {
  let message;

  if (age>=20) { // Change this line
    message = 'You are an adult';
  } else {
    message = 'You are a minor';
  }

  return message;
}
 //16 в данной задачке нужно стравнивать available, ordered
 //available - общее количество товаров на складе
//ordered - единиц товара в заказе
 function checkStorage(available, ordered) {
  let message;
  // Change code below this line
   if ( ordered > available) { 
    message = 'Not enough goods in stock!';
  } else {
    message = 'Order is processed, our manager will contact you.';
  }
  // Change code above this line
  return message;
}
//17 Комбинированный оператор присвоения
//let age = 25;
// Просто более краткая запись, работает также
//age += 1;
//console.log(age); // 26
let a = 5;
a+=2
let b = 10;
b-=4
let c = 15;
c*=3
let d = 20;
d/=10
//18 if ...else и математические оператори
function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line
const totalPrice = pricePerDroid*orderedQuantity
if (totalPrice > customerCredits){
message = 'Insufficient funds!'}
  else {
  message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`
  
  }
  // Change code above this line
  return message;
}
// 19 Блок else...if
function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password === null) { // Change this line
    message =  'Canceled by user!';
  } else if (password === ADMIN_PASSWORD) { // Change this line
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }

  return message;
}
//20
function checkStorage(available, ordered) {
  let message;
  // Change code below this line
if (ordered === 0){
message = 'There are no products in the order!'
}else if (ordered > available ){
message = 'Your order is too large, there are not enough items in stock!'
} else {
 message = 'The order is accepted, our manager will contact you'
}
  return message;
}
//21 Логическое «И» (оператор &&)
// если хоть 1 false то false
function isNumberInRange(start, end, number) {
  
  const isInRange = (number >= start && number <= end);
  return isInRange;
}
isNumberInRange(10, 30, 17);
isNumberInRange(10, 30, 5) ;
isNumberInRange(20, 50, 24);
isNumberInRange(20, 50, 76);
//22 Логическое «ИЛИ» (оператор ||)
// если хоть 1 true то true
function checkIfCanAccessContent(subType) {
  const canAccessContent = subType === `pro` || subType === `vip`; // Change this line
  return canAccessContent;
}
checkIfCanAccessContent("pro") //возвращает true
checkIfCanAccessContent("starter") //возвращает false
checkIfCanAccessContent("vip") //возвращает true
checkIfCanAccessContent("free") //возвращает false
//23 Логическое «НЕ» (оператор !)  - унарный оператор 
//булевый , меняет на противоположный , тоесть был 1 станет 0, был 0 станет 1

//Функция isNumberNotInRange(start, end, number) проверяет, 
//не входит ли число в промежуток. То есть число должно быть меньше либо равно start и больше либо равно end. 
//Результатом выражения проверки будет буль true или false.
//Она объявляет три параметра, значения которых будут задаваться во время её вызова:
//number - число, не вхождение которого проверяется
//start - начало числового промежутка
//end - конец числового промежутка
//Присвой переменной isNotInRange выражение инверсии значения переменной isInRange используя оператор !.
function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange; // Change this line
  return isNotInRange;
}
isNumberNotInRange(10, 30, 17)// возвращает false
isNumberNotInRange(10, 30, 5) //возвращает true
isNumberNotInRange(20, 50, 24)// возвращает false
isNumberNotInRange(20, 50, 76)// возвращает true
// тоесть в єтой задачке выражение const isInRange = number >= start && number <= end давали бы другие булевые ответы ,
// но оператор не заменил их на противоположные
//24
function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Change code below this line
if (totalSpent >= 50000){
discount = GOLD_DISCOUNT;
} else if (totalSpent >= 20000 && totalSpent < 50000){
  discount = SILVER_DISCOUNT;
} else if (totalSpent >= 5000 && totalSpent < 20000){
  discount = BRONZE_DISCOUNT;
} else {
 discount = BASE_DISCOUNT;}
  // Change code above this line
  return discount;
}
//getDiscount(137000//) возвращает 0.1
//getDiscount(46900)// возвращает 0.05
//getDiscount(8250) //возвращает 0.02
//getDiscount(1300) //возвращает 0
//getDiscount(5000) //возвращает 0.02
//getDiscount(20000)// возвращает 0.05
//getDiscount(50000)// возвращает 0.1
//25 Тернарный оператор ?:
function checkStorage(available, ordered) {
  let message;
  // Change code below this line

  message = ordered > available ?  "Not enough goods in stock!":"The order is accepted, our manager will contact you";
  // Change code above this line
  return message;
}

