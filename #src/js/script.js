@@include('fuel-calculator.js');
@@include('body-mass.js');

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


//menu
// const burger = document.querySelector('.burger'),
// 	menu = document.querySelector('.menu'),
// 	close = document.querySelector('.menu__close');
// 	closeOverlay = document.querySelector('.menu__overlay');

// burger.addEventListener('click', () => {
// 	menu.classList.toggle('menu_active');
// });

// close.addEventListener('click', () => {
// 	menu.classList.remove('menu_active');
// });
// closeOverlay.addEventListener('click', () => {
// 	menu.classList.remove('menu_active');
// });

// const percent = document.querySelectorAll('.skills__grid-container-bar-percent'),
// 	lines = document.querySelector('.skills__grid-container-bar span');

// percent.forEach( (item, i) => {
// 	lines[i].style.width = item.innerHTML;
// });


/*
const pages = document.querySelectorAll('section'),
		links = document.querySelectorAll('.menu__navigation-item'),
		promo = document.querySelector('#promo'),
		sites = document.querySelector('#sites');


//========главная функция меню========

links.forEach(function (item, itemNum) { //перебираем массив links (item), itemNum - номирация элементов
	item.addEventListener('click', () => {
		removeClass(pages, itemNum);
	});
});


//========функция удаления класса========
function removeClass (array, itemNum) {							//получаем массив в переменную array
	array.forEach(function (arrayItem) {					//перебираем массив array
		arrayItem.classList.remove("section-active"); //убераем класс section-active
		array[itemNum].classList.add('section-active');
	});
}
*/


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

let activeApp = document.querySelector('.active-app').offsetHeight + 100;
webAppWrapper.style.height = `${activeApp}px`;

		sidebarMenu.addEventListener('click', (event) => {
			let target = event.target;
			sidebarMenuItems.forEach((e, i) => {
				if (target == e) {
					deleteActiveClasses (webApps, sidebarMenuItems, 'active-app', 'sidebar-active');
					showElement (webApps, i, 'active-app');
					addActiveClass(sidebarMenuItems, i, 'sidebar-active');
					activeApp = document.querySelector('.active-app').offsetHeight + 100;
					webAppWrapper.style.height = `${activeApp}px`;
				}
			});

			console.log(target);
		});

