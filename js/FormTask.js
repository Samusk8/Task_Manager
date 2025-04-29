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
                    categoryDiv.remove();
                    intro.remove();
                });
    
                categoryP.innerText = category.name;
                categoryDiv.style.color = category.color;
                categoryDiv.appendChild(categoryP);
                categoryDiv.appendChild(categoryButton);

                const categoryContainer = document.getElementById("categoryContainer");

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
                    activityDiv.remove();
                });
            });
        }
        
}