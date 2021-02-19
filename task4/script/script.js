"use strict"


const printNumbers =(from, to) => {
  let current = from;

  const go = () => {
    console.log(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }

  go();
  let timerId = setInterval(go, 1000);
}

printNumbers(4, 20);
