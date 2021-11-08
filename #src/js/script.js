@@include('fuel-calculator.js');
@@include('body-mass.js');
@@include('burger.js');
@@include('time-counter.js');
@@include('to-do-list.js');
@@include('phpmailer.js');
@@include('swiper-bundle.js');
@@include('react-app-page.js');

//========  swiper-slider  ========
//swiperInit();

function swiperInit() {

	const SectionMyStack = document.querySelector('.my-stack');

	if (SectionMyStack.classList.contains('section-active') && SectionMyStack.classList.contains('swiper-init')) {

		SectionMyStack.classList.remove('swiper-init');

		let swiper = new Swiper('.swiper-container', {
			autoplay: {
				delay: 2500,
			},
			speed: 500,
			parallax: true,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
		});

	}
}
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



//======== Menu tabs and links border bottom ========

const menu = document.querySelector('.menu__navigation'),
	menuLinks = document.querySelectorAll('.menu__navigation-link'),
	sections = document.querySelectorAll('section');



menu.addEventListener('click', (e) => {
	const target = e.target;
	e.preventDefault();
	
	if (target.classList.contains('menu__navigation-link')) {
		menuLinks.forEach((e, i) => {
			if (target === e) {
				deleteActiveClasses(sections, menuLinks, 'section-active', 'menu__navigation-link_active');
				showElement(sections, i, 'section-active');
				addActiveClass(menuLinks, i, 'menu__navigation-link_active');
				swiperInit();
				appWrapperSize();
				rollMainMenuAfterChoice(menu, 'menu__navigation_active');
				rollMainMenuAfterChoice(burger, 'burger_active');
			}
		});
	}
});

function rollMainMenuAfterChoice(item, cls) {
	if (item.classList.contains(cls)) {
		item.classList.remove(cls);
		const body = document.querySelector('body');
		if (body.classList.contains('body-lock')) {
			screenLocker();
		}
	}
}

function deleteActiveClasses(arr1, arr2, class1, class2) {
	arr1.forEach(item => {
		item.classList.remove(class1);
	});
	arr2.forEach(item => {
		item.classList.remove(class2);
	});
}

function showElement(arr, numPage, addClass) {
	arr[numPage].classList.add(addClass);
}

function addActiveClass(arr, numMenuLinc, addClass) {
	arr[numMenuLinc].classList.add(addClass);
}

//======== Sidebar ========
const arrow = document.querySelector('.web-apps__sidebar-arrow'),
	sidebar = document.querySelector('.web-apps__sidebar'),
	screenWidth = window.screen.width;
arrow.addEventListener('click', () => {
	sidebar.classList.toggle('web-apps__sidebar_active');

	arrow.classList.toggle('web-apps__sidebar-arrow_active');
	if (screenWidth <= 421) {
		screenLocker();
	}
});

//======== screen locker ========

function screenLocker() {
	const body = document.querySelector('body');
	body.classList.toggle('body-lock');
}

//======= drop list ===========
const courseTitles = document.querySelectorAll('.about-me__course')

courseTitles.forEach(e => {
	
	e.addEventListener('click', e => {

	const textBlock = e.target.closest('.about-me__course');
	const title = e.target.closest('.about-me__course-title-wripper');

	const arrow = title.querySelector('.about-me__course-arrow');
	const discription = textBlock.querySelector('.about-me__course-discription');

	arrow.classList.toggle('active')
	discription.classList.toggle('active')
	}
)})


////======== web-apps activate ========

const sidebarMenu = document.querySelector('.web-apps__sidebar-menu'),
	sidebarMenuItems = document.querySelectorAll('.web-apps__sidebar-item'),
	webApps = document.querySelectorAll('.web-apps__app'),
	webAppWrapper = document.querySelector('.web-apps__wrapper');

let activeApp;
appWrapperSize();

function appWrapperSize() {
	activeApp = document.querySelector('.active-app').offsetHeight + 100;
	webAppWrapper.style.height = `${activeApp}px`;
}

webAppWrapper.style.height = `${activeApp}px`;

sidebarMenu.addEventListener('click', (event) => {
	let target = event.target;
	sidebarMenuItems.forEach((e, i) => {
		if (target == e) {
			deleteActiveClasses(webApps, sidebarMenuItems, 'active-app', 'sidebar-active');
			showElement(webApps, i, 'active-app');
			addActiveClass(sidebarMenuItems, i, 'sidebar-active');
			appWrapperSize();
		}
	});
});