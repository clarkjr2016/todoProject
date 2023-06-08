export default function toDoItems(title, description, dueDate) {
  return {
    title, // to-do title
    description, // description off the to-do
    dueDate, // due date for to-do task
    getTitle() {
      return this.title;
    },
    getDescription() {
      return this.description;
    },
    getDueDate() {
      return this.dueDate;
    },
    setTitle(newTitle) {
      this.title = newTitle;
    }, // method to be able to change the to-do title
    setDescription(newDescription) {
      this.description = newDescription;
    },
    setDueDate(newDueDate) {
      this.dueDate = newDueDate;
    },
    markComplete() {
      this.isComplete = true;
    },
    addToDo(project) {
      project.push(this);
    },
  };
}
