export default function projects(title) {
  return {
    title,
    toDoItems: [],
    getTitle() {
      return this.title;
    },
    getToDoItems() {
      return this.toDoItems;
    },
    addToDos(toDo) {
      this.toDoItems.push(toDo); // push a to do value into the appropiate project list
    },
  };
}
