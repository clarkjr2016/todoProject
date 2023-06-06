export default function toDoItems(title, description, dueDate) {
  return {
    title: title, // to have an items title
    description: description, //
    dueDate: dueDate,
    setTitle(newTitle) {
      this.title = newTitle;
    },
    getTitle() {
      return this.title;
    },
  };
}
