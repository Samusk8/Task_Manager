import { Storage } from "./Storage.js";

const s = new Storage();

export class FormTask {
    //pintar dom

    //printCategories() pintar en la web
    /*
        <div class="category">
            <p>Estudios</p>
            <button id="deleteCategory">X</button>
        </div>
        */
       printCategories(categories) {
            const categoryContainer = document.getElementById("categoryContainer");
           
            categoryContainer.innerHTML = '';
            categories.forEach((category) => {
                const categoryDiv= document.createElement("div");
                categoryDiv.classList.add("category");
                const categoryP = document.createElement("p");
                const categoryButton = document.createElement("button");
                categoryButton.id = "deleteCategory";
                categoryButton.innerText = "X";
                const intro = document.createElement("br")
    
    
                //boton borrar categoria
                categoryButton.addEventListener("click", () => {
                    s.deleteCategory(category.name);
                    categoryDiv.remove();
                    intro.remove();
                });
    
                categoryP.innerText = category.name;
                categoryDiv.style.color = category.color;
                categoryDiv.appendChild(categoryP);
                categoryDiv.appendChild(categoryButton);


                categoryContainer.appendChild(categoryDiv);
                categoryContainer.appendChild(intro);
            
            });
        }

        // pintar actividadeds

        printActivities(activities) {
            const activitiesDiv = document.getElementById("actividades"); 
        
            // vaciar div
            activitiesDiv.innerHTML = '';
        
            activities.forEach((activity) => {
                const activityDiv = document.createElement("div");
                activityDiv.classList.add("activity");
                const activityHeaderDiv = document.createElement("div");
                activityHeaderDiv.classList.add("activity-header");
                const activityBodyDiv = document.createElement("div");
                activityBodyDiv.classList.add("activity-body");
                const bodyText = document.createElement("div");
                bodyText.classList.add("body-text");
                const bodyBoton = document.createElement("div");
                bodyBoton.classList.add("body-boton");
                const titulo = document.createElement("h5");
                titulo.innerText = activity.title;
                const priority = document.createElement("h5");
                priority.innerText = activity.priority;
                const category = document.createElement("p");;
                category.id = "category";
                category.innerText = activity.category;
                const date = document.createElement("p");;
                date.id = "date";
                date.innerText = activity.date;
                const description = document.createElement("p");;
                description.id = "description";;
                description.innerText = activity.description;
                const done = document.createElement("input");
                done.type = "checkbox";
                done.id = "done";
                const deleteActivity = document.createElement("button");
                deleteActivity.id = "deleteActivity";
                deleteActivity.innerText = "X";

                /*let backgroundcolor;
                switch (activity.priority) {
                  case "Alta":
                    backgroundcolor = "red";
                    break;
                  case "media":
                    backgroundcolor = "yellow";
                    break;
                  case "baja":
                    backgroundcolor = "green";
                    break;
                  default:
                    backgroundcolor = "lightgray";
                }
                activityDiv.style.backgroundColor = backgroundcolor; */

                if (activity.priority == "Alta") {
                    activityDiv.style.backgroundColor = "red";
                } else if (activity.priority == "media") {
                    activityDiv.style.backgroundColor = "yellow";
                } else if (activity.priority == "baja") {
                    activityDiv.style.backgroundColor = "green";
                }

                done.addEventListener("change", () => {
                    if (done.checked) {
                        if (activity.priority == "Alta") {
                            activityDiv.style.backgroundColor = "darkred";
                        } else if (activity.priority == "media") {
                            activityDiv.style.backgroundColor = "darkgoldenrod";
                        } else if (activity.priority == "baja") {
                            activityDiv.style.backgroundColor = "darkgreen";
                        }
                    } else {
                        if (activity.priority == "Alta") {
                            activityDiv.style.backgroundColor = "red";
                        } else if (activity.priority == "media") {
                            activityDiv.style.backgroundColor = "yellow";
                        } else if (activity.priority == "baja") {
                            activityDiv.style.backgroundColor = "green";
                        }
                    }
                });


                
                const activitiesDiv = document.getElementById("actividades");
                activitiesDiv.appendChild(activityDiv);
    
                activityDiv.appendChild(activityHeaderDiv);
                activityDiv.appendChild(activityBodyDiv);
    
                activityHeaderDiv.appendChild(titulo);
                activityHeaderDiv.appendChild(priority);

                activityBodyDiv.appendChild(bodyText);
                activityBodyDiv.appendChild(bodyBoton);

                bodyText.appendChild(category);
                bodyText.appendChild(date);
                bodyText.appendChild(description);

                bodyBoton.appendChild(done);
                bodyBoton.appendChild(deleteActivity);

                //borrar
                deleteActivity.addEventListener("click", () => {
                    s.deleteActivity(activity.title);
                    activityDiv.remove();
                });
            });
        }
        
}