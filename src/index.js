import "./modules/css/mainstyle.css";
import toDoItems from "./modules/to-do-items.js";

const hello = toDoItems("Hello", "jewbfjke", 55555);

hello.setTitle("Bye");

console.log(hello.getTitle());
console.log(hello);
