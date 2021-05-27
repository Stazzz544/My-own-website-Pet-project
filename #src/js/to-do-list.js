const todolistBtn = document.querySelector('.todolist__enter-btn');
let removeNote,
	 noteCheck,
	 newNotes;

todolistBtn.addEventListener('click', () => {
	addNote()
	removeNotes ()

//тут что то не работает
	noteCheck.forEach((e1, i1) => {
		e1.addEventListener('click', () => {
			newNotes.forEach((e2, i2) => {
				if (i1 == i2 && i1.checked, false) {
					e2.style.textDecoration = 'line-through'
				} else if(i1 == i2 && i1.checked) {					
					e2.style.textDecoration = 'none'
				}
			})
		})
	});

})






//line-through

function removeNotes () {
	removeNote.forEach((e1, i1) => {
		e1.addEventListener('click', () => {
			newNotes.forEach((e2, i2) => {
				if (i1 == i2){
					e2.remove()
				}
			})
		})
	});
}


function addNote() {
	let newNote = document.querySelector('.todolist__enter-inp').value,
		noteHolder = document.querySelector('.todolist__note-wrapper');

	if (newNote != '') {
		element = document.createElement('div');
		element.classList.add("todolist__note");
		element.innerHTML = `
			<input class="todolist__note-checkbox"  type="checkbox">
			<div class="todolist__note-text">${newNote}</div>
			<div class="todolist__note-delete">&times</div>
			`
		noteHolder.append(element);
		document.querySelector('.todolist__enter-inp').value = '';
		appWrapperSize()

		removeNote = document.querySelectorAll('.todolist__note-delete');
		noteCheck = document.querySelectorAll('.todolist__note-checkbox');
		newNotes = document.querySelectorAll('.todolist__note');
		console.log(removeNote)
	}
}