class Notepad {
  constructor(notes = []) {
    this._notes = notes;
  }

  static get Priority() {
    return {
      LOW: 0,
      NORMAL: 1,
      HIGH: 2,
    };
  }

  get notes() {
    return this._notes;
  }

  findNoteById(id) {
    for (let i = 0; i < this.notes.length; i += 1) {
      if (this.notes[i].id === id) {
        return this.notes[i];
      }
    }
    return undefined;
  }

  saveNote(note) {
    this.notes.push(note);
    return this;
  }

  deleteNote(id) {
    for (let i = 0; i < this.notes.length; i += 1) {
      if (this.notes[i].id === id) {
        this.notes.splice(i, 1);
      }
    }
    return this;
  }

  updateNoteContent(id, updatedContent) {
    Object.assign(this.findNoteById(id), updatedContent);
    return this;
  }

  updateNotePriority(id, updatePriority) {
    this.findNoteById(id).priority = updatePriority;
    return this;
  }

  filterNotesByQuery(query) {
    const newArr = [];
    for (let i = 0; i < this.notes.length; i += 1) {
      if (
        this.notes[i].title.toLowerCase().includes(query)
        || this.notes[i].body.toLowerCase().includes(query)
      ) {
        newArr.push(this.notes[i]);
      }
    }
    return newArr;
  }

  filterNotesByPriority(priority) {
    const newArr = [];
    for (let i = 0; i < this.notes.length; i += 1) {
      if (this.notes[i].priority === priority) {
        newArr.push(this.notes[i]);
      }
    }
    return newArr;
  }
}
