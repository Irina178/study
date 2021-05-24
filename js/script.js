'use strict'
//1
// const productName = 'Droid'
// const pricePerItem = 2000
//2
let productName = 'Droid'
productName = 'Repair droid'
let pricePerItem = 2000
pricePerItem = 3500
//3
const topSpeed = 160
const distance = 617.54
const login = 'mango935'
let isOnline = true
let isAdmin = false
//4
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
//7
function sayHi() {
  console.log('Hello, this is my first function!')
}
sayHi()
//8
function add(a, b, c) {
  console.log(`Addition result equals ${a + b + c}`)
}
add(15, 27, 10)
add(10, 20, 30)
add(5, 10, 15)

//Оператор return используется для передачи значения из тела функции во внешний код.
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
//10
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
  //11
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
  //12
  function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
    // Change code below this line
  const message = `You ordered droids worth ${orderedQuantity*pricePerDroid+deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`   
    // Change code above this line
    return message;
  } 
  makeOrderMessage(2, 100, 50)
  makeOrderMessage(4, 300, 100)
  makeOrderMessage(10, 70, 200)
  //13
  function isAdult(age) {
    // Change code below this line
    const passed = age >=18;
  
    // Change code above this line
    return passed;
  }
  //14
  function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  // Change code below this line
const isMatch = SAVED_PASSWORD === password;

  // Change code above this line
  return isMatch;
}
//15

 