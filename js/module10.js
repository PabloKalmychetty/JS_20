"use strict"
// 10.3 Логический тип и ветвление
// задание 1

 /*let number = prompt("Введите любое число");

 if(isNaN(number)) {
     console.log("Вы ошиблись")
 } else {
     console.log('Это число')
 }

 if(number%2 == 0) {
     console.log('Число четное')
 } else {
    console.log('Число нечетное')
 }
 */

 /* Завершение задания 1*/

 // задание 2

 /*
 let X = undefined;

 if(typeof X === 'number') {
     console.log("Это число")
 } else if(typeof X === 'string'){
     console.log("Это строка")
 } else if(typeof X === 'boolean') {
    console.log("Это логическое значение")
 } else {
     console.log("Логический тип не определен")
 }
*/
 // Завершение второго задания

 //10.4 Строки. Числа

 // Задание 3
/*
 const str = 'world';
 const reverse = str.split('').reverse().join('');
 console.log(reverse);
*/
 // Завершение третьего задания

 // Задание 4
/*
 let i = Math.floor(Math.random() * 100) + 1;
 console.log(i);
*/
 // Завершение четвертого задания

 // 10.5 Массивы и базовые методы работы с ними.

 // Задание 5
/*
 let arr = [1,3,5,7,78,101,121,433,555,668];
 console.log(arr.length);

 arr.forEach((item) => {
     console.log(item);
 })

 let result = arr.map((item) => {
    return item;
 });
 
 console.log(result);
 */
 // Завершение пятого задания

 //10.6 Циклы

 // Задание 6
 /*
 let arr = [3,3,3,3,3,3,3,3],
     ar = [3,3,3,3,3, "3"];

 let foo = (a) => {
    return !a.some((b) => {
        return b !== a[0]
    })
 };

 console.log([foo(arr), foo(ar)])
 */
 // Завершение шестого задания

// задание 7
/*
let arr = [0, 2, 4, 5, 6, 7, 9, 11, '7', 66];

const countEvenOddNumbers = arr => {
    let oddNumbers = 0,
        evenNumbers = 0,
        zero = 0;
          arr.map( i => {
              if(i === 0) return zero++;
              if(typeof i !== 'number') return null;
              if(i%2 === 0) return evenNumbers++;
              return oddNumbers++;
          })
          console.log('Четных чисел - ', evenNumbers);
          console.log('Нечетных чисел - ', oddNumbers);
          console.log('Нулей - ', zero)

}

countEvenOddNumbers(arr);
*/
// Завершение седьмого задания

// задание 8

let map = new Map([
    ["Petr Cheh", "Goalkeeper"],
    ["Jon Terry", "Defender"],
    ["Franc Lampard", "Halfback"],
    ["Didie Drogba", "Forward"]
]);

for(let name of map.values()) {
    console.log(name)
}

for(let elem of map) {
    console.log(elem)
}