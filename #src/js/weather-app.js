//============================
const container = document.querySelector('.weather-app-container'),
		title = document.createElement('h1'),
		divider1 = document.createElement('div'),
		flexContainer = document.createElement('div'),
		flexContainerLeftSide = document.createElement('div'),
		flexContainerRightSide = document.createElement('div'),
		subtitle = document.createElement('h2'),
		select = document.createElement('select'),
		date = document.createElement('div'),
		time = document.createElement('div'),
		divider2 = document.createElement('div'),
		temperature = document.createElement('div'),
		cities = {
			2643743: 'London',
			5128638: 'New York',
			498817: 'Saint-Petersburg',
			703448: 'Kyiv',
			1261481: 'New Delhi',
			2013348: 'Vladivostok',
			2968815: 'Paris',
			2950158: 'Berlin',
		};

//add textContent
title.textContent = `Weather forecasts`;
subtitle.textContent = `chose city:`;

//add classes or id
title.classList.add('weather-app-title');
divider1.classList.add('weather-app-divider');
divider2.classList.add('weather-app-divider');
flexContainer.classList.add('weather-app-flex-container');
flexContainerLeftSide.classList.add('weather-app-flex-container__left');
flexContainerRightSide.classList.add('weather-app-flex-container__right');
subtitle.classList.add('weather-app-subtitle');
select.id = 'weather-app-city';
date.classList.add('weather-app-date');
time.classList.add('weather-app-time');
temperature.classList.add('weather-app-temperature');

//add to container
container.append(title);
container.append(divider1);
container.append(flexContainer);
container.append(divider2);
//add to flexContainer
flexContainer.append(flexContainerLeftSide);
flexContainer.append(flexContainerRightSide);
//leftside
flexContainerLeftSide.append(subtitle);
flexContainerLeftSide.append(select);
//rightside
flexContainerRightSide.append(date);
flexContainerRightSide.append(time);
container.append(temperature);

appendCityes(cities, select);


function appendCityes (arr, addInBlock) {
	for (let key in arr) {
		addInBlock.innerHTML += `<option class="city-in-list" value="${key}">${arr[key]}</option>`;
	}
}
//==============================


const param = {
	"url" : "https://api.openweathermap.org/data/2.5/",
	"appid" : "67f0e05afc2d24fac3b3c7fa155cd34e"
};

function getWeather() {
	
	const cityId = document.querySelector('#weather-app-city').value;
	fetch(`${param.url}weather?id=${cityId}&lang=en&units=metric&APPID=${param.appid}`)
	.then(weather => {
			return weather.json();
		}).then(showWeather);
}


function showWeather(data) {

	let dateParam = timeNormalize(data.timezone);
	dateToDisplay(dateParam, date);
	timeToDisplay(dateParam, time);
	interval(data);
	temperatureToDisplay(data, temperature);
}


function interval (data) {
	let timer = setInterval (() => {
		let dateParam = timeNormalize(data.timezone);
		dateToDisplay(dateParam, date);
		timeToDisplay(dateParam, time);
	}, 1000);

	const cityList = document.querySelector('#weather-app-city');
	cityList.addEventListener('click', () => {
			clearInterval(timer);
	});
}

function temperatureToDisplay (data, block) {
	let deg = data.main.temp,
		 degFeel = data.main.feels_like,
		 description = data.weather[0].description,
		 windSpeed = data.wind.speed,
		 img = data.weather[0].icon;
		 
	//console.log(deg);
	//console.log(degFeel);
	//console.log(description);
	//console.log(windSpeed);
	//console.log(img);

	block.innerHTML = `
	<div class="weather-app-temp-flex">

		<div class="temp-flex__left">
			<div class="weather-app-temp-text">Weather at this moment:</div>
			<div class="weather-app-temp-text">degree: ${deg}&deg</div>
			<div class="weather-app-temp-text">degree feel: ${degFeel}&deg</div>
			<div class="weather-app-temp-text">wind speed: ${windSpeed} m/s</div>
		</div>

		<div class="weather-app-temp-flex__right">
			<img class="weather-app-temp-img" src="http://openweathermap.org/img/wn/${img}@2x.png" alt="img">
			<div>${description}</div>
		</div>

	</div>
	`;
}

function dateToDisplay (dateParam, date) {
	let day = dateParam.getDate(),
		 month = dateParam.getMonth();

	month = lessThen10(month);
	day = lessThen10(day);

	date.innerHTML = `Today is: <span>${day}.${+month+1}.${dateParam.getFullYear()}</span>`;
}


function timeToDisplay (dateParam, time) {
	let hours = dateParam.getHours(),
		 minutes = dateParam.getMinutes(),
		 seconds = dateParam.getSeconds();

	hours = lessThen10(hours);
	minutes = lessThen10(minutes);
	seconds = lessThen10(seconds);

	time.innerHTML = `time in chosen city: <br> 
	<div class ="time__out">${hours} : ${minutes} : ${seconds}</span>`;
}


function lessThen10 (num) {
	if (num < 10) num = '0'+ num;
	return num;
}


function timeNormalize (timezone) {
	let startDate = new Date(),
		 timezoneOffset = startDate.getTimezoneOffset() * 60 * 1000,
		 utfTime = new Date(+startDate + timezoneOffset),
		 timeInChosenCity = new Date (+utfTime + timezone*1000);

	return timeInChosenCity;
}




document.querySelector('#weatherGetDataFirstTime').onclick = getWeather;
document.querySelector('#weather-app-city').onchange = getWeather;