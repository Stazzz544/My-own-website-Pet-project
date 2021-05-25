//send form ========= php mailer

const message = {
	loading: 'загрузка',
	success: 'Спасибо за письмо!',
	failure: 'Что-то пошло не так...'
};

const forms = document.querySelectorAll('form');

forms.forEach(item => {
	postData(item);
	
});

function postData(form) {
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const statusMessage = document.createElement('div');
		statusMessage.classList.add('status');
		statusMessage.textContent = message.loading;
		form.append(statusMessage);

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
				console.log(request.response);
				statusMessage.textContent = message.success;
				form.reset();
				setTimeout(() => {
					statusMessage.remove();
				}, 2000);
			} else {
				statusMessage.textContent = message.failure;
			}
		});
	});
}