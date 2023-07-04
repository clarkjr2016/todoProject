import "./modules/css/mainstyle.css";
import ToDoItems from "./modules/to-do-items.js";
import {
  Projects,
  addProjectButton,
  CreatedProjects,
} from "./modules/projects.js";
import { sideBar, ToDoArea } from "./modules/UI";

const sideBarObject = new sideBar(document.querySelector(".side-bar")); // select the sidebar by instantiatong a class and calling the getClassName method on it.

console.log(sideBarObject); // check to see if the sidebar is selected

const myDay = new Projects("My Day", "../src/photos/laptop.svg"); // create a new project called My Day

const important = new Projects("Important", "../src/photos/trophy.svg"); // create a new project called Important

const planned = new Projects("Planned", "../src/photos/menu.svg"); // create a new project called Planned

sideBarObject.addProject(myDay); // add the myDay project to the sidebar

sideBarObject.addProject(important); // add the important project to the sidebar

sideBarObject.addProject(planned); // add the planned project to the sidebar

sideBarObject.getProjects().forEach((project) => {
  project.render(sideBarObject);
}); // loop through the projects and call the getDOMElement method on each project to append them to the sidebar

const addProjectBtn = new addProjectButton("Add Project", sideBarObject); // create a new button called Add Project with the sidebarObject being passed as an argument

addProjectBtn.render(document.querySelector(".side-bar")); // render the button to the sidebar

console.log(addProjectBtn); // check to see if the button is created

const toDoItemArea = new ToDoArea();
