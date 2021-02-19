"use strict"

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