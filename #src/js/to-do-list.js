const todolistBtn = document.querySelector('.todolist__enter-btn'),
	noteArray = [],
	noteCheckedArray = [],
	noteDeleteArray = [],
	noteCheckArray = [];


//ДОБАВЛЕНИЕ НОВОЙ ЗАПИСИ + ИНИЦИАЛИАЦИЯ ВНУТРЕННИХ ДАННЫХ		
todolistBtn.addEventListener('click', () => {
	mainNoteFunction();
});


function mainNoteFunction() {
	pushNewNoteToArray(); //ok
	clearAllNotes(); //ok
	postNewNotes(); //ok
	searchNewNoteTags(); //ok
	appWrapperSize(); //ok
}



function deleteNoteFromArray(i) {
	noteArray.splice(i, 1);
}


function searchNewNoteTags() {
	const newCheck = document.querySelectorAll('.todolist__note-checkbox'),
		newDelete = document.querySelectorAll('.todolist__note-delete');

	addToArray(noteDeleteArray, newDelete);
	addToArray(noteCheckArray, newCheck);

	noteDeleteArray.forEach((e, i) => {
		e.addEventListener('click', () => {
			deleteNoteFromArray(i);
			mainNoteFunction();
		});
	});

	//говёный участок кода
	noteCheckArray.forEach((checkTag, checkNum) => {
		checkTag.addEventListener('click', () => {
			if (checkTag.checked) {
				const allNotes = document.querySelectorAll('.todolist__note');
				noteArray.forEach((arrItem, arrNum) => {
					if (checkNum === arrNum) {
						
						let removed = noteArray.splice(arrNum, 1);
						console.log('removed', removed);
						console.log('noteCheckedArray', noteCheckedArray);

						noteCheckedArray.concat(removed);
						
						//divTag.style.textDecoration = "line-through";
						mainNoteFunction();
					}
				});
			}
		});
	});
	//говёный участок кода всё
}


function pushNewNoteToArray() {
	const inpValue = document.querySelector('.todolist__enter-inp').value;
	if (inpValue != '') {
		noteArray.push(inpValue);
	}
	document.querySelector('.todolist__enter-inp').value = '';
	console.log(noteArray);
}


function clearAllNotes() {
	const allNotes = document.querySelectorAll('.todolist__note');
	allNotes.forEach((e) => {
		e.remove();
	});
}


function postNewNotes() {
	const noteWrapper = document.querySelector('.todolist__note-wrapper');
	noteArray.forEach((e) => {
		noteWrapper.innerHTML += `
		<li class="todolist__note">
			<input class="todolist__note-checkbox"  type="checkbox">
			<div class="todolist__note-text">${e}</div>
			<div class="todolist__note-delete">&times</div>
		</li>
		`;
	});
}


function addToArray(array, item) {
	array.splice(0);
	item.forEach((e) => {
		array.push(e);
	});
}