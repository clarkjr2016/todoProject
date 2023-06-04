export default function initialPage() {
  const sideBar = document.querySelector(".side-bar"); // selecting the nav element that already exists in the index.html folder

  const toDoArea = document.querySelector(".to-do-area");

  for (let i = 0; i < 3; i++) {
    const projectContainer = document.createElement("div");
    projectContainer.classList.add("projects");
    sideBar.appendChild(projectContainer);
  } // creates 3 containers to append projects to

  const projectList = sideBar.children; // creating a list of the div elements so that they can be more easily selected

  const projectItem = function (picture, text) {
    const image = document.createElement("img");
    image.src = picture; // creating an immage from the source provided
    const description = document.createElement("h2");
    description.innerText = text; // creating an h2 element from the text provided

    return {
      image: image,
      description: description,
      toDos: [],
    };
  }; // create a factory function to be able to create the projectItems

  const myDay = projectItem("../src/photos/laptop.svg", "My Day");

  const important = projectItem("../src/photos/trophy.svg", "Important");

  const planned = projectItem("../src/photos/menu.svg", "Planned");

  projectList[0].append(myDay.image);
  projectList[0].append(myDay.description);

  projectList[1].append(important.image);
  projectList[1].append(important.description);

  projectList[2].append(planned.image);
  projectList[2].append(planned.description);

  const toDoHeader = document.createElement("h1");

  toDoHeader.innerText = myDay.description.innerText;

  toDoArea.appendChild(toDoHeader);

  // Next I will be adding the actual icons to the container element
}
