"use strict"

let name;  
let date = new Date();
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function zero(a) {
	if (a < 10) {
	  a = '0' + a;
	}
	return a;
  };

if (localStorage.length < 1) {
	name = prompt("Добро пожаловать! Назовите, пожалуйста, ваше имя");
	localStorage.setItem("Name", name); 
	localStorage.setItem("Date", date);
} else {
	alert(`Добрый день, ${localStorage.getItem('Name')}! 
  Давно не виделись. В последний раз вы были у нас 
  ${date.getDate()} ${monthNames[date.getMonth()]}, ${date.getFullYear()} в ${zero(date.getHours())} : ${zero(date.getMinutes())}`)
	console.log(date.getMinutes())
}

