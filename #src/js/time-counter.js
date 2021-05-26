const timeCounterBtn = document.querySelector('.time-counter__btn'),
		btnClear = document.querySelector('.time-counter__btn-clear');
			

timeCounterBtn.addEventListener('click', () => {
	const day = document.querySelector('.time-counter__day-inp').value,
			mounth = document.querySelector('.time-counter__mounth-inp').value,
			year = document.querySelector('.time-counter__year-inp').value,
			resultBlock = document.querySelector('.time-counter__result-wrapper'),
			error = document.querySelector('.time-counter__error'),
			wishDate = new Date(`${year}-${mounth}-${day}`),
			differenceTimeZoneMinutes = +wishDate + (wishDate.getTimezoneOffset() * 1000 * 60); 

	error.classList.remove('time-counter__error_active');

	timeCounterBtn.style = "display: none";
	btnClear.style =  "display: block";	
	

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
			newDay = Math.trunc((differenceDate / 1000 / 60 / 60 / 24)),
			newHour = Math.trunc((differenceDate / 1000 / 60 / 60) % 24),
			newMinute = Math.trunc((differenceDate / 1000 / 60) % 60),
			newSecond = Math.trunc((differenceDate / 1000) % 60),
			displayDay = document.querySelector('.time-counter__result-days'),
			displayhour = document.querySelector('.time-counter__result-hour'),
			displayMinute = document.querySelector('.time-counter__result-minutes'),
			displaySecond = document.querySelector('.time-counter__result-seconds');
			

		if (newDay < 0 || newHour < 0 || newMinute < 0 || newSecond < 0) {
			displayDay.innerHTML = '0';
			displayhour.innerHTML = '0';
			displayMinute.innerHTML = '0';
			displaySecond.innerHTML = '0';
			
			resultBlock.style =  "display: block";	
			appWrapperSize (); // функция в главном документе
			
		} else if (isNaN(newDay) === true || isNaN(newHour) === true || isNaN(newMinute) === true || isNaN(newSecond) === true) {
			error.classList.add('time-counter__error_active');
			resultBlock.style =  "display: none";	
		} else {
			displayDay.innerHTML = newDay;
			displayhour.innerHTML = newHour;
			displayMinute.innerHTML = newMinute;
			displaySecond.innerHTML = newSecond;
			
			resultBlock.style =  "display: block";	
			appWrapperSize (); // функция в главном документе

		}


	}
});


