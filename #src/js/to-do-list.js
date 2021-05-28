const todolistBtn = document.querySelector('.todolist__enter-btn'),
		noteDeleteArray = [],
		noteCheckArray = [],
		noteDeleteArrayChecked = [],
		noteCheckArrayChecked = [];

let noteArray = [],
	 noteCheckedArray = [];
	
//ДОБАВЛЕНИЕ НОВОЙ ЗАПИСИ + ИНИЦИАЛИАЦИЯ ВНУТРЕННИХ ДАННЫХ		
todolistBtn.addEventListener('click', () => {
	mainNoteFunction();
});


function mainNoteFunction() {
	pushNewNoteToArray(); //ok
	clearAllNotes(); //ok
	postNewNotes(); //ok
	searchNewNoteTags(); //ok
	searchNewNoteCheckedTags(); //ok
	appWrapperSize(); //ok
}


function deleteNoteFromArray(i, arr) {//удаляем запись из массива!!!
	arr.splice(i, 1);
}


function searchNewNoteCheckedTags() {
	const newCheck = document.querySelectorAll('.todolist__note-checkbox-checked'),  // получаем все чекбоксы
		newDelete = document.querySelectorAll('.todolist__note-delete-checked');      // получаем все крестики

	addToArray(noteDeleteArrayChecked, newDelete);  // складываем все крестики в массив
	addToArray(noteCheckArrayChecked, newCheck);    // складываем все чекбоксы в массив

	noteDeleteArrayChecked.forEach((e, i) => {
		e.addEventListener('click', () => {
			deleteNoteFromArray(i, noteCheckedArray);//удаляем запись из массива!!!
			clearAllCheckedNotes();
			postCheckedNotes();
			mainNoteFunction();
		});
	});

	returnNotCheckedNote();
}


function searchNewNoteTags() {
	const newCheck = document.querySelectorAll('.todolist__note-checkbox'),  // получаем все чекбоксы
		newDelete = document.querySelectorAll('.todolist__note-delete');      // получаем все крестики

	addToArray(noteDeleteArray, newDelete);  // складываем все крестики в массив
	addToArray(noteCheckArray, newCheck);    // складываем все чекбоксы в массив

	noteDeleteArray.forEach((e, i) => {
		e.addEventListener('click', () => {
			deleteNoteFromArray(i, noteArray);//удаляем запись из массива!!!
			mainNoteFunction();
		});
	});

	pushCheckedNote ()
}


function pushCheckedNote () {
	noteCheckArray.forEach((checkTag, checkNum) => {
		checkTag.addEventListener('click', () => {
			if (checkTag.checked) {//если стоит чек, то...
				noteArray.forEach((arrItem, arrNum) => {// прочёсчываем главный массив..
					if (checkNum === arrNum) {//сравниваем номер чекбокса с номером тега в массиве
						
						let removed = noteArray.splice(arrNum, 1); //забираем при чеке элемент в переменную
						noteCheckedArray = noteCheckedArray.concat(removed) //добавляем чек в новый массив
						clearAllCheckedNotes();
						postCheckedNotes();
						mainNoteFunction(); //обновляем
					}
				});
			}
		});
	});
}


function returnNotCheckedNote () {
	noteCheckArrayChecked.forEach((checkTag, checkNum) => {
		checkTag.addEventListener('click', () => {
			if (!checkTag.checked) {//если стоит чек, то...
				noteCheckedArray.forEach((arrItem, arrNum) => {// прочёсчываем главный чекнутый массив..
					if (checkNum === arrNum) {//сравниваем номер чекбокса с номером тега в массиве
						
						let removed = noteCheckedArray.splice(arrNum, 1); //забираем при чеке элемент в переменную
						noteArray = noteArray.concat(removed) //добавляем чек в новый массив
						postNewNotes();
						clearAllCheckedNotes();
						postCheckedNotes();
						mainNoteFunction();
					}
				});
			}
		});
	});
}


function pushNewNoteToArray() {
	const inpValue = document.querySelector('.todolist__enter-inp').value;
	if (inpValue != '') {
		noteArray.push(inpValue);
	}
	document.querySelector('.todolist__enter-inp').value = '';
}


function clearAllNotes() {
	const allNotes = document.querySelectorAll('.todolist__no-checked');
	allNotes.forEach((e) => {
		e.remove();
	});
}

function clearAllCheckedNotes() {
	const allCheckedNotes = document.querySelectorAll('.todolist__checked');
	allCheckedNotes.forEach((e) => {
		e.remove();
	});
}




function postCheckedNotes() {
	const noteWrapper = document.querySelector('.todolist__note-wrapper'),
			element = document.createElement('li');
			element.classList.add('todolist__checked')
	noteCheckedArray.forEach((e) => {
		element.innerHTML += `
		<div class="todolist__note">
			<input class="todolist__note-checkbox-checked"  type="checkbox" checked>
			<div class="todolist__note-text todolist__note-text-checked">${e}</div>
			<div class="todolist__note-delete-checked">&times</div>
		</div>
		`;
		noteWrapper.append(element);
	});
}

function postNewNotes() {
	const noteWrapper = document.querySelector('.todolist__note-wrapper'),
			element = document.createElement('li');
			element.classList.add('todolist__no-checked')
	noteArray.forEach((e) => {
		element.innerHTML += `
		<div class="todolist__note">
			<input class="todolist__note-checkbox"  type="checkbox">
			<div class="todolist__note-text">${e}</div>
			<div class="todolist__note-delete">&times</div>
		</div>
		`;
		noteWrapper.prepend(element);
	});
}

function addToArray(array, item) {
	array.splice(0);
	item.forEach((e) => {
		array.push(e);
	});
}


