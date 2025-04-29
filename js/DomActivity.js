// llamar metodos de form task 

import { Storage } from "./Storage.js";


const storage = new Storage();

// Esto lo mismo, lo he vuelto a poner para que espere a que el dom este cargado
document.addEventListener("DOMContentLoaded", () => {
  const botonAdd = document.getElementById("addTask");

  botonAdd.addEventListener("click", () => {
    
    const title       = document.getElementById("title").value
    const description = document.getElementById("description").value
    const date        = document.getElementById("date").value;
    const category    = document.getElementById("category").value;
    const priority    = document.getElementById("priority").value;

    

    // Guardar actividad
    storage.addActivity(title, description, date, category, priority);

  });
});
