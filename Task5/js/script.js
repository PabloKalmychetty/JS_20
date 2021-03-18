"use strict"

//создаем переменные
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const btnGeo = document.querySelector(".btnGeo");
const outPut = document.getElementById("output");
const wsUri = "wss://echo.websocket.org/";

let webSocket;

//обработчик для кнопки Отправить
btn.addEventListener("click", () => {
	webSocket = new WebSocket(wsUri);
	//вызываем функцию для отправки сообщения
	webSocket.onopen = function(evt){
    	userMessage();
  	};
	
	//обработка события при получении события от сервера
	webSocket.onmessage = function(evt){
    	serverMessage(
      		'<span style="color: blue;">Сообщение сервера: ' + evt.data+'</span>'
    	);
    	
  	 };
	 	
});

let serverMessage = (message) => {
	outPut.insertAdjacentHTML('beforeend', `<div class="output" style = "text-align: left;" >${message}</div><br>`);
 	
}

let userMessage = () => {
	outPut.insertAdjacentHTML('beforeend', `<div class="output" style = "text-align: right;" >Сообщение отправителя:  ${input.value}</div><br>`);
	webSocket.send(input.value);
}

//обработчик для кнопки Гео-локация
btnGeo.addEventListener("click", () => {
	if (!navigator.geolocation) {  } 
		else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
	 	
})

let success = (position) => {
	
	let latitude = position.coords.latitude;
	let longitude = position.coords.longitude;
	outPut.insertAdjacentHTML ('beforeend',
		`<div class="output" style = "text-align: right;"  
			>Данные гео-локации:  
			<a href="https://www.openstreetmap.org/#map=18/${latitude}/${longitude}"> https://www.openstreetmap.org/</a>
		</div><br>`);
							
}
let error = () => {
  
  outPut.insertAdjacentHTML ('afterbegin',`<div class="output" style = "text-align: right;" >Данные гео-локации:  Location information is not available </div><br>`);
}