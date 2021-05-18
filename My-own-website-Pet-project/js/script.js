

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
			result.innerHTML = ` цена топлива: ${+total.toFixed(2)} руб.`;
		 }

});;
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
};
const burger = document.querySelector('.burger');
		
burger.addEventListener('click', () => {
	const mobileMenu = document.querySelector('.menu__navigation');
	burger.classList.toggle('burger_active');
	mobileMenu.classList.toggle('menu__navigation_active');
});

//функция для подключения webp
function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});

//==================================



//======== Menu tabs and links border bottum ========

const menu = document.querySelector('.menu__navigation'),
		menuLinks = document.querySelectorAll('.menu__navigation-link'),
		sections = document.querySelectorAll('section');

		menu.addEventListener('click', (e) => {
			const target = e.target;
			
			if (target.classList.contains('menu__navigation-link')) {
				menuLinks.forEach((e, i) => {
					if (target === e ){
					deleteActiveClasses (sections, menuLinks, 'section-active', 'menu__navigation-link_active');
					showElement (sections, i, 'section-active');
					addActiveClass(menuLinks, i, 'menu__navigation-link_active');
					appWrapperSize ();
					}
				});
				
			}
		});

		
function deleteActiveClasses (arr1, arr2, class1, class2) {
	arr1.forEach(item =>{
		item.classList.remove(class1);
	});
	arr2.forEach(item =>{
		item.classList.remove(class2);
	});
}

function showElement (arr, numPage, addClass) {
	arr[numPage].classList.add(addClass);
}
function addActiveClass (arr, numMenuLinc, addClass) {
	arr[numMenuLinc].classList.add(addClass);
}

//======== Sidebar ========
const arrow = document.querySelector('.web-apps__sidebar-arrow'),
		sidebar = document.querySelector('.web-apps__sidebar');

		arrow.addEventListener('click', () => {
			sidebar.classList.toggle('web-apps__sidebar_active');
			arrow.classList.toggle('web-apps__sidebar-arrow_active');
		});


//web-apps activate

const sidebarMenu = document.querySelector('.web-apps__sidebar-menu'),
		sidebarMenuItems = document.querySelectorAll('.web-apps__sidebar-item'),
		webApps = document.querySelectorAll('.web-apps__app'),
		webAppWrapper = document.querySelector('.web-apps__wrapper');

let activeApp;
appWrapperSize ();
function appWrapperSize () {
	activeApp = document.querySelector('.active-app').offsetHeight + 100;
	console.log('test')
	webAppWrapper.style.height = `${activeApp}px`;
}

webAppWrapper.style.height = `${activeApp}px`;

sidebarMenu.addEventListener('click', (event) => {
	let target = event.target;
	sidebarMenuItems.forEach((e, i) => {
		if (target == e) {
			deleteActiveClasses (webApps, sidebarMenuItems, 'active-app', 'sidebar-active');
			showElement (webApps, i, 'active-app');
			addActiveClass(sidebarMenuItems, i, 'sidebar-active');
			appWrapperSize ();
		}
	});
});

