// dom del apartado categorias


import { Storage } from "../js/storage.js"; 
import {FormTask} from "./FormTask.js"; 

document.getElementById("addCategoryBoton").addEventListener("click", () => {
    const name = document.getElementById("category").value; //valor de nombre
    const color = document.getElementById("color").value; // y de color
    const s = new Storage(); 
    s.addCategory(name, color); //añadir categoria al array
    const f = new FormTask();
    f.printCategories(s.categories); //pintar categorias
});