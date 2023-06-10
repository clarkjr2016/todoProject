import "./modules/css/mainstyle.css";
import ToDoItems from "./modules/to-do-items.js";
import Projects from "./modules/projects.js";
import { sideBar, ToDoArea } from "./modules/UI";

const sideBarObject = new sideBar(document.querySelector(".side-bar")); // select the sidebar by instantiatong a class and calling the getClassName method on it.

console.log(sideBarObject); // check to see if the sidebar is selected

const myDay = new Projects("My Day", "../src/photos/laptop.svg"); // create a new project called My Day

const important = new Projects("Important", "../src/photos/trophy.svg"); // create a new project called Important

const planned = new Projects("Planned", "../src/photos/menu.svg"); // create a new project called Planned

sideBarObject.addProject(myDay); // add the projects to the sidebar

sideBarObject.addProject(important);

sideBarObject.addProject(planned);

sideBarObject.getProjects().forEach((project) => {
  sideBarObject.getDOMElement(project);
}); // loop through the projects and call the getDOMElement method on each project
