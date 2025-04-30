import { Category } from "./Model.js";
import { Activity } from "./Model.js";

export class Storage { 
    constructor() {
        this.activities = JSON.parse(localStorage.getItem("activities")) || [];
        this.categories = JSON.parse(localStorage.getItem("categories")) || [];
    }
    //ArrayList de Categorias
    categories = [];

    // añadir categoria
    addCategory(name, color) {
        if (name == "" || color == "") {
            alert("Rellena todos los campos!!!!");
            return;
        }
        // evitar duplicados
        // He modificado el filtrado de abajo
        const exists = this.categories.some(cat => cat.name === name);
        if (exists) {
          alert(`La categoría "${name}" ya existe.`);
          return null;
        }
        let c = new Category(name, color); //Crear categoria c y pasar por el constructor
        this.categories.push(c); //añadir categoria al array

        localStorage.setItem("categories", JSON.stringify(this.categories)); //subir categoria a Lo St

        console.log(this.categories); 
        return c;
    }
    deleteCategory(name) {
        // filtar actividad -- chatGpt:)
        this.categories = this.categories.filter(a => a.name !== name);
        localStorage.setItem("categories", JSON.stringify(this.categories));
      }

    // recuperar categorias
    getCategories() {
        return this.categories;
    }

    // añadir actividad
    addActivity(title, description, date, category, priority) {
        if (title == "" || description == "" || date == "" || category == "" || priority == "" || title == null || description == null || date == null || category == null || priority == null) {
            alert("Rellena todos los campos!!!!");
            return;
        }
        let a = new Activity(title, description, date, category, priority); //Crear actividad a y pasar por el constructor
        this.activities.push(a); //añadir actividad al array
        
        console.log(this.activities); 

        // Guardar en el LocalStorage
        localStorage.setItem("activities", JSON.stringify(this.activities));
    }

    deleteActivity(title) {
        // filtar actividad -- chatGpt:)
        this.activities = this.activities.filter(a => a.title !== title);
        localStorage.setItem("activities", JSON.stringify(this.activities));
      }
    
    //Fetch del LocalStorage o los archivos subidos
    async getActivities() {
        try {
            const JSON = document.getElementById("addJson").value;
            const archivo = `./data/${JSON}`;
            const resultaddo = await fetch(JSON);
            const activities = await resultaddo.json();
            localStorage.setItem("activities", JSON.stringify());
            return activities;
        } catch (error) {
            console.error("No se han podido cargar las actividades", error);
        }
    }


}