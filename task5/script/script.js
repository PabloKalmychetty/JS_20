"use strict"

const step = (x, y) => {
  let result = x;
  for (let i = 1; i < y; i++) {
      result *= x;
  }
  return result;
}
let x = prompt("x?", '');
let y = prompt("y?", '');
if (y <= 1) {
  alert('Степень ' + y +
      'не поддерживается, введите целую степень, большую 1'
      );
} else {
  console.log( step(x, y) );
}
