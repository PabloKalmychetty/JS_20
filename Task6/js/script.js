"use strict"

const myPromise = new Promise((resolve, reject) => {
let randomNum = Math.ceil(Math.random()*100);
const even = randomNum => !(randomNum % 2);
function getNum() {
	console.log('Четность:',randomNum, even(randomNum));
}

setTimeout(getNum, 3000, randomNum)
	
	if(even(randomNum)) {
		resolve(`Завершено успешно! Сгенерированное число ${randomNum}`);
	} else {
		reject(`Завершено с ошибкой! Сгенерированное число ${randomNum}`);
	}
	
});

myPromise
	.then((result) => {
		console.log(result);
	})
	.catch((error) => {
		console.log(error);
	});


