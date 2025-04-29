import { Category } from "./Model.js";

export class Storage {

    //ArrayList de Categorias
    categories = [];

    // añadir categoria
    addCategory(name, color) {
        if (name == "" || color == "") {
            alert("Rellena todos los campos!!!!");
        }
        let c = new Category(name, color); //Crear categoria c y pasar por el constructor
        this.categories.push(c); //añadir categoria al array

        console.log(this.categories); 
    }
    //ArrayList de Actividades
    activities = [];

    // añadir actividad
    addActivity(name, description, date, category) {
        if (name == "" || description == "" || date == "" || category == "") {
            alert("Rellena todos los campos!!!!");
        }
        let a = new Activity(name, description, date, category); //Crear actividad a y pasar por el constructor
        this.activities.push(a); //añadir actividad al array
        
        console.log(this.activities); 

        // Guardar en el LocalStorage
        localStorage.setItem("activities", JSON.stringify(this.activities));
    }
    
    //Fetch del LocalStorage o los archivos subidos
    async getActivities() {
        try {
            const JSON = document.getElementById("addJson").value;
            const archivo = `./data/${JSON}`;
            const resultaddo = await fetch(JSON);
            const activities = await resultaddo.json();
            return activities;
        } catch (error) {
            console.error("No se han podido cargar las actividades", error);
        }
    }
}