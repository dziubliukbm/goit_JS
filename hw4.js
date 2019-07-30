/* eslint-disable no-unused-vars */
const Priority = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

const note = {
  id: '',
  title: '',
  body: '',
  priority: Priority.LOW,
};

const notepad = {
  notes: [],
  getNotes() {
    return this.notes;
    /*
     * Принимает: ничего
     * Возвращает: все заметки, значение свойства notes
     */
  },
  findNoteById(id) {
    return this.notes.find(e => e.id === id);
    /*
     * Ищет заметку в массиве notes
     *
     * Принимает: идентификатор заметки
     * Возвращает: заметку с совпавшим полем id или undefined если ничего не найдено
     */
  },
  saveNote(note) {
    this.notes.push(note);
    return this;
    /*
     * Сохраняет заметку в массив notes
     *
     * Принимает: объект заметки
     * Возвращает: сохраненную заметку
     */
  },
  deleteNote(id) {
    // this.notes.filter(e => e.id !== id);

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < this.notes.length; i += 1) {
      if (this.notes[i].id === id) {
        this.notes.splice(i, 1);
        break;
      }
    }
    /*
     * Удаляет заметку по идентификатору из массива notes
     *
     * Принимает: идентификатор заметки
     * Возвращает: ничего
     */
  },
  updateNoteContent(id, updatedContent) {
    Object.assign(this.findNoteById(id), updatedContent);
    /*
     * Обновляет контент заметки
     * updatedContent - объект с полями вида {имя: значение, имя: значение}
     * Свойств в объекте updatedContent может быть произвольное количество
     *
     * Принимает: идентификатор заметки и объект, полями которого надо обновить заметку
     * Возвращает: обновленную заметку
     */
  },
  updateNotePriority(id, priority) {
    this.findNoteById(id).priority = priority;
    /*
     * Обновляет приоритет заметки
     *
     * Принимает: идентификатор заметки и ее новый приоритет
     * Возвращает: обновленную заметку
     */
  },
  filterNotesByQuery(query) {
    const matched = [];
    for (let i = 0; i < this.notes.length; i += 1) {
      if (this.notes[i].title.includes(query) || this.notes[i].body.includes(query)) {
        matched.push(this.notes[i]);
      }
    }
    return matched;
    // return this.notes.filter(e => e.title.includes(query) || e.body.includes(query));
  },
  filterNotesByPriority(priority) {
    // return this.notes.filter(e => e.priority === priority);
    const arrNotes = [];
    for (let i = 0; i < this.notes.length; i += 1) {
      if (this.notes[i].priority === priority) {
        arrNotes.push(this.notes[i]);
      }
    }
    return arrNotes;

    /*
     * Фильтрует массив заметок по значению приоритета
     * Если значение priority совпадает с приоритетом заметки - она подходит
     *
     * Принимает: приоритет для поиска в свойстве priority заметки
     * Возвращает: новый массив заметок с подходящим приоритетом
     */
    // return this.notes;
  },
};

notepad.saveNote({
  id: 'id-1',
  title: 'JavaScript essentials',
  body:
    'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
  priority: Priority.HIGH,
});

notepad.saveNote({
  id: 'id-2',
  title: ' JavaScript Refresh HTML and CSS',
  body:
    ' Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
  priority: Priority.NORMAL,
});

notepad.saveNote({
  id: 'id-3',
  title: 'Get comfy with Frontend frameworks',
  body:
    'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
  priority: Priority.NORMAL,
});

notepad.saveNote({
  id: 'id-4',
  title: 'Winter clothes',
  body:
    "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
  priority: Priority.LOW,
});

// console.log(
//   'Отфильтровали заметки по ключевому слову "Winter": ',
//   notepad.filterNotesByQuery('Winter'),
// );

console.log(
  'Отфильтровали заметки по ключевому слову "JavaScript": ',
  notepad.filterNotesByQuery('JavaScript'),
);
// console.log(
//   'Отфильтровали заметки по нормальному приоритету: ',
//   notepad.filterNotesByPriority(Priority.NORMAL),
// );
