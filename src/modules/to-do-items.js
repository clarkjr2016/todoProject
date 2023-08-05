import { getTodaysDate } from "./date";

export default class ToDoItems {
  constructor(description, date = getTodaysDate()) {
    this.description = description; // this is the text of the to-do-item generated from user input
    this.date = date; // this is the date that is going to be created on the to-do list based off the date that it was created.
  }

  getDescription() {
    return this.description;
  }
  getDate() {
    return this.date;
  }

  setDescription(newDescription) {
    this.description = newDescription;
  }
  setDueDate(newDate) {
    this.date = newDate;
  }
  markComplete() {
    this.isComplete = true;
  }
}
