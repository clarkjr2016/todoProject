export default function initialPage() {
  const sideBar = document.querySelector(".side-bar"); // selecting the nav element that already exists in the index.html file

  const projectHeader = document.querySelector(".project-header"); // selecting the area where the to-dos- will be populated;

  for (let i = 0; i < 3; i++) {
    const projectContainer = document.createElement("div");
    projectContainer.classList.add("projects");
    sideBar.appendChild(projectContainer);
  } // creates 3 containers to append projects to

  const projectList = sideBar.children; // creating a list of the div elements so that they can be more easily selected

  function projects(img, title) {
    return {
      img: img,
      title: title,
      toDos: [],
      convertToElements: function () {
        const imgElement = document.createElement("img");
        imgElement.src = this.img; // creates the img based off the input of the object
        const headerElement = document.createElement("h2");
        headerElement.innerText = this.title;
        return { imgElement, headerElement };
      },
    };
  } // creates simple objects to represent different projects

  const myDay = projects("../src/photos/laptop.svg", "My Day"); // creating a myDay Object
  const important = projects("../src/photos/trophy.svg", "Important"); // creating an important Object
  const planned = projects("../src/photos/menu.svg", "Planned"); // creating a planned Object

  projectList[0].appendChild(myDay.convertToElements().imgElement); //appending the img elment
  projectList[0].appendChild(myDay.convertToElements().headerElement); //appending the header elment

  projectList[1].appendChild(important.convertToElements().imgElement); //appending the img elment
  projectList[1].appendChild(important.convertToElements().headerElement); //appending the header elment

  projectList[2].appendChild(planned.convertToElements().imgElement); //appending the img elment
  projectList[2].appendChild(planned.convertToElements().headerElement); //appending the header elment

  projectHeader.innerText = myDay.convertToElements().headerElement.innerText; // setting the inital header to be the title of myDay

  function returnTodaysDate() {
    const today = new Date(); //creating a date object

    //gathering the year, month, and day

    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const day = today.getDate();

    return `${month}-${day}-${year}`;
  }

  const dateHeader = document.querySelector(".date-header"); //selecting the h2 header element
  dateHeader.innerText = returnTodaysDate(); // returns the text of todays date

  const toDoItemsArea = document.querySelector("to-do-items-area"); // selecting the area where the to-dos will be created

  let inputValue = document.querySelector(".input").value;

  inputValue = "Hello";

  function addToDo() {
    console.log(inputValue);
  }

  addToDo();
} // creating a factory function for project list
