const reactAppPrevImgs = document.querySelectorAll('.react__galery-item')
reactAppPrevImgs.forEach((e, index) => e.addEventListener('click', () => openReactAppDiscription(index)));

function openReactAppDiscription(index) {
	const aboutApp = document.querySelectorAll('.react__about-app-flex');
	const bg = document.querySelector('.react__about-app-bg');
	const close = document.querySelectorAll('.react__about-app-close');
	const fix = document.querySelector('.react__about-app-wrapper');//fix
	const body = document.querySelector('body');

	//ДОРАБОТАТЬ!!!
	// const checkClass = (varName, className) => {
	// 	if (varName.classList.contains(className)) {
	// 		varName.classlist.remove(className)
	// 	};
	// }
	//checkClass(fix, 'react__about-app-wrapper_disactive')

	if (bg.classList.contains('react__about-app-bg_disactive')) {
		bg.classList.remove('react__about-app-bg_disactive')
	}
	if (fix.classList.contains('react__about-app-wrapper_disactive')) {
		fix.classList.remove('react__about-app-wrapper_disactive')
	}
	
	body.classList.add('body-lock');
	bg.classList.add('react__about-app-bg_active');
	aboutApp[index].classList.add('react__about-app-flex_active');
	fix.classList.add('react__about-app-wrapper_active')

	close[index].addEventListener('click', () => {
		fix.classList.add('react__about-app-wrapper_disactive')
		bg.classList.add('react__about-app-bg_disactive');
		setTimeout(() => {
			fix.classList.remove('react__about-app-wrapper_active')
			bg.classList.remove('react__about-app-bg_active');
			aboutApp[index].classList.remove('react__about-app-flex_active');
		}, 500);
		body.classList.remove('body-lock');
	})
}




/* Инструкция:
1. новые app добавлять по этому шаблону:

<div class="react__galery-item">
	<img class="react__galery-item-img" src="img/react-app/app-semple/spy-app/logo.jpg" alt="logo-react-app">
</div>


2.Описания app добавлять:

<div class="react__about-app-flex">
	<div class="react__about-app-video">
		<iframe class="react__about-app-youtube" src="https://www.youtube.com/embed/2TmCmt6G2sQ"title="YouTube video player" frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen>
		</iframe>
		</div>
		<div class="react__about-app-discription">
			<h1 class="react__about-app-title">Название</h1>
			<h2 class="react__about-app-subtitle">React, Node JS, SQL</h2>
			<p class="react__about-app-text">Приложение для отправки сообщений. 
			</p>
		</div>
</div>

*/