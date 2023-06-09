export default class sideBar {
  constructor(className) {
    this.className = className;
    this.projects = []; // creating a property that is an empty array to store projects.
  }

  getClassName() {
    return this.className;
  }

  getProjects() {
    return this.projects;
  }
  addProject(...project) {
    this.projects.push(project);
  }

  getDOMElement() {
    const sideBarElement = document.createElement("div");
  }
}
