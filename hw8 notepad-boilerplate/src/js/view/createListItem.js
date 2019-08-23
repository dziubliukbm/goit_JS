function createElement(tag, className, text = null, id = null) {
  const element = document.createElement(tag);
  className.split(' ').map(e => element.classList.add(e));
  if (id) {
    element.setAttribute('data-id', id);
  }
  if (text) {
    element.textContent = text;
  }
  return element;
}
function createButton(action, text) {
  const button = createElement('button', 'action');
  button.setAttribute('data-action', action);
  const i = createElement('i', 'material-icons action__icons');
  i.textContent = text;
  button.append(i);
  return button;
}
function createListItem({
  id, title, body, priority,
}) {
  const li = createElement('li', 'note-list__item', null, id);
  const note = createElement('div', 'note');
  li.append(note);
  const noteContent = createElement('div', 'note__content');
  noteContent.append(createElement('h2', 'note__title', title, null));
  console.log(noteContent);

  noteContent.append(createElement('p', 'note_body', body));
  note.append(noteContent);
  const noteFooter = createElement('footer', 'note__footer');
  const noteSectionL = createElement('section', 'note__section');
  const noteSectionR = createElement('section', 'note__section');

  noteSectionL.append(createButton(
    NOTE_ACTIONS.DECREASE_PRIORITY,
    ICON_TYPES.ARROW_DOWN,
  ));
  noteSectionL.append(createButton(
    NOTE_ACTIONS.INCREASE_PRIORITY,
    ICON_TYPES.ARROW_UP,
  ));
  noteSectionR.append(createButton(
    NOTE_ACTIONS.EDIT,
    ICON_TYPES.EDIT,
  ));
  noteSectionL.append(createElement(
    'span',
    'note__priority',
    `Priority: ${priority}`,
  ));
  noteSectionR.append(createButton(
    NOTE_ACTIONS.DELETE,
    ICON_TYPES.DELETE,
  ));
  noteFooter.append(noteSectionL);
  noteFooter.append(noteSectionR);
  note.append(noteFooter);
  return li;
}
