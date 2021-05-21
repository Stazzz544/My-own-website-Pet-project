const timeCounterBtn = document.querySelector('.time-counter__btn'),
		btnClear = document.querySelector('.time-counter__btn-clear');
			

timeCounterBtn.addEventListener('click', () => {
	const day = document.querySelector('.time-counter__day-inp').value,
			mounth = document.querySelector('.time-counter__mounth-inp').value,
			year = document.querySelector('.time-counter__year-inp').value,
			resultBlock = document.querySelector('.time-counter__result-wrapper'),
			wishDate = new Date(`${year}-${mounth}-${day}`),
			differenceTimeZoneMinutes = +wishDate + (wishDate.getTimezoneOffset() * 1000 * 60); 

	timeCounterBtn.style = "display: none";
	btnClear.style =  "display: block";	
	resultBlock.style =  "display: block";	

	appWrapperSize ();

	btnClear.addEventListener('click', () => {
		clearInterval(start);
		timeCounterBtn.style = "display: block";
		btnClear.style = "display: none";
		resultBlock.style =  "display: none";	
	});
	
	
	const start = setInterval(CalcDate, 1000);


	function CalcDate () {
		let nowDate = new Date(),
			differenceDate = differenceTimeZoneMinutes - nowDate,
			newYear = Math.trunc((differenceDate / 1000 / 60 / 60 / 24/ 365)),
			newMounth = Math.trunc((differenceDate / 1000 / 60 / 60 / 24 / 31) % 12),
			newDay = Math.trunc((differenceDate / 1000 / 60 / 60 / 24) % 31),
			newHour = Math.trunc((differenceDate / 1000 / 60 / 60) % 24),
			newMinute = Math.trunc((differenceDate / 1000 / 60) % 60),
			newSecond = Math.trunc((differenceDate / 1000) % 60),
			displayYear = document.querySelector('.time-counter__result-years'),
			displayMounth = document.querySelector('.time-counter__result-mounth'),
			displayDay = document.querySelector('.time-counter__result-days'),
			displayhour = document.querySelector('.time-counter__result-hour'),
			displayMinute = document.querySelector('.time-counter__result-minutes'),
			displaySecond = document.querySelector('.time-counter__result-seconds');
			
		if (newYear < 0 || newMounth < 0 || newDay < 0 || newHour < 0 || newMinute < 0 || newSecond < 0) {
			displayYear.innerHTML = '0';
			displayMounth.innerHTML = '0';
			displayDay.innerHTML = '0';
			displayhour.innerHTML = '0';
			displayMinute.innerHTML = '0';
			displaySecond.innerHTML = '0';
		} else {
			displayYear.innerHTML = newYear;
			displayMounth.innerHTML = newMounth;
			displayDay.innerHTML = newDay;
			displayhour.innerHTML = newHour;
			displayMinute.innerHTML = newMinute;
			displaySecond.innerHTML = newSecond;
		}
	}
});


