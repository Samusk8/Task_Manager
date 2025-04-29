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
                });
    
                categoryP.innerText = category.name;
                categoryDiv.style.backgroundColor = category.color;
                categoryDiv.appendChild(categoryP);
                categoryDiv.appendChild(categoryButton);

                const categoryContainer = document.getElementById("categoryContainer");

                categoryContainer.appendChild(categoryDiv);
                categoryContainer.appendChild(intro);
            
            });
        }

//validar campos form
}