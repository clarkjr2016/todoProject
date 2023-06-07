import "./modules/css/mainstyle.css";
import toDoItems from "./modules/to-do-items.js";
import projects from "./modules/projects.js";

const toDoItemArea = document.querySelector(".to-do-items-area"); // linking the section area on the HTML

const input = document.querySelector(".input");

const toDoButton = document.querySelector(".to-do-button");

function toDoCreation() {
  const newToDoCreation = toDoItems(input.value, "", "4/11/1997");
  const newTodo = document.createElement("div");
  newTodo.innerText = newToDoCreation.title;
  toDoItemArea.appendChild(newTodo);
}

toDoButton.addEventListener("click", toDoCreation);
