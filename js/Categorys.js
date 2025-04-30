// dom del apartado categorias


import { Storage } from "../js/Storage.js"; 
import {FormTask} from "./FormTask.js"; 

const s = new Storage(); 
const f = new FormTask();

document.addEventListener("DOMContentLoaded", () => {
    const categorias = s.getCategories();                        
    f.printCategories(categorias);            
  });

document.getElementById("addCategoryBoton").addEventListener("click", () => {
    const name = document.getElementById("category").value; //valor de nombre
    const color = document.getElementById("color").value; // y de color
    s.addCategory(name, color); //añadir categoria al array
    f.printCategories(s.categories); //pintar categorias
    if (s.categories) selectCategory(s.categories); //ponerlas en la pag de crear actividad
});





