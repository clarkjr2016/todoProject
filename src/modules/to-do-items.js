export default class ToDoItems {
  constructor(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
  }

  getTitle() {
    return this.title;
  }
  getDescription() {
    return this.description;
  }
  getDueDate() {
    return this.dueDate;
  }
  setTitle(newTitle) {
    this.title = newTitle;
  } // method to be able to change the to-do title
  setDescription(newDescription) {
    this.description = newDescription;
  }
  setDueDate(newDueDate) {
    this.dueDate = newDueDate;
  }
  markComplete() {
    this.isComplete = true;
  }
}
