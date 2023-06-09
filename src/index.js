import "./modules/css/mainstyle.css";
import ToDoItems from "./modules/to-do-items.js";
import Projects from "./modules/projects.js";
import sideBar from "./modules/UI";

const sideBarObject = new sideBar(".side-bar"); // select the sidebar by instantiatong a class and calling the getClassName method on it.

const myDay = new Projects("My Day"); // create a new project called My Day

const important = new Projects("Important"); // create a new project called Important

const planned = new Projects("Planned"); // create a new project called Planned

sideBarObject.addProject(myDay, important, planned); // add the projects to the sidebar

console.log(sideBarObject.getProjects()); // check to see if the projects are added to the sidebar
