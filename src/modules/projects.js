export default class Projects {
  constructor(title, picture = "default") {
    this.title = title;
    this.picture = picture;
  }

  toDoItems = []; // creating a property that is an empty array.

  getPicture() {
    return this.picture;
  }

  getTitle() {
    return this.title;
  }
  getToDoItems() {
    return this.toDoItems;
  }
  addToDos(toDo) {
    this.toDoItems.push(toDo); // push a to do value into the appropiate project list
  }
}
