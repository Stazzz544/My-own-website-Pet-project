const burger = document.querySelector('.burger');
		
burger.addEventListener('click', () => {
	const mobileMenu = document.querySelector('.menu__navigation');
	burger.classList.toggle('burger_active');
	mobileMenu.classList.toggle('menu__navigation_active');
})