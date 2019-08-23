const notepad = new Notepad(initialNotes);
// console.log(notepad.notes);
const listRef = document.querySelector('.note-list');
console.log(listRef);
renderNoteList(listRef, notepad.notes);
