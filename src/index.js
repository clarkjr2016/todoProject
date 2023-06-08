import "./modules/css/mainstyle.css";
import toDoItems from "./modules/to-do-items.js";
import projects from "./modules/projects.js";

const toDoItem1 = toDoItems(
  "Test",
  "Testing to see if I can append this to a project using an internal method",
  4111997
); // creating a to-do-item

const project1 = projects("My Day"); // creating a project to append to.

toDoItem1.addToDo(project1.getToDoItems());

console.log(project1.getToDoItems());

console.log(project1);
