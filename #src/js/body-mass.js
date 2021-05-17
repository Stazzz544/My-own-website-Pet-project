const bmiBtn = document.querySelector('.bmi-calculator__btn');

bmiBtn.addEventListener('click', () => {
	bmi ();
});

function bmi () {
	let weight = document.querySelector('.bmi-calculator__weight').value,
		 height = document.querySelector('.bmi-calculator__height').value,
		 answerField = document.querySelector('.bmi-calculator__answer-field'),
		 result;
	answerField.style = 'padding: 15px'
	result = (weight / (height/100)) / (height/100);
	console.log(result);
	if (isNaN(result)){
		answerField.innerHTML =  `некорректный ввод`;
	 } else if (result < 15.99 ){
		answerField.innerHTML = ` Индекс массы тела равен : ${+result.toFixed(2)}<br> Выраженный дефицит массы тела	 <br>Необходима срочная консультация специалиста`;
	 } else if (result > 16.00 &&  result < 18.49 ){
		answerField.innerHTML = ` Индекс массы тела равен : ${+result.toFixed(2)}<br>	Недостаточная (дефицит) масса тела	<br>Необходима консультация специалиста`;
	 } else if (result > 18.50 &&  result < 24.99){
		answerField.innerHTML = ` Индекс массы тела равен : ${+result.toFixed(2)} <br> Ваш вес в норме!`;
	 } else if (result > 25.00 &&  result < 29.99){
		answerField.innerHTML = ` Индекс массы тела равен : ${+result.toFixed(2)} <br> Избыточная масса тела (предожирение)	<br>Необходима консультация специалиста`;
	 } else if (result > 30.00 ){
		answerField.innerHTML = ` Индекс массы тела равен : ${+result.toFixed(2)} <br> У вас ожирение	<br>Необходима консультация специалиста`;
	 } else{
		answerField.innerHTML = `произошла ошибка`;
	 }
	 appWrapperSize (); // функция в главном документе
}