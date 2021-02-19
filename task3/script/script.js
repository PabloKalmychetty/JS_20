"use strict"

const getNum = num1 => {

  return function getNum2(num2) {
    console.log(num1 + num2);
  }

}

const getSum = getNum(2);
getSum(55);