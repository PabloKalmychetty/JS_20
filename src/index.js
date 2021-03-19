"use strict"
export function myltiply(a, b) {
    return a * b;
  }

  export function getPifagor(a, b, c) {
    let result;
    if (a ** 2 + b ** 2 == c ** 2) {
        result = 'Это прямоугольный треугольник!';
    } else {
        result = 'Это не прямоугольный треугольник!';
    }
    return result;
}

export function getMaxNum(a, b, c) {
    let result;
    if (a > b) {
        if (a > c) {
            result = "max is a";
        } else {
            result = "max is c";
        }
    } else if (b > c) {
        result = "max is b";
    } else {
        result = "max is c";
    }
    return result;
}

export function evenNumber(n) {
    let result;
    if (n % 2 === 0) {
        result = 'Число ' + n + ' четное!';
    } else {
        result = 'Число ' + n + ' нечетное!';
    }
    return result;
}