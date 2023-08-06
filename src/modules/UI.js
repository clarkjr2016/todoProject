import { Projects } from "./projects";
import ToDoItems from "./to-do-items";
import { sideBarObject } from "../index"; // this imports the sideBarObject from the index.js file
import { toDoItemArea } from "../index";

export class sideBar {
  constructor(className) {
    // constructor takes in the class name of the sidebar element as an object
    this.className = className; // creating a property that is the class name of the sidebar element
    this.projects = []; // creating a property that is an empty array to store projects.
  }

  getClassName() {
    return this.className;
  } // getter method to return the class name of the sidebar element

  getProjects() {
    return this.projects; // getter method to return the projects array
  }
  addProject(project) {
    this.projects.push(project);
  }

  getDOMElement(project) {
    const projectElementContainer = document.createElement("div"); // create a container element
    projectElementContainer.classList.add("projects"); // add a class to the div element

    const projectElementImg = document.createElement("img"); // create an image element
    projectElementImg.src = project.getPicture(); // set the image source to the project picture

    const projectElementTitle = document.createElement("h2"); // create a h2 element
    projectElementTitle.textContent = project.getTitle(); // set the text content to the project title

    this.getClassName().appendChild(projectElementContainer); // append div container to sidebar

    projectElementContainer.appendChild(projectElementImg); // append image to div container

    projectElementContainer.appendChild(projectElementTitle); // append title to div container
  } // method to create a project element and append it to the sidebar
}

export class ToDoArea {
  constructor() {
    this.header = document.querySelector(".project-header");
    this.date = document.querySelector("date-header");
    this.area = document.querySelector(".to-do-items-area");
    this.input = document.querySelector(".input");
    this.button = document.querySelector(".to-do-button");
  }

  toDoAreaItemCollection = [];

  getInput() {
    return this.input.value;
  }

  setInput(newInputValue) {
    this.input.value = newInputValue;
  }

  getButton() {
    return this.button;
  }

  render() {
    const input = this.input; // this selects the input area
    const button = this.getButton(); // get the button element
    button.addEventListener("click", () => {
      const inputValue = this.getInput(); // get the input element
      const toDoItem = new ToDoItems(inputValue); // this creates the to-do items
      const projects = sideBarObject.getProjects(); // this selects all the projects located within the sidebar object
      projects.forEach((project) => {
        if (project.isActive == true) {
          project.toDoItems.push(toDoItem);
          project.toDoItems.forEach(
            (toDoItem) => (toDoItem.projectAssignment = project.getTitle())
          );
        } // this pushes the recently created to-do-item into the appropriate "active" project
      });
      this.setInput(""); // this empties the input value area text after the button has been pressed.
      const inputElement = document.createElement("div"); // creates a div element that will store the text and date
      const inputText = document.createElement("p"); //creates a paragraph element for the to--do-item description text
      const inputDate = document.createElement("p"); // creates a paragraph element for the to-do-item date
      inputElement.classList.add("to-do-item");
      inputText.textContent = toDoItem.getDescription(); // sets the text content of the paragraph element to the to-do-item description
      inputDate.textContent = toDoItem.getDate(); // sets the text content of the paragraph element to the to-do-item date
      inputElement.appendChild(inputText); // appends the text to the div element
      inputElement.appendChild(inputDate); // appends the date to the div element
      this.area.appendChild(inputElement); // appends the div element to the to-do-items-area
      toDoItemArea.toDoAreaItemCollection.push(toDoItem);
      console.log(toDoItemArea);
    });
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        const inputValue = this.getInput(); // get the input element
        const toDoItem = new ToDoItems(inputValue); // this creates the to-do items
        const projects = sideBarObject.getProjects(); // this selects all the projects located within the sidebar object
        projects.forEach((project) => {
          if (project.isActive == true) {
            project.toDoItems.push(toDoItem);
          } // this pushes the recently created to-do-item into the appropriate "active" project
        });
        this.setInput(""); // this empties the input value area text after the button has been pressed.
        const inputElement = document.createElement("div"); // creates a div element that will store the text and date
        const inputText = document.createElement("p"); //creates a paragraph element for the to--do-item description text
        const inputDate = document.createElement("p"); // creates a paragraph element for the to-do-item date
        inputElement.classList.add("to-do-item");
        inputText.textContent = toDoItem.getDescription(); // sets the text content of the paragraph element to the to-do-item description
        inputDate.textContent = toDoItem.getDate(); // sets the text content of the paragraph element to the to-do-item date
        inputElement.appendChild(inputText); // appends the text to the div element
        inputElement.appendChild(inputDate); // appends the date to the div element
        this.area.appendChild(inputElement); //
      }
    });
  }
}
