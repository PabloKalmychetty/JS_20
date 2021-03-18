"use strict"

const btn = document.querySelector(".btn");
const screenSize = document.querySelector(".screenSize");
const status = document.querySelector('#status');
const mapLink = document.querySelector('#map-link');

const error = () => {
	status.textContent = 'Невозможно получить Ваше местоположение';
  };

function ScreenSize() {
	screenSize.insertAdjacentHTML ('afterbegin',`width: ${window.screen.width}, height: ${window.screen.height}   `);
}

const success = (position) => {
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;
	status.textContent = `Широта: ${latitude}, Долгота: ${longitude}`;

	mapLink.href = 
	`https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
	mapLink.textContent = 'Ссылка на карту';
	
}

btn.addEventListener("click", () => {
	ScreenSize();
	mapLink.href = '';
	mapLink.textContent = '';

	if(!navigator.geolocation) {
		status.textContent = 'Geolocation не поддерживается';
	  } else {
		  status.textContent = 'Определение местоположения...';
    	navigator.geolocation.getCurrentPosition(success, error);
  }
 })
 