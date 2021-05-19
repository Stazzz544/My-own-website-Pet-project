

let fuelCalculatorBtn = document.querySelector('.fuel-calculator__btn');

fuelCalculatorBtn.addEventListener('click', () => {
	let result = document.querySelector('.fuel-calculator__result'),
 		 distance = document.querySelector('.fuel-calculator__distans-enter').value,
 		 fuelConsumption = document.querySelector('.fuel-calculator__fuel-consumption-enter').value,
		 fuelPrice = document.querySelector('.fuel-calculator__fuel-price-enter').value,
		 total = (distance / 100) * fuelConsumption * fuelPrice;
		 result.style = 'padding: 15px 20px';
		 if (isNaN(total)){
			result.innerHTML =  `некорректный ввод`;
		 } else {
			result.innerHTML = ` стоимость топлива: ${+total.toFixed(2)} руб.`;
		 }

});