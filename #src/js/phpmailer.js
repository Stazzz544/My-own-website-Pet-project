//send form ========= php mailer


const forms = document.querySelectorAll('form');

forms.forEach(item => {
	postData(item);
	
});

function postData(form) {
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const loadingProgress = document.querySelector('.form__sending'),
				loadingSuccess = document.querySelector('.form__succes'),
				loadingFail = document.querySelector('.form__fail'),
				loadingDarkWrapper = document.querySelector('.form__sending-wrapper'),
				loadFormClose = document.querySelectorAll('.form__close');
				
				loadingDarkWrapper.classList.add('form__sending-wrapper_active');//затемняем фон
				loadingProgress.classList.add('form_active');//отправка сообщения(процесс)

				loadFormClose.forEach((e) => {
					e.addEventListener('click', () => {
						console.log('test');
						loadingDarkWrapper.classList.remove('form__sending-wrapper_active');

						if (loadingSuccess.classList.contains('form_active')) {
							loadingSuccess.classList.remove('form_active');

						} else if (loadingFail.classList.contains('form_active')) {
							loadingFail.classList.remove('form_active');
						}
					});
				});



		const request = new XMLHttpRequest();
		request.open('POST', 'mailer/smart.php');

		request.setRequestHeader('Content-type', 'application/json');
		const formData = new FormData(form);

		const object = {};
		formData.forEach(function(value, key){
			object[key] = value;
		});

		const json = JSON.stringify(object)

		request.send(json);

		request.addEventListener('load', () => {
			if (request.status === 200) {
				//console.log(request.response);

				loadingProgress.classList.remove('form_active');
				loadingSuccess.classList.add('form_active');

				form.reset();
				setTimeout(() => {
					loadingSuccess.classList.remove('form_active');
					loadingDarkWrapper.classList.remove('form__sending-wrapper_active');
				}, 10000);

			} else {
				loadingProgress.classList.remove('form_active');
				loadingFail.classList.add('form_active');

				setTimeout(() => {
					loadingFail.classList.remove('form_active');
					loadingDarkWrapper.classList.remove('form__sending-wrapper_active');
				}, 10000);
			}
		});
	});
}